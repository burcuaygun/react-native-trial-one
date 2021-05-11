import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableWithoutFeedback,
  TextInput,
  View,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

// burda component yazılır.
const Register = () => {
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const onPressForgot = ()=> {
      alert("Send new password to e-mail");
  };
  return (
    <View style= {{ flex: 1, backgroundColor: '#54C6F5' }} >
       <View style={styles.inContainer1}></View>
       <View style={styles.inContainer2}>
          <View style={{
            width: wp('90%'),
            borderRadius: 60,
            borderWidth: 3,
            borderColor: 'white',
            width: wp('30%'),
            height: hp('15%'),
            marginLeft: wp("35%"),
            marginRight: wp("35%"),
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <Icon name="twitter" size={hp('10%')} color="white" />
          </View>
         </View>
       <View style={styles.inContainer3}></View>
       <View style={styles.inContainer4}>
         <View>
         <TextInput 
            placeholder="Phone, E-mail or Username"
            placeholderTextColor="#CECECE"
            style={styles.usernameInputCss}
            onChangeText={setUsernameInput}
            value={usernameInput}
          />
         </View>
       </View>
       <View style={styles.inContainer5}>
         <View>
           <TextInput
              placeholder= "Password"
              placeholderTextColor="#CECECE"
              style={styles.usernameInputCss}
              onChangeText={setPasswordInput}
              value={passwordInput}
           />
         </View>
       </View>
       <View style={styles.inContainer6}>
            <TouchableWithoutFeedback 
            onPress={() => alert('Go to sign up')}>
              <View>
                <Text style={{
                  color: 'white',
                }}>Forgot Password?</Text>
              </View>
             </TouchableWithoutFeedback>
         
       </View>
       <View style={styles.inContainer7}></View>
       <View style={styles.inContainer8}>
         <TouchableWithoutFeedback 
            onPress={onPressForgot}
         >
        <View
          style={{
            width: wp('90%'),
            borderRadius: 30,
            borderWidth: 1.2,
            borderColor: '#80D4F9',
            width: wp('80%'),
            height: hp('7%'),
            marginLeft: wp("10%"),
            marginRight: wp("10%"),
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <Text
          style={{
            color: '#80D4F9'
            }}>Log In</Text>
        </View>
            </TouchableWithoutFeedback>
         
       </View>
       <View style={styles.inContainer9}>
       <View style={{
          flexDirection: 'row',
        }}>
          <Text style={{
            color: 'black',
          }}>New to Twitter?</Text>
          <TouchableWithoutFeedback 
            onPress={() => alert('Go to sign up')}>
            <Text style={{
              color:'#80D4F9',
              fontSize: 15,
          }}> Sign up now.</Text>
          </TouchableWithoutFeedback>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inContainer1:{
    flex: 1,
  },
  inContainer2:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inContainer3:{
    flex:1,
  },
  inContainer4:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inContainer5:{
    flex:1,
  },
  inContainer6:{
    flex:1,
    alignItems: 'center',
  },
  inContainer7:{
    flex:0.2,
  },
  inContainer8:{
    flex:1.3,
    backgroundColor: 'white',
  },
  inContainer9:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
    usernameInputCss: {
    borderRadius: 30,
    borderColor: 'white',
    width: wp('80%'),
    height: hp('7%'),
    marginLeft: wp("10%"),
    marginRight: wp("10%"),
    backgroundColor: '#ffffff',
  },
});
export default Register;
// burdada yazılan component dışarıdan import edilebilir hale getirilir. 

