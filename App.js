import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import styles from './src/styles/common';

import Chat from './src/components/Chat';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex1}>
        <Chat />
      </SafeAreaView>
    </>
  );
};

export default App;
