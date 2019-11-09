import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Avatar = ({uri}) => {
  return <Image style={styles.image} source={{uri}} />;
};

Avatar.defaultProps = {
  uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 5,
  },
});

export default React.memo(Avatar);
