const {
    listContacts,
    addContact,
    getContactById,
    removeContact,
} = require("./contacts.js");
const { Command } = require('commander');
const chalk = require("chalk");

const program = new Command();
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


// TODO: рефакторить
(async ({ action, id, name, email, phone })=>{
try{    switch (action) {
        case 'list':
        const contacts = await listContacts()
        console.table(contacts);
            break;

        case 'get':
            const user=await getContactById(id)
            if (user) {
                console.log(user);
            } else {
                console.log(chalk.red("Contact not found"));
            }
            break;

        case 'add':
            addContact(name, email, phone)
            break;

        case 'remove':
            const contactToRemove = await removeContact(id)
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
}
} catch (error) {
    console.log(error.message);
}
})(argv)


