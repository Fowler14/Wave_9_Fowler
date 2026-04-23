// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.
const contacts = [{
    name: "Mom",
    phone: 6229899090,
    isFavorite: true},
    {name: "Dad",
    phone: 6109990000,
    isFavorite: false},
    {name: "Sister",
    phone: 9890009898,
    isFavorite: true}
];

console.log(contacts);
// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.
console.log(contacts.length);
// STEP 4: Log the name of the first contact.
console.log(contacts[0])
// STEP 5: Update one contact’s isFavorite value.
const updatedContacts = contacts.map(item => {
    if (item.name === "Dad") {
        item.isFavorite = true;
    }
    return item;
});

// STEP 6: Add (push) a new contact object.
updatedContacts.push({
    name: "Uncle",
    phone: 1010009898,
    isFavorite: true});
// STEP 7: Log the updated contacts array.
console.log(updatedContacts);