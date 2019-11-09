import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Avatar from './Avatar';

const Message = ({text, isRight}) => {
  return (
    <View style={[styles.container, isRight ? styles.rightAlign : {}]}>
      <Avatar />
      <View style={styles.bubble}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rightAlign: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
  },
  bubble: {
    flexShrink: 1,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#999',
    shadowColor: 'black',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  text: {
    color: 'white',
  },
});

export default React.memo(Message);
