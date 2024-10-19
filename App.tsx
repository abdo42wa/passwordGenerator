import React from 'react';
import {SafeAreaView} from 'react-native';
import {PasswordGenerator} from './components/PasswordGenerator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <PasswordGenerator />
    </SafeAreaView>
  );
}

export default App;
