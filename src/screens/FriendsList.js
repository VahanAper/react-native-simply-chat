import React, {useCallback} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';

import FriendLI from '../components/FriendLI';

import commonStyles from '../styles/common';

const friends = [
  {
    ID: 101,
    avatarURI: 'https://i.pravatar.cc/300',
    firstName: 'John',
    lastName: 'Doe 1',
  },
  {
    ID: 102,
    avatarURI: 'https://i.pravatar.cc/300',
    firstName: 'John',
    lastName: 'Doe 2',
  },
  {
    ID: 103,
    avatarURI: 'https://i.pravatar.cc/300',
    firstName: 'John',
    lastName: 'Doe 3',
  },
  {
    ID: 104,
    avatarURI: 'https://i.pravatar.cc/300',
    firstName: 'John',
    lastName: 'Doe 4',
  },
  {
    ID: 105,
    avatarURI: 'https://i.pravatar.cc/300',
    firstName: 'John',
    lastName: 'Doe 5',
  },
];

const FriendsList = () => {
  const renderItem = useCallback(({item}) => <FriendLI user={item} />, []);
  const keyExtractor = useCallback(item => String(item.ID), []);

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});

export default React.memo(FriendsList);
