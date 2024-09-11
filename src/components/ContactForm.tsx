import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../state/contact/contactSlice";
import { Contact } from "../utils/types";
interface ContactFormProps {
  contact?: Contact;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    status: "active" as "active" | "inactive",
  });

  //This is for Update Contact Modal when selected Contact is provided
  useEffect(() => {
    if (contact) {
      setFormState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        status: contact.status,
      });
    }
  }, [contact]);

  //dynamically changing the states of contact Fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      //if the id is status then update as active|inactive else update firstName or lastName with their changed Values
      [id]: id === "status" ? (value as "active" | "inactive") : value,
    }));
  };

  //   dispatch is used to send the contact field to store
  const handleSave = () => {
    // In update Id is already set.just need to spread the original contact and formState to merge the changes
    if (contact) {
      dispatch(updateContact({ ...contact, ...formState }));
    } else {
      // In add, id is not set. So we need to generate a new id and send
      dispatch(addContact({ id: Date.now(), ...formState }));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        {/* If contact is selected then show Edit else Add new */}
        <h2 className="text-xl font-bold mb-4">
          {contact ? "Edit" : "Add New"} Contact
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm md:text-md  font-medium text-gray-700 border-solid"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formState.firstName}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm md:text-md  font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formState.lastName}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm md:text-md  font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              value={formState.status}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
