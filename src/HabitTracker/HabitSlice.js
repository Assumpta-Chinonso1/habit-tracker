import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: JSON.parse(localStorage.getItem('habits')) || [],

}

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        
    }
})