import * as contactsService from "./contacts.js";
import { program } from "commander";

program
    .option("-a, --action <type>")
    .option("-id, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-ph, --phone <type>");

program.parse();
const options = program.opts();

const invokeAction = async ({ action, id, ...data }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsService.listContacts();
            return console.log(allContacts);
        case "getByID":
            const contactByID = await contactsService.getContactById(id);
            return console.log(contactByID);
        case "add":
            const newContact = await contactsService.addContact(data);
            return console.log(newContact);
        case "remove":
            const removedContact = await contactsService.removeContact(id);
            return console.log(removedContact);
    }
};

invokeAction(options);