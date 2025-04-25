import clsx from "clsx";
import s from "./Contact.module.css";

import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact, onDelete }) {
  const { name, number, id } = contact;
  return (
    <div className={clsx(s.contactCard)}>
      <div className={clsx(s.contactItems)}>
        <p className={clsx(s.userDesc)}>
          <FaUser className={clsx(s.userIcon)} />
          {name}
        </p>
        <tel className={clsx(s.userTel)}>
          <FaPhoneAlt className={clsx(s.telIcon)} />
          {number}
        </tel>
      </div>
      <button className={clsx(s.delBtn)} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
