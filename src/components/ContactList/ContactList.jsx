import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={clsx(s.contactList)}>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </div>
  );
}
