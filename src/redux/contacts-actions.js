import types from './contacts-types'

export const addContact = (data) => ({
    type: types.ADD,
    payload: data,
})

 export const removeContact = (id) => ({
    type: types.REMOVE,
    payload: id,
})

export const changeFilter = (value) => ({
    type: types.FILTER,
    payload: value
})
