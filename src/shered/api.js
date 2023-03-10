
import axios from "axios";

const contactsInstance = axios.create({
    baseURL: "https://6409a8f6d16b1f3ed6d90f23.mockapi.io/contacts"
})
export const getAllContacts = () => contactsInstance.get(`/`)

export const deleteContacts = id => {
    return contactsInstance.delete(`/${id}`)
}

export const addContacts = data => {
    return contactsInstance.post("/", data);
}