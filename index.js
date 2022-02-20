const fs = require('fs')
const path = require('path')
import { parse } from 'csv-parse';
const dataset = fs.readFileSync(
  path.join(__dirname, 'tohoku.tsv'),
  'utf-8'
)

const records = parse(dataset, {
  columns: true,
  delimiter: '\t',
  skip_empty_lines: true,
  trim: true,
})

console.log(records)
