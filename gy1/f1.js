var c1 = {
    nev: 'One',
    email: 'one@mail.com',
    number: '+36301111111'
};
var c2 = {
    nev: 'Two',
    email: 'two@mail.com',
    number: '+36302222222'
};
var c3 = {
    nev: 'Three',
    email: 'three@mail.com',
    number: '+36302222222'
};

var connections = [c1, c2, c3];

function answer(param,array) {
    for(var i = 0; i<array.length; i++) {
        if((array[i].nev == param) || (array[i].email == param) || (array[i].number == param)) {
            console.log(array[i]);
        }
    }
}

answer('+36302222222',connections);