// App.jsx

// import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import style from "./App.module.css";

export default function App() {
  
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("contact");
  //   return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  // });

  // useEffect(
  //   () => window.localStorage.setItem("contact", JSON.stringify(contacts)),
  //   [contacts]
  // );
  // const [filter, setFilter] = useState("");

  // const filterContacts = contacts.filter(
  //   (contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.replace(/[^\d]/g, "").includes(filter)
  // );

  return (
    <div className={style.container}>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox
      // value={filter}
      // onFilter={setFilter}
      />
      <ContactList />
    </div>
  );
}
