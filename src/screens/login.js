import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Dimensions, //react
  TouchableWithoutFeedback
} from 'react-native';

import {
  Colors,
  DebugInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
//flexlerin boyutunu değiştirmesin diye.
const windowHeight = Dimensions.get('window').height;
// burda component yazılır.
const Login = () => {
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  
  
  const onPressLearnMore = () => {
    alert('Work on button');
  };
  return (
    <View style= {{ height: windowHeight, paddingTop: hp('3%'), backgroundColor: '#B72181' }} >
      <View style={styles.inContainer1}></View>
      <View style={styles.inContainer2}></View>
      <View style={styles.inContainer3}><View>
        <Text style={styles.instagramText}>Instagram</Text>
        </View></View>
      <View style={styles.inContainer4}>
        <View>
          <TextInput 
            placeholder="Username"
            placeholderTextColor="#ffffff"
            style={styles.usernameInputCss}
            onChangeText={setUsernameInput}
            value={usernameInput}
          />
        </View>
      </View>
      <View style={styles.inContainer5}>
        <View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ffffff"
            style={styles.usernameInputCss}
            onChangeText={setPasswordInput}
            value={passwordInput}
          />
        </View>
      </View>
      <View style={styles.inContainer6}>
          <TouchableWithoutFeedback 
            onPress={onPressLearnMore}
           >
        <View
          style={{
            width: wp('90%'),
            //backgroundColor: '#C52A6A',
            borderRadius: 5,
            borderWidth: 0.4,
            borderColor: 'white',
            height: hp('8%'),
            marginLeft: wp("10%"),
            marginRight: wp("10%"),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
              <Text
                style={{
                  color: 'white'
                }}
              >Log In</Text>
        </View>
            </TouchableWithoutFeedback>
      </View>
      <View style={styles.inContainer7}>
        <View style={{
          flexDirection: 'row',
        }}>
          <Text style={{
            color: 'white'
          }}>Forgot your login details.</Text>
          <TouchableWithoutFeedback
            onPress={() => alert('Forgot password screen')}
          >
            <Text style={{
              fontWeight: 'bold',
              color: 'white',
            }}> Get help signing in.</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.inContainer8}><Text
        style={{
          color: 'white'
        }}
      >OR</Text></View>
      <View style={styles.inContainer9}>
        <View style={{ 
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <View>
            <Icon name="facebook-square" size={hp('3%')} color="white" />
          </View>
          <View>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: hp('2.5%'),
              marginLeft: 5,
            }}>Log in with Facebook</Text>
          </View>
        </View>
      </View>
      <View style={styles.inContainer10}>
        <View style={{
          flexDirection: 'row',
        }}>
          <Text style={{
            color:'white',
          }}>Don't have an account?</Text>
          <TouchableWithoutFeedback 
            onPress={() => alert('Go to sign up')}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
          }}> Sign up.</Text>
          </TouchableWithoutFeedback>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inContainer1: {
    flex: 1,
   // backgroundColor: 'green',
  },
  inContainer2: {
    flex: 1,
    //backgroundColor: 'black',
  },
  inContainer3: {
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  inContainer4: {
    flex: 1,
   // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  inContainer5: {
    flex: 1,
    //backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent:'center',
  },
  inContainer6: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  inContainer7: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  inContainer8: {
    flex: 0.5,
    alignItems: 'center',
  },
  inContainer9: {
    flex: 1,
    alignItems: 'center',
  },
  inContainer10: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 0.3,
    borderColor: 'white',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  instagramText: {
    fontSize: hp('4%'),
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Arial'
  },
  usernameInputCss: {
    //borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    width: wp('90%'),
    height: hp('7%'),
    marginLeft: wp("10%"),
    marginRight: wp("10%"),
    backgroundColor: '#C43C84',
  },
});

export default Login;
// burdada yazılan component dışarıdan import edilebilir hale getirilir. 

