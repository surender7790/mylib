import uniqueName from 'unique-random-array';
import nameList from './name_list.json';
var randName = uniqueName(nameList);
module.exports = {
    names: nameList
    , randName: random
};

function random(number) {
    if (number === undefined) {
        return randName();
    }
    else {
        var randomName = [];
        for (var i = 0; i < number; i++) {
            randomName.push(randName());
        }
        return randomName;
    }
}