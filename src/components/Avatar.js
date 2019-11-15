import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Avatar = ({uri, style}) => {
  return <Image style={[styles.image, style]} source={{uri}} />;
};

Avatar.defaultProps = {
  uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    // Passing big number for border radius to have always cycle
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 5,
  },
});

export default React.memo(Avatar);
