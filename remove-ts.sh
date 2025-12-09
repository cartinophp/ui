#!/bin/bash

# Script per rimuovere TypeScript dai file Vue

for file in src/runtime/components/*.vue; do
  echo "Processing $file..."
  
  # Rimuovi lang="ts" dai tag script
  sed -i '' 's/<script lang="ts"/<script/g' "$file"
  sed -i '' 's/<script setup lang="ts"/<script setup/g' "$file"
  
  # Rimuovi export interface, export type, type annotations di base
  sed -i '' '/^export interface/,/^}/d' "$file"
  sed -i '' '/^export type/d' "$file"
  sed -i '' '/^type /d' "$file"
  sed -i '' 's/: [A-Z][a-zA-Z0-9<>|&, ]*//g' "$file"
  
  # Rimuovi import type
  sed -i '' '/^import type/d' "$file"
  sed -i '' 's/import type {/import {/g' "$file"
done

echo "Done!"
