import React, {useState,useEffect,useReducer, createContext} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import users from '../data/users';


const Userscontext = createContext({});
export const UsersProvider = (props:any) => {
    return (
        <Userscontext.Provider value={{
            state : {
            users
        }}}>
            {props.children}
        </Userscontext.Provider>

    )
}
export default Userscontext;