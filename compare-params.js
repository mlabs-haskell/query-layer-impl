import yaml from 'js-yaml';
import fs from 'fs';

// Input YAML
const blockFrostParams = yaml.load(fs.readFileSync('./protocol-params.blockfrost.yaml').toString());
const maestroParams = yaml.load(fs.readFileSync('./protocol-params.maestro.yaml').toString());

let maestroKeys = Object.keys(maestroParams)

const removeFromArray = (arr, key) => {
  const i = arr.indexOf(key)
  if (i > -1) {
    arr.splice(i, 1)
  }
  return arr
}

const inBoth = []
const blockFrostKeys = []

for (const key of Object.keys(blockFrostParams)) {
  if (maestroParams[key]) {
    maestroKeys = removeFromArray(maestroKeys, key)
    inBoth.push(key)
    // console.log(`${key} is present in both`)
  } else {
    blockFrostKeys.push(key)
    // console.log(`${key} is present in blockfrost but not in maestro`)
  }
}


console.log(`Keys present in both:`)
inBoth.map((k) => console.log(k))

console.log('\n\n--------------------\n\n')

console.log(`Maestro unmatched keys:`)
maestroKeys.map((k) => console.log(k))

console.log('\n\n--------------------\n\n')

console.log(`Blockfrost unmatched keys:`)
blockFrostKeys.map((k) => console.log(k))





// console.log(`${maestroKeys} were unmatched`)
