import { combineReducers } from "redux";
import types from "./contacts-types";
import { v4 as uuidv4 } from "uuid";


const initialState = [
  { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
  { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
  { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
  { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
]

const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state,];

      case types.REMOVE:
          return state.filter((contact) => contact.id !== payload)
    default:
      return state;
  }
 
};

const filter = (state = "", {payload,type}) => {
   switch (type) {
    case types.FILTER:
           return payload;
       
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
