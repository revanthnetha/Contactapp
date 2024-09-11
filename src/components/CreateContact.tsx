import React, { useState } from "react";
import ContactForm from "./ContactForm";

const CreateContact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative p-4">
      <button
        onClick={openModal}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Contact
      </button>

      {isModalOpen && <ContactForm onClose={closeModal} />}
    </div>
  );
};

export default CreateContact;
