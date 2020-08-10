import axios from 'axios'
import {strict as assert} from 'assert' // node env v 9 did not support "import assert..."

function mapToUniPort(prot:string): Promise<any> {
  return axios.get("https://www.ebi.ac.uk/proteins/api/proteins", {
      params: {
        offset: 0,
        protein: prot
      }
    })
    .then(res => 
    {let proteins = res.data.filter(
      function(x:object) {return ("protein" in x)})
    //console.log("Number of protein entries found: " + proteins.length)
    return proteins
    })
    .catch(err => {throw(err)})
}
  
  
export default async function(prot:string): Promise<any> {
  let proteins = await mapToUniPort(prot);
  console.log(proteins)
  assert.notEqual(proteins.length, 0); 
  //if no entries found then input does not correspond to a protein in UniProt
  return prot
}
  
