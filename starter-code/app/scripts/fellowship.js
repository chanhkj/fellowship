console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section')
  middleEarth.setAttribute('id', 'middle-earth')
  document.body.appendChild(middleEarth)

  // add each land as an article tag
  for (var i = 0; i < lands.length; i++) {
    var articleTag = document.createElement('article')
    middleEarth.appendChild(articleTag)
    var h1Tag = document.createElement('h1')
    h1Tag.textContext = lands[i]
    articleTag.appendChild(h1Tag)
    // inside each article tag include an h1 with the name of the land

    // append middle-earth to your document body
  }
}
makeMiddleEarth(lands)

// Part 2

function makeHobbits (hobbits) {

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
var hobbitsList = document.createElement('ul');
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li')
    hobbit.textContent = hobbits[i];
    hobbit.className = "hobbit";
    hobbitsList.appendChild(hobbit)
  }
  // give each hobbit a class of hobbit
  var shire = document.getElementsByTagName('article')[0];
  shire.appendChild(hobbitsList);


}
makeHobbits(hobbits);


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement('div');
  ring.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
//  document.getElementsById("the-ring").addEventListener("click", )
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName('hobbit')[0];
  frodo.appendChild(ring);
}


// Part 4


function makeBuddies() {
  // create an aside tag
  var asideTag = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = document.createElement('ul');
  // insert your aside as a child element of rivendell
  asideTag.appendChild(buddiesList);
  var rivendell = document.getElementsByTagName('article')[1];
  rivendell.parentNode.insertBefore(asideTag, rivendell);


}
makeBuddies(buddies);



// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var buddies = document.getElementsByTagName('aside')[0].getElementsByTagName('li');
  var strider = buddies[3];
  strider.textContent = "Aragorn";
}
beautifulStranger();



// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
