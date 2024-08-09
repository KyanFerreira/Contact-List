import React from "react"; 
import {useEffect, useState} from 'react'
export default function SelectedContact({contactId}) {
    const [contact, setContact] = useState({id: 1, name: "Kyans"});
    useEffect(() => {
        async function fetchContact() {
            const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/" + contactId;
          try {
            // your fetch logic will go here
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setContact(json);
            console.log(contact.name);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      }, []);
      return(
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name: {contact.name}</td>
              <td>Email: {contact.email}</td>
              <td>Website: {contact.website}</td>
              <td>Phone: {contact.phone}</td>
            </tr>
            </tbody>
            </table>
      );
    
    
    
    //console.log('Click Worked' + contactId);
}