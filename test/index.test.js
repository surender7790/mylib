import {
    expect
}
from 'chai';
import nameList from '../src/index';
/*This is test written*/
describe('names', function () {
    it("Should be array of strings", function () {
        expect(nameList.names).to.satisfy(isArrayOfStrings);

        function isArrayOfStrings(array) {
            return array.every(function (item) {
                return typeof item === 'string';
            });
        }
    });
    /* Test for element is present or not*/
    it("Should include 'Surender' ", function () {
        expect(nameList.names).to.include('Surender');
    });
});
/* Unit test for random names */
describe('Random name', function () {
    it("should return random names", function () {
        var randomName = nameList.randName();
        expect(nameList.names).to.include(randomName);
    });
    it("should return an array of random items if number passes", function () {
        var randomItem = nameList.randName(3);
        expect(randomItem).to.have.length(3);
        randomItem.forEach(function (item) {
            expect(nameList.names).to.include(item);
        });
    });
});