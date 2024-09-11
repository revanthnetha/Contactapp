import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../state/contact/contactSlice";
import { Contact } from "../utils/types";

interface DeleteContactProps {
  contact: Contact;
  onClose: () => void;
}

const DeleteContact: React.FC<DeleteContactProps> = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  //calls the deleteContact Reducer with contact id,gets filtered by removing the selected contact id
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
        <p>
          Are you sure you want to delete {contact.firstName} {contact.lastName}
          ?
        </p>
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
