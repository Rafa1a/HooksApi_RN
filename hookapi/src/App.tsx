import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer }from  '@react-navigation/native'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button } from '@rneui/base';
import { Icon } from '@rneui/themed';
import test from './views/test';
import { UsersProvider } from './context/Userscontexte';

const Stack = createNativeStackNavigator();
export default (props: any) => {
  return (
    <UsersProvider>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='UserList' screenOptions={screnoptions}>
          <Stack.Screen
              name='UserList'
              component={UserList}
              {...props}
              options={({navigation}) => {
                return {title: "Lista de Usuários",
                headerRight: () => (
                  <Button 
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon={<Icon name='add' size={25} color="white" />
                    } />
                )}
              }}
            />

            <Stack.Screen
              name='UserForm'
              component={UserForm}
              options={{title: 'Formulários de Usuários'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </UsersProvider>
  );
}
const screnoptions = {
  headerStyle: {
    backgroundColor: '#f4511e',

  },
  headerTintColor:'#fff',
  headerTittleStyle: {
    fontWeight: 'bold'

  }

}

const styles = StyleSheet.create({
  
});

