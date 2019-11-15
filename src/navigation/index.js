import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FriendsList from '../screens/FriendsList';
import Conversation from '../screens/Conversation';

import {NAV_FRIENDS_LIST, NAV_CONVERSATION, NAV_MODAL} from './constants';

const getConversationNavTitle = ({navigation}) => {
  const username = navigation.getParam('username');

  return {
    title: username,
  };
};

const MainStack = createStackNavigator({
  [NAV_FRIENDS_LIST]: {
    screen: FriendsList,
    navigationOptions: {
      title: 'Simply Chat',
    },
  },
  [NAV_CONVERSATION]: {
    screen: Conversation,
    navigationOptions: getConversationNavTitle,
  },
});

const modalStack = createStackNavigator(
  {
    [NAV_FRIENDS_LIST]: {
      screen: MainStack,
      navigationOptions: {
        header: null,
      },
    },
    [NAV_MODAL]: {
      screen: Conversation,
      navigationOptions: getConversationNavTitle,
    },
  },
  {
    mode: 'modal',
  },
);

const AppNavigator = createAppContainer(modalStack);

export default AppNavigator;
