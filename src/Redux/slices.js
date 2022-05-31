import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerNewUser = createAsyncThunk(
    'fetch/registerNewUser',
    async function ({ email, password, name, surname }) {
        try {
            const response = await axios.post('http://localhost:3001/users', {
                email,
                password,
                name,
                surname
            })
            const data = response.data
            return data
        } catch {
            alert('Упс, что-то пошло не так (︶︹︺)')
        }
    }
)

export const authorizationUser = createAsyncThunk(
    'fetch/authorizationUser',
    async function ({ email, password }) {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password
            })
            const data = response.data
            return data
        } catch {
            alert('Упс, что-то пошло не так (︶︹︺)')
        }
    }
)


const userSlice = createSlice({
    name: 'fetch',
    initialState: {
        key: [],
        isAuth: false
    },
    reducers: {
        userDataLogin(state, action) {
            state.key = action.payload

        },
        logOut(state) {
            localStorage.removeItem('user')
            state.key = ''
            state.isAuth = false
        }
    },
    extraReducers: {
        [registerNewUser.fulfilled]: (state, action) => {
            state.key = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            state.isAuth = true
        },
        [authorizationUser.fulfilled]: (state, action) => {
            state.key = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            state.isAuth = true
        }
    }
})

export const { userDataLogin, logOut } = userSlice.actions
export default userSlice.reducer