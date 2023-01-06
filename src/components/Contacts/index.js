import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Yasin",
      phone_number: "0508550616",
    },
    {
      fullname: "Anar",
      phone_number: "0519217666",
    },
    {
      fullname: "Rəsul",
      phone_number: "0519259205",
    },
  ]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
