import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Button,
  View,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

// burda component yazılır.
    const registerRouteHandle = () => {
        Actions.register();
    };
    const loginRouteHandle = () => {
        Actions.login();
    }
    
const Home = () => {
  return (
    <View style= {{ backgroundColor: 'pink' }} >
        <Text>Home</Text>
        <Button title="Register Route" onPress={registerRouteHandle} />
        <Button title = "Login Route" onPress={loginRouteHandle} />
        <Icon name="calendar" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  
    input: {
      margin: 12,
      borderWidth: 1,
    },
  
});

export default Home;
// burdada yazılan component dışarıdan import edilebilir hale getirilir. 

