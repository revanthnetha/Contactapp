import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";
import { RootState } from "../state/store";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

const ContactList: React.FC = () => {
  // useSelector is used to get the contacts array from the store
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const [selectedContact, setSelectedContact] = useState<Contact | undefined>();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteContactOpen, setIsDeleteContactOpen] = useState(false);

  const openEditModal = (contact: Contact) => {
    setSelectedContact(contact);
    setIsEditModalOpen(true);
  };

  const openDeleteContact = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDeleteContactOpen(true);
  };

  return (
    <div className="contact-list p-4">
      <h2 className="text-xl font-bold mb-4 mt-10 md:mt-4">Contact List</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contacts.map((contact: Contact) => (
          <div
            key={contact.id}
            className="shadow-sm p-4 mb-2 border rounded-md flex flex-col md:flex-row justify-between md:min-h-30"
          >
            <div>
              <p>
                <strong className="text-lg">Name:</strong> {contact.firstName}{" "}
                {contact.lastName}
              </p>
              <p
                className={`mt-2 text-sm ${
                  contact.status === "active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <strong className="text-lg">Status:</strong> {contact.status}
              </p>
            </div>

            <div className="mt-2 space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row gap-2">
              <button
                onClick={() => openEditModal(contact)}
                className="bg-blue-500 text-white px-4 py-2 rounded text-sm md:text-base"
              >
                Edit
              </button>
              <button
                onClick={() => openDeleteContact(contact)}
                className="bg-red-500 text-white px-4 py-2 rounded text-sm md:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Contact Modal */}
      {isEditModalOpen && selectedContact && (
        <EditContact
          contact={selectedContact}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {/* Delete Popup */}
      {isDeleteContactOpen && selectedContact && (
        <DeleteContact
          contact={selectedContact}
          onClose={() => setIsDeleteContactOpen(false)}
        />
      )}
    </div>
  );
};

export default ContactList;
