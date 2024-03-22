import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import { filteredContacts } from "../../redux/contactsSlice"

import styles from "./ContactList.module.css"

const ContactList = () => {
  const contacts = useSelector(filteredContacts)

  return (
    <ul className={styles.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList
