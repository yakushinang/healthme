import {generateKey} from './helpers'

describe('generateKey', ()=>{
    it('get id', ()=>{
        const id = generateKey({rank:"89", brandName:"sony"})
        expect(id).toEqual("89sony");
    })
})
