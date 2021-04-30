import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import page and component
// tek nokta aynı klasör içinde oldugunu söyler.
// çift nokta klasörden cık anlamına gelir.
import Login from './src/screens/login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 350,
    marginLeft: '10%',
    marginRight: '10%',
    
  },
});

export default App;
