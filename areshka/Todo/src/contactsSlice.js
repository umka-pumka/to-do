import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        dobav: (state, action) => {
            state.push(action.payload);
        },
        izmen: (state, action) => {
            const { id, name } = action.payload;
            const contact = state.find((contact) => contact.id === id);
            if (contact) {
                contact.name = name;
            }
        },
        udalil: (state, action) => {
            return state.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { dobav, izmen, udalil } = contactsSlice.actions;

export default contactsSlice.reducer;

