import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ExchangeScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';


export const AppStackNavigator = createStackNavigator({
  ItemExchangeList : {
    screen : ExchangeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);