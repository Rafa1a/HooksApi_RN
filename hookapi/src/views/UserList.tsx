import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import users from '../data/users';
import { ListItem,Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';

interface User {
  id: number;
  nome: string;
  email: string;
  avatar: string;
}


const UserList: React.FC = (props:any) => {
  function getUserItem({ item }: { item: User }) {
    
    return (
        
        <>
        <ListItem bottomDivider key={item.id} onPress={()=>props.navigation.navigate('UserForm')}
        
       
        >
            
            <Avatar
            rounded
            source={{ uri: item.avatar }}
            />
            <ListItem.Content>
            <ListItem.Title>{item.nome}</ListItem.Title>
            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
        </ListItem>
        </>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;
