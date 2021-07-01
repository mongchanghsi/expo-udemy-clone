import { Ionicons, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FeaturedScreen from '../screens/FeaturedScreen';
import SearchScreen from '../screens/SearchScreen';
import CoursesScreen from '../screens/MyCoursesScreen';
import WishlistScreen from '../screens/WishlistScreen';
import AccountScreen from '../screens/AccountScreen';
import {
  BottomTabParamList,
  FeaturedParamList,
  SearchParamList,
  CoursesParamList,
  WishlistParamList,
  AccountParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Featured'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].activeColor,
      }}
    >
      <BottomTab.Screen
        name='Featured'
        component={FeaturedNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const iconName = focused ? 'star' : 'staro';
            return <AntDesign name={iconName} size={28} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='search' size={28} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='My Courses'
        component={CoursesNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const iconName = focused ? 'play-circle' : 'play-circle-outline';
            return <Ionicons name={iconName} size={28} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name='Wishlist'
        component={WishlistNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const iconName = focused ? 'heart' : 'hearto';
            return <AntDesign name={iconName} size={28} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name='Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const iconName = focused ? 'user-circle' : 'user-circle-o';
            return <FontAwesome name={iconName} size={28} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeaturedStack = createStackNavigator<FeaturedParamList>();

const FeaturedNavigator = () => {
  return (
    <FeaturedStack.Navigator>
      <FeaturedStack.Screen
        name='FeaturedScreen'
        component={FeaturedScreen}
        options={{ headerShown: false }}
      />
    </FeaturedStack.Navigator>
  );
};

const SearchStack = createStackNavigator<SearchParamList>();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};

const CoursesStack = createStackNavigator<CoursesParamList>();

const CoursesNavigator = () => {
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen
        name='CoursesScreen'
        component={CoursesScreen}
        options={{ headerTitle: 'My courses' }}
      />
    </CoursesStack.Navigator>
  );
};

const WishlistStack = createStackNavigator<WishlistParamList>();

const WishlistNavigator = () => {
  return (
    <WishlistStack.Navigator>
      <WishlistStack.Screen
        name='WishlistScreen'
        component={WishlistScreen}
        options={{ headerTitle: 'Wishlist' }}
      />
    </WishlistStack.Navigator>
  );
};

const AccountStack = createStackNavigator<AccountParamList>();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{ headerTitle: 'Account' }}
      />
    </AccountStack.Navigator>
  );
};

export default BottomTabNavigator;
