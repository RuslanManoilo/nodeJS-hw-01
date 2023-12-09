import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";


const contactsPath = path.resolve('db', 'contacts.json');
const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts));


export const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};

export const getContactById = async (contactID) => {
    const contacts = await listContacts();
    const searchedContact = contacts.find(contact => contact.id === contactID);
    return searchedContact || null;
};

export const addContact = async (data) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        ...data,
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

export const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(contactIdx => contactIdx.id === contactId);
    if (index === -1) {
        return null;
    };
    const [deletedContact] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return deletedContact;
};