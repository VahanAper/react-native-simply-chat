import React, {useCallback, useMemo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import Avatar from './Avatar';

import {NAV_CONVERSATION} from '../navigation/constants';

const FriendLI = ({user}) => {
  const {navigate} = useNavigation();

  const {firstName, lastName, avatarURI} = user;
  const username = useMemo(() => `${firstName} ${lastName}`, [
    firstName,
    lastName,
  ]);

  const onPress = useCallback(() => {
    navigate(NAV_CONVERSATION, {username});
  }, [navigate, username]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar uri={avatarURI} style={styles.avatar} />
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#999',
    marginVertical: 10,
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  username: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
  },
});

export default React.memo(FriendLI);
