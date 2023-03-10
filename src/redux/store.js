import { configureStore } from "@reduxjs/toolkit";

import phonebookSlice from "./phonebook/phonebook-slice";
import filterReducer from "./filter/filter-reducer";



export const store = configureStore({
    reducer: {
        contacts: phonebookSlice,
        filter: filterReducer
    }
})


