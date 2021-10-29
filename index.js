const { Command } = require("commander");
const program = new Command();
const {
    listContacts,
    addContact,
    getContactById,
    removeContact,
} = require("./contacts.js");


