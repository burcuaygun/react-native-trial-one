import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// burda component yazılır.
const Login = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style= {{ flex: 1 }} >
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
    input: {
      height: 2,
      margin: 12,
      borderWidth: 1,
    },
  
});

export default Login;
// burdada yazılan component dışarıdan import edilebilir hale getirilir. 

