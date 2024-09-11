import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id:number
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

interface ContactState {
  contacts: Contact[];
}

// The initial state of Contact page is Empty Array of contacts
const initialState: ContactState = {
  contacts: [],
};

// Creating Reducers to listen specific actions such as pushing the contact page into array
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    resetContact: () => initialState,
  },
});

export const { addContact, resetContact,updateContact,deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
