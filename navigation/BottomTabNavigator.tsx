import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import CoachInfoScreen from '../screens/CoachInfo';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList, TabFiveParamList } from '../types';

import {Button} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import Navigation from '.';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel: false }}>
        
      <BottomTab.Screen
        name="Sugar"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="add-circle" color={focused ? "#E410A9" : color} />,
        }}
      />
      <BottomTab.Screen
        name="Food"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="restaurant" color={focused ? "#2D8931" : color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={focused ? "#545454" : color} />,
        }}
      />
      <BottomTab.Screen
        name="Coach"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="mail" color={focused ? "#51D0EC" :color} />,
        }}
      />
      <BottomTab.Screen
        name="Exercise"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="ios-barbell" color={focused ? "#9B00E3" : color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ 
        title: 'Sugar Level Tracking',
        headerStyle: {backgroundColor: '#E410A9'},
        headerTintColor: '#fff',
        headerRight: () => (
          <AntDesign name = 'user' size={20} color="white" onPress={() => alert('Profile pressed')}/>
        )
      }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ 
        title: 'Food',
        headerStyle: {backgroundColor: '#2D8931'},
        headerTintColor: '#fff',
        headerRight: () => (
          <AntDesign name = 'user' size={20} color="white" onPress={() => alert('Profile pressed')}/>
        )
      }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{  
        title: 'Home Page',
        headerStyle: {backgroundColor: '#545454'},
        headerTintColor: '#fff',
        headerRight: () => (
          <AntDesign name = 'user' size={20} color="white" onPress={() => alert('Profile pressed')}/>
        )
      }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ title: 'Chat with a Coach',
        headerStyle: {backgroundColor: '#51D0EC'},
        headerTintColor: '#fff',
        headerRight: () => (
          <AntDesign name = 'user' size={20} color="white" onPress={() => alert('Profile pressed')}/>
        ) 
        }}
      />
      <TabFourStack.Screen
        name="CoachInfoScreen"
        component={CoachInfoScreen}
        options={{
          title: 'Coach Information',
          headerStyle: {backgroundColor: '#51D0EC'},
          headerTintColor: '#fff',
          headerRight: () => (
            <AntDesign name = 'user' size={20} color="white" onPress={() => alert('Profile pressed')}/>
          ) 
        }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator() {
  
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        options={{
          title: 'Exercise',
        headerStyle: {backgroundColor: '#9B00E3'},
        headerTintColor: '#fff',
        headerRight: () => (
          <AntDesign name = 'user' size={20} color="white" onPress={() => alert('Profile pressed')}/>
        ) 
        }}
      />
    </TabFiveStack.Navigator>
  );
}



