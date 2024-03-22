import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import styles from "./App.module.css"
import { useSelector } from "react-redux"
import { selectContacts } from "./redux/contactsSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchContacts } from "./redux/contactsOps"

function App() {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length === 0 ? <p>Add your first contact</p> : <SearchBox />}
      <ContactList />
    </div>
  )
}

export default App
