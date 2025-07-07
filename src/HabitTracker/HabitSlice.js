import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: JSON.parse(localStorage.getItem('habits')) || [],
    
}