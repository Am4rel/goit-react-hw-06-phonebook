import { v4 as id } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// export const addNumber = (name, number) => {
//     const contactObj = {
//         name: name,
//         number: number,
//         id: id()
//     }
//     return {
//         type: "contacts/ADD_NUM",
//         payload: contactObj
//     };
// }

// export const deleteNumber = id => ({
//     type: "contacts/DELETE_NUM",
//     payload: id
// })

// export const filter = value => ({
//     type: "contacts/FILTER",
//     payload: value
// })

export const addNumber = createAction("contacts/ADD_NUM", (name, number) => {
    return {
        payload: {
            name: name,
            number: number,
            id: id()
        }
    }
});

export const deleteNumber = createAction("contacts/DELETE_NUM");

export const filter = createAction("contacts/FILTER");