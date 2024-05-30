import { isPositive } from './0-4-main';
describe ('isPositive()', () => {
    it('true when n > 0',()=>{
        expect(isPositive(1)).toBe(true);
    })
    it('true when n > 0',()=>{
        expect(isPositive(1)).toBe(false);
    })
    it('true when n > 0',()=>{
        expect(isPositive(-1)).toBe(false);
    })
})