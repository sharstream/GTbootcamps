const expect = require("chai").expect;

const updateGuess = function (arr, char, str) {
    return arr.map((e, i) => str[i] === char ? char : e);
}
describe("updateGuess", function(){
    it("should nop update array when letter appears in word once", function(){
        expect(updateGuess(['_', '_', '_'], 'h', 'hat')).to.deep.equal(['h', '_', '_']);
    });

    it("should update array when letter does not appear in word once", function () {
        expect(updateGuess(['_', '_', '_'], 'h', 'bat')).to.deep.equal(['_', '_', '_']);
    });

    it("should update array when letter appears in word repeatedly", function () {
        expect(updateGuess(['_', '_', '_'], 'o', 'goo')).to.deep.equal(['_', 'o', 'o']);
    });
});