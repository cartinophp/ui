#!/usr/bin/env node
/**
 * Auto-generate type exports for all Vue components
 * This ensures 100% type coverage for consumers
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const COMPONENTS_DIR = './src/components'
const INDEX_PATH = './src/index.ts'

interface ComponentInfo {
  name: string
  fileName: string
  hasProps: boolean
  propsName: string
  additionalExports: string[]
}

function analyzeComponent(fileName: string): ComponentInfo {
  const filePath = join(COMPONENTS_DIR, fileName)
  const content = readFileSync(filePath, 'utf-8')
  const name = fileName.replace('.vue', '')

  // Look for interface/type definitions
  const propsPattern = new RegExp(
    `(?:export )?(?:interface|type) (${name}Props|I?${name}Properties)`,
    'i'
  )
  const propsMatch = content.match(propsPattern)

  // Look for additional exports (Item, Group, etc.)
  const additionalPattern = new RegExp(
    `export (?:interface|type) (${name}(?:Item|Group|Config|Option|Data)[^\\s{]*)`,
    'gi'
  )
  const additionalMatches = Array.from(content.matchAll(additionalPattern))

  return {
    name,
    fileName,
    hasProps: !!propsMatch,
    propsName: propsMatch ? propsMatch[1] : `${name}Props`,
    additionalExports: additionalMatches.map((m) => m[1]).filter(Boolean)
  }
}

function generateTypeExports() {
  console.log('🔍 Analyzing components...\n')

  const files = readdirSync(COMPONENTS_DIR)
    .filter((f) => f.endsWith('.vue'))
    .filter((f) => !f.includes('Enhanced') && !f.startsWith('_'))

  const components = files.map(analyzeComponent)

  // Generate export statements
  const typeExports = components
    .map((comp) => {
      const exports = [comp.propsName, ...comp.additionalExports]
      if (exports.length === 0) return null

      return `export type { ${exports.join(', ')} } from './components/${
        comp.fileName
      }'`
    })
    .filter((e): e is string => e !== null)

  console.log(`✅ Found ${components.length} components`)
  console.log(`📦 Generating ${typeExports.length} type export statements\n`)

  // Show what we found
  components.forEach((comp) => {
    const status = comp.hasProps ? '✓' : '⚠️'
    const exports = [comp.propsName, ...comp.additionalExports].join(', ')
    console.log(
      `${status} ${comp.name.padEnd(20)} → ${exports || 'no types found'}`
    )
  })

  console.log('\n📝 Generated type exports:\n')
  console.log(typeExports.join('\n'))
  console.log('\n💡 Copy the above exports to src/index.ts')
  console.log('   Or run: npm run generate:types -- --write')

  // If --write flag, update index.ts
  if (process.argv.includes('--write')) {
    updateIndexFile(typeExports)
  }

  return typeExports
}

function updateIndexFile(typeExports: string[]) {
  console.log('\n✏️  Updating src/index.ts...')

  let content = readFileSync(INDEX_PATH, 'utf-8')

  // Find existing type exports section
  const typeExportStart = content.indexOf('// Esporta i tipi')
  const typeExportEnd = content.indexOf('\n\n// NOTE:', typeExportStart)

  if (typeExportStart === -1 || typeExportEnd === -1) {
    console.error('❌ Could not find type exports section in index.ts')
    return
  }

  // Replace type exports section
  const before = content.substring(0, typeExportStart)
  const after = content.substring(typeExportEnd)

  const newContent =
    before + '// Esporta i tipi\n' + typeExports.join('\n') + after

  writeFileSync(INDEX_PATH, newContent, 'utf-8')
  console.log('✅ Updated src/index.ts with all type exports')
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTypeExports()
}

export { generateTypeExports }
