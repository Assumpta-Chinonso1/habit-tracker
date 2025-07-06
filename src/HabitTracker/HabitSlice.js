const {createSlice, nanoid} = require('@reduxjs/toolkit');

const initialState = {
    habits: JSON.parse(localStorage.getItem("habits")) || []
}


const habitSlice = createSlice ({
    name: "habits",
    initialState,
    id: nanoid,
    records:{},
    reducers: {
        
    }
})





























