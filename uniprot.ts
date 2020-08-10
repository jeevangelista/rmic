import fetch from 'node-fetch'
import {strict as assert} from 'assert' // node env v 9 did not support "import assert..."

async function mapToUniPort(prot: string): Promise<any> {
  const url = `https://www.ebi.ac.uk/proteins/api/proteins?offset=0&protein=${prot}`
  const results = await (await fetch(url, 
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }
  )).json()
  return results.filter(r=>r.protein!==undefined)
}
  
  
export default async function validator(prot:string): Promise<any> {
  let proteins = await mapToUniPort(prot);
  assert.notEqual(proteins.length, 0); 
  //if no entries found then input does not correspond to a protein in UniProt
  return prot
}

validator("OCT4").then(res=>{console.log(res)}).catch(err=>{throw err})
  
