var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('profiles.json', 'utf8'));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < obj.length; i++) {
    var friendCount = Math.floor(Math.random() * 6) + 1; // 1-6

    for (var j = 0; j < friendCount; j++) {
        var f = obj[getRandomInt(0,obj.length-1)]
        if ( typeof  obj[i]['friend'] === 'undefined' ) {
            obj[i]['friend'] = []
        }
        obj[i]['friend'].push( { _id: f['_id']  } )
    }
}

for (var i = 0; i < obj.length; i++) {
    var obj1 = obj[i];
    fs.writeFile( './profiles/' + obj1['_id'] + '.json', JSON.stringify(obj1,'\t',4), function (err) {
        if (err) return console.log(err);
        console.log('Done with profiles');
    });
}


fs.writeFile('profiles.json', JSON.stringify(obj,'\t',4), function (err) {
    if (err) return console.log(err);
    console.log('Done with profiles.json');
});