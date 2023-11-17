import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from './operation';
import { nanoid } from "nanoid"



const contactsInitialState = {
    contacts: [],
    error: null,
   isLoading:null,
}




const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
      extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //          state.push(action.payload)
    //         },
    //         prepare({name,number}) {
    //             return {
    //                 payload: {
    //                     name,
    //                     number,
    //                     id:nanoid()
    //             }
    //         }
    //     }},
        
    //     deleteContact(state, action) {
    //         return state.filter(contact => {
    //            return  contact.id !== action.payload
    //         }
    //            ) },
    // }
})

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

