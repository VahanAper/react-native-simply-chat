import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Message from './Message';

const currentUserID = 102;

const messages = [
  {
    id: 1,
    text: 'Lorem ',
    senderID: 101,
  },
  {
    id: 2,
    text: 'Lorem Ipsum',
    senderID: 101,
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit',
    senderID: 102,
  },
  {
    id: 4,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    senderID: 103,
  },
];

const Chat = () => {
  return (
    <ScrollView style={styles.container}>
      {messages.map(({text, id, senderID}) => (
        <Message key={id} text={text} isRight={senderID === currentUserID} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
  },
});

export default React.memo(Chat);
