import React, {useState,useEffect,useReducer, createContext} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import users from '../data/users';
interface User {
    id: number;
    nome: string;
    email: string;
    avatar: string;
  }
  interface UsersState {
    users: User[];
  }
  
type Action =
  | { type: string; payload: User }
  | { type: string; payload: User }
  | { type: string; payload: User };

const initialState = {users}
const Userscontext = createContext<any>({});
const actions:any = {

    createUser(state:UsersState, action:Action):UsersState{
        const user = action.payload
        user.id = Math.random()

        return {
            ...state,
            users : [...state.users, user]
        }

    },
    updateUser(state:UsersState, action:Action):UsersState{
        const up = action.payload
        

        return {
            ...state,
            users : state.users.map(u => u.id === up.id ? up : u)
        }
    },

    deleteUser(state:UsersState, action:Action):UsersState{
        const user = action.payload
            return {
                // ...state,
                users: state.users.filter((u:any) => u.id !== user.id)
            }
    }

}
export const UsersProvider = (props:any) => {


    function reducer(state:any, action:Action) {
        const fn = actions[action.type]
        return fn ? fn(state,action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Userscontext.Provider value={{state, dispatch}}>
            {props.children}
        </Userscontext.Provider>

    )
}
export default Userscontext;