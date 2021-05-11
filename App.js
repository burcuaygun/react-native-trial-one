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

// rotalama
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

// import page and component
// tek nokta aynı klasör içinde oldugunu söyler.
// çift nokta klasörden cık anlamına gelir.
import Login from './src/screens/login';
import Home from './src/screens/home';
import Register from './src/screens/register';
const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Register} title="Home" hideNavBar={true} />
      <Scene key="login" component={Home} title="Login" hideNavBar={true} />
      <Scene key="register" component={Login} title="Register" hideNavBar={true} />
    </Stack>
  </Router>
);
;

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
