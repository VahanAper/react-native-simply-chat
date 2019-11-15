import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FriendsList from '../screens/FriendsList';
import Conversation from '../screens/Conversation';

import {NAV_FRIENDS_LIST, NAV_CONVERSATION} from './constants';

const MainStack = createStackNavigator({
  [NAV_FRIENDS_LIST]: {
    screen: FriendsList,
    navigationOptions: {
      title: 'Simply Chat',
    },
  },
  [NAV_CONVERSATION]: {
    screen: Conversation,
    navigationOptions: ({navigation}) => {
      const username = navigation.getParam('username');

      return {
        title: username,
      };
    },
  },
});

const AppNavigator = createAppContainer(MainStack);

export default AppNavigator;
