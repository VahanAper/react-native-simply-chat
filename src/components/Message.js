import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Avatar from './Avatar';
import EmojiesBar from './EmojiesBar';

const Message = ({text, isRight}) => {
  const [isEmojiBarVisible, setIsEmojiBarVisible] = useState(false);

  return (
    <View style={[styles.container, isRight ? styles.rightAlign : {}]}>
      <Avatar />

      <TouchableWithoutFeedback onLongPress={() => setIsEmojiBarVisible(true)}>
        <View style={styles.bubble}>
          <Text style={styles.text}>{text}</Text>

          {isEmojiBarVisible ? (
            <EmojiesBar isRight={isRight} onSelect={setIsEmojiBarVisible} />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
  },
  rightAlign: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
  },
  bubble: {
    flexShrink: 1,
    marginVertical: 15,
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
