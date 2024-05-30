"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _0_4_main_1 = require("./0-4-main");
describe('isPositive()', () => {
    it('true when n > 0', () => {
        expect((0, _0_4_main_1.isPositive)(1)).toBe(true);
    });
    it('true when n > 0', () => {
        expect((0, _0_4_main_1.isPositive)(1)).toBe(false);
    });
    it('true when n > 0', () => {
        expect((0, _0_4_main_1.isPositive)(-1)).toBe(false);
    });
});
