import React from 'react';
import {SafeAreaView} from 'react-native';

import Chat from '../components/Chat';

import commonStyles from '../styles/common';

const Conversation = () => {
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <Chat />
    </SafeAreaView>
  );
};

export default React.memo(Conversation);
