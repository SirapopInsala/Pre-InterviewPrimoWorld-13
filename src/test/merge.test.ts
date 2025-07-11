import { merge } from '../lib/merge';

describe('merge', () => {
    it('merges three sorted arrays correctly', () => {
        expect(merge([1,3,5], [6,4,2], [0,7,8])).toEqual([0,1,2,3,4,5,6,7,8]);
    });
    it('handles empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1,2,3], [], [])).toEqual([1,2,3]);
        expect(merge([], [3,2,1], [])).toEqual([1,2,3]);
        expect(merge([], [], [1,2,3])).toEqual([1,2,3]);
    });
    it('handles negative numbers', () => {
        expect(merge([-3,-2,-1], [0,-1,-2], [-4,1,2])).toEqual([-4,-3,-2,-2,-1,-1,0,1,2]);
    });
    it('handles duplicate values', () => {
        expect(merge([1,2,2], [2,2,1], [1,2,2])).toEqual([1,1,1,2,2,2,2,2,2]);
    });
    it('handles single element arrays', () => {
        expect(merge([1], [2], [3])).toEqual([1,2,3]);
        expect(merge([3], [2], [1])).toEqual([1,2,3]);
    });
}); 