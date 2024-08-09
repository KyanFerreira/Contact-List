import React from "react"; 

export default function ContactRow({ contact, clickMe }) {

    
return(
    <tr value={contact.id} onClick={() =>{clickMe(contact.id)}} >
    <td>{contact.name}</td>
    <td>{contact.phone}</td>
    <td>{contact.email}</td>
</tr>
);


}