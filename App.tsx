import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MainFile} from './components/mainFile';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Hello Pass </Text>
      <MainFile />
    </SafeAreaView>
  );
}

export default App;
