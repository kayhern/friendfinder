//friends - this is the format of what friend information should go into the modal if there is a match

let friends = [{
    name: "Penelope",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Racehorse_Penelope.jpg/440px-Racehorse_Penelope.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}, {
    name: "Kiki",
    photo: "",
    scores: [
        5,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        3,
        2
    ]
}];

//so other files can access this friends object
module.exports = friends;