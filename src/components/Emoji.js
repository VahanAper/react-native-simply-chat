import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

const Emoji = ({children, onSelect}) => {
  const [scaling] = useState(new Animated.Value(0));
  const [rotationDeg] = useState(new Animated.Value(0));

  const rotate = rotationDeg.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['-15deg', '0deg', '15deg', '0deg', '-15deg'],
  });

  const scale = scaling.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 2, 3, 1, 0],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationDeg, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotationDeg]);

  const onEmojiSelect = useCallback(() => {
    rotationDeg.setValue(0.25);

    Animated.timing(scaling, {
      toValue: 1,
      durtion: 3000,
      useNativeDriver: true,
    }).start(() => {
      onSelect();
    });
  }, [onSelect, rotationDeg, scaling]);

  return (
    <TouchableWithoutFeedback onPress={onEmojiSelect}>
      <Animated.Text style={[styles.emoji, {transform: [{rotate}, {scale}]}]}>
        {children}
      </Animated.Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  emoji: {
    margin: 1,
    fontSize: 21,
  },
});

export default React.memo(Emoji);
