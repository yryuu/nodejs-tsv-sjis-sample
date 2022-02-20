import * as fs from 'fs';
import * as path from 'path';
//import { parse } from 'csv-parse';
import {generate, parse, transform, stringify} from 'csv/sync';
import Encoding from 'encoding-japanese';

let dataset = fs.readFileSync(
  path.join('tohoku.tsv'),
)
dataset = Encoding.convert(dataset, {
  from: 'SJIS',
  to: 'UNICODE',
  type: 'string',
});

const records = parse(dataset, {
  columns: true,
  delimiter: '\t',
  skip_empty_lines: true,
  trim: true,
})

console.log(records)
