import {strict as assert} from 'assert' // node env v 9 did not support "import assert..."
import validator from 'dist/uniprot.umd'

const input = "OCT4"
validator(input).then(res=>{assert.equal(input, res)}).catch(err=>{throw err})
