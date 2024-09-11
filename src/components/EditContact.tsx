import React from "react";
import ContactForm from "./ContactForm";

interface EditContactProps {
  contact: {
    id: number;
    firstName: string;
    lastName: string;
    status: "active" | "inactive";
  };
  onClose: () => void;
}

const EditContact: React.FC<EditContactProps> = ({ contact, onClose }) => {
  return <ContactForm contact={contact} onClose={onClose} />;
};

export default EditContact;
