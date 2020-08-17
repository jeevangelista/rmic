import {strict as assert} from 'assert'
export default async function validator(data:object): Promise<any> {
  const gene = data["Gene"]
  const taxid = data["Taxon_ID"]
  assert.notEqual(gene, "STAT3"); 
  //if no entries found then input does not correspond to a protein in UniProt
  return {
      ...data,
      "Gene": gene
  }
}  