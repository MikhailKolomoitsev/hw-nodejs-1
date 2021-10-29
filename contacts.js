const fs = require("fs/promises");
const path = require("path");
const uniqid = require("uniqid");

const contactsPath = path.join('db', 'contacts.json')

const listContacts = async () => {
    const result = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(result)
}

const getContactById = async (contactId) => {
    const contacts = await listContacts()
    const [result] = contacts.filter(contact => contact.id === contactId)
    return reuslt
}

const removeContact = async (contactId) => {
    const contacts = await listContacts()
    const result = contacts.filter(contact => contact.id !== contactId)
    await fs.writeFile(contactsPath, JSON.stringify(result, null, 2),)
    return result
}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts()
    const newContact = { id: uniqid(), name, email, phone }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2),)
    return newContact
}

module.exports = { listContacts, getContactById, removeContact, addContact };