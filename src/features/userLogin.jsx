import {createSlice} from "@reduxjs/toolkit"

const userLogin = createSlice({
name:"user",
initialState:{
    isSignedIn:false,
    userData:null,
    blogPost:null
},
reducers:{
    setSignedIn:(state,action)=>{
        state.isSignedIn=action.payload;
    },
    setUserData:(state,action)=>{
        state.userData = action.payload
    },
    setBlogPost:(state,action)=>{
        state.blogPost = action.payload;
    }
}
});
export const {setSignedIn,
    setUserData,
    setBlogPost
} = userLogin.actions;
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectBlogPost = (state) => state.user.blogPost;

export default userLogin.reducer;
