import React, {useState,useEffect,useReducer, useContext} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button, TextInput } from "react-native";
import Userscontext from '../context/Userscontexte'
interface User {
    id: number;
    nome: string;
    email: string;
    avatar: string;
    // Outras propriedades, se houver
  }
  
  interface UsersContextType {
    users: User[]; // Estrutura do estado do contexto
  }
  
  
const UserForm: React.FC<any> = (props) => {
    // console.warn(Object.keys(props.route.params))
    const {state, dispatch} : {state:UsersContextType, dispatch:any} =useContext(Userscontext)
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    return (
        <>
        <View style={style.form}>
        <Text>{user.nome || "Nome"}</Text>
        <TextInput 
        style={style.input}
            onChangeText={nome => setUser({...user, nome})}
            placeholder="Informe o Nome"
            value={user.nome}
        />
        </View>
        <View style={style.form}>
        <Text>{user.email || "Email"}</Text>
        <TextInput 
        style={style.input}
        onChangeText={email => setUser({...user, email})}
            placeholder="Informe o Email"
            value={user.email}
        />
        </View>
        <View style={style.form}>
        <Text>{user.email || "avatar"}</Text>
        <TextInput 
        style={style.input}
        onChangeText={avatar => setUser({...user, avatar})}
            placeholder="Informe o avatar"
            value={user.avatar}
        />
        </View>
        <Button title="salvar"
        
        onPress={() => {
            dispatch({
                type:user.id ? 'updateUser' : 'createUser',
                payload:user

            }),
            props.navigation.goBack()
        }}/>
        </>
        
    );
};
const style =  StyleSheet.create ({
    input : {
        height: 40,
        borderColor: 'gray',
        borderWidth : 1,
        marginBottom:10

    },
    form : {
        padding:12
    }

})
export default UserForm;