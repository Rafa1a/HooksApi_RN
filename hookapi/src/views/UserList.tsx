import React, {useContext} from 'react';
import { Text, StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import { ListItem,Avatar, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '@rneui/base';
import { Alert } from 'react-native';
import Userscontext from '../context/Userscontexte';

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



const UserList: React.FC = (props:any) => {
  
  const {state, dispatch} : {state:UsersContextType, dispatch:any} =useContext(Userscontext)
  
  function confirmUserDeletion(user: User) {
    Alert.alert ('Excluir Usuário', "Deseja Excluir Usuário?", [
       {
        text:'sim',
        onPress() {
          
          dispatch({
            type:'deleteUser',
            payload: user,
          })
        }
        
      },
      {
        text: 'Não'
      } 

    ] )
  }

  function getUserItem({ item }: { item: User }) {
    
    return (
        
        <>
        <ListItem bottomDivider key={item.id} onPress={()=>props.navigation.navigate('UserForm', item)}>
            
            <Avatar
            rounded
            source={{ uri: item.avatar }}
            />
            <ListItem.Content>
            <ListItem.Title>{item.nome}</ListItem.Title>
            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <Button title='edit' buttonStyle={{borderRadius:50}}
            onPress={()=> {props.navigation.navigate("UserForm", item)}}
            />
            <Button title='Excluir' buttonStyle={{borderRadius:50}}
            onPress={()=> confirmUserDeletion(item)}
            />
        </ListItem>
        </>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;
