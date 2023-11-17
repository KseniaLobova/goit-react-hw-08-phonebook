import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"



const contactsInitialState = {
    contacts: [],
    error: null,
   loading:null,
}




const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
             state.push(action.payload)
            },
            prepare({name,number}) {
                return {
                    payload: {
                        name,
                        number,
                        id:nanoid()
                }
            }
        }},
        
        deleteContact(state, action) {
            return state.filter(contact => {
               return  contact.id !== action.payload
            }
               ) },
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

