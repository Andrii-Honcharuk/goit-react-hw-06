//ContactList.jsx

import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

function getVisibleContacts(contacts, filter) {
  return contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
    // ||       contact.number.replace(/[^\d]/g, "").includes(filter)
  );
}

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => {
    console.log("state", state);
    return state.filters.name;
  });
  console.log("Contacts", contacts);
  console.log("Filter", filter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <ul className={style.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
