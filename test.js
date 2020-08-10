import {strict as assert} from 'assert' // node env v 9 did not support "import assert..."


async function validate(input) {
    var d = new Date();
    var start = d.getTime();
    const validator = await import('./dist/uniprot.umd.js')
    const val = validator(input).then(res=>{return assert.equal(input, res)}).catch(err=>{throw err}) 
    console("Elapsed " + d.getTime()-start)
    return val
}

validate("OCT4").then(res=>(res)).catch(err=>{throw err})