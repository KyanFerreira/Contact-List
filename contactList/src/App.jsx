import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
 console.log(selectedContactId);
  return (
    <>
      {selectedContactId ? (
        <div><SelectedContact contactId={selectedContactId}/></div>
      ) : (
        <ContactList data={setSelectedContactId}/>
      )}
    </>
  );
}