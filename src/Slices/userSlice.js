import { createSlice } from "@reduxjs/toolkit";

const macbook = {
    users:[],
};

export const uSlice = createSlice({
    name:"karthik",
     initialState:macbook,
    reducers:{
        setUsers: (state,action)=>{
            state.users = [...state.users,action.payload]
        },

        deleteuser:(state,action)=>{
            state.users= state.users.filter(
                (user,index)=>index !==action.payload
            );

        }
    },
})

export const {setUsers,deleteuser} = uSlice.actions;

export default uSlice.reducer;