import React from "react";
import CreateContact from "../components/CreateContact";
import ContactList from "../components/ContactList";

const Contact: React.FC = () => {
  return (
    <div >
      <div className="text-xl align-center text-center pb-4 bg-blue-400 pt-4 font-bold text-white">
        Contact Page
      </div>
      <CreateContact />
      <ContactList />
    </div>
  );
};

export default Contact;
