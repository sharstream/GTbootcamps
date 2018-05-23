
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var disemvowel = require('../disemvowel');

describe('Disemvowel', function () {
    it('this is a string', function () {
        expect(function () {
            to.be.a('string');
        });
    });

    it('this is not a string', function () {
        expect(function () {
            should.not.equal(2);
        });
    });

    it('should remove all vowels from uppercase', function () {
        expect(disemvowel('THIS IS UPPERCASE')).to.equal('THS S PPRCS');
    });

    it('should remove all mixed strings', function () {
        expect(disemvowel('this IS mixed and has 2 NUMBERS 92')).to.equal('ths S mxd nd hs 2 NMBRS 92');
    });

    it('should remove all vowels from uppercase', function () {
        expect(disemvowel('this IS mixed')).to.equal('ths S mxd');
    });

    it('should case numbers to strings', function () {
        expect(disemvowel(10971)).to.equal('10971');
    });

});