import React from "react";
import ContactForm from "./ContactForm";
import { Contact } from "../utils/types";

interface EditContactProps {
  contact: Contact;
  onClose: () => void;
}

const EditContact: React.FC<EditContactProps> = ({ contact, onClose }) => {
  return <ContactForm contact={contact} onClose={onClose} />;
};

export default EditContact;
