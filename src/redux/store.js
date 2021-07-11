import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import checkList from '../utils/checkList';
import { readStorage } from '../utils/updateLocalStorage';
import * as actions from './actions';

const storage = readStorage()
const storageContacts = storage ? storage : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
    contacts: {
        items: [...storageContacts],
        filter: ''
    }
}
// const reducer = (state = initialState, { type, payload }) => {
//     const { contacts } = state;
//     switch (type) {
//         case "contacts/ADD_NUM":
//             const namesDifference = checkList(contacts, payload.name);
//             namesDifference > 0 && alert(`You already have contact ${payload.name} in your Phonebook.`);
//             const newState = namesDifference === 0 ?
//                 {
//                     contacts: {
//                         ...contacts,
//                         items: [
//                             ...contacts.items,
//                             payload
//                         ]
//                     }
//                 } :
//                 state;

//             return newState;

//         case "contacts/DELETE_NUM":
//             return {
//                 contacts: {
//                     ...contacts,
//                     items: contacts.items.filter(item => item.id !== payload)
//                 }
//             }

//         case "contacts/FILTER":
//             return {
//                 contacts: {
//                     ...contacts,
//                     filter: payload
//                 }
//             }

//         default:
//             return state
//     }
// }

const getNewState = (namesIsDifferent, payload, state) => {
    const { contacts } = state;
    if (namesIsDifferent > 0) {
        alert(`You already have contact ${payload.name} in your Phonebook.`);
        return state;
    } else {
        return {
            contacts: {
                ...contacts,
                items: [
                    ...contacts.items,
                    payload
                ]
            }
        };
    };
}

const rootReducer = createReducer(initialState, {
    [actions.addNumber]: (state, { payload }) => {
        const { contacts } = state;
        const namesDifference = checkList(contacts, payload.name);
        const newState = getNewState(namesDifference, payload, state);
        return newState;
    },
    [actions.deleteNumber]: ({ contacts }, { payload }) => ({ contacts: { ...contacts, items: contacts.items.filter(item => item.id !== payload) } }),
    [actions.filter]: ({ contacts }, { payload }) => ({ contacts: { ...contacts, filter: payload } })
})

const store = configureStore({
    reducer: { rootReducer },
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV === 'development'
});
export default store;