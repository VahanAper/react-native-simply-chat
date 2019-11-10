import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Animated} from 'react-native';

import Emoji from './Emoji';

const EmojiesBar = ({onSelect, isRight}) => {
  const [translateY] = useState(new Animated.Value(-20));
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      friction: 2,
      useNativeDriver: true,
    }).start();
  });

  const onEmojiSelect = useCallback(() => {
    Animated.timing(translateY, {
      toValue: -20,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onSelect(false);
    });
  }, [onSelect, opacity, translateY]);

  return (
    <Animated.View
      style={[
        styles.container,
        isRight ? styles.right : styles.left,
        {opacity, transform: [{translateY}]},
      ]}>
      <Emoji onSelect={onEmojiSelect}>👍</Emoji>
      <Emoji onSelect={onEmojiSelect}>😍</Emoji>
      <Emoji onSelect={onEmojiSelect}>😄</Emoji>
      <Emoji onSelect={onEmojiSelect}>👎</Emoji>
      <Emoji onSelect={onEmojiSelect}>😟</Emoji>
      <Emoji onSelect={onEmojiSelect}>😡</Emoji>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#ccc',
    paddingHorizontal: 5,
    position: 'absolute',
    bottom: -20,
  },
  right: {
    right: 0,
  },
  left: {
    left: 0,
  },
});

export default React.memo(EmojiesBar);
