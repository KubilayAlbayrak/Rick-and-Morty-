import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen,{mainScreenOptions} from '../screens/MainScreen';
import CharacterDetailScreen,{charactersScreenOptions} from '../screens/CharacterDetailScreen';
import EpisodeDetailScreen,{episodesScreenOptions} from '../screens/EpisodeDetailScreen';
import LocationScreen,{locationScreenOptions} from '../screens/LocationScreen';


const MainNavigation = () => {
const Stack = createStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={MainScreen} options={mainScreenOptions} />
        <Stack.Screen name="EpisodeDetailScreen" component={EpisodeDetailScreen} options={episodesScreenOptions} />
        <Stack.Screen name="CharacterDetailScreen" component={CharacterDetailScreen} options={charactersScreenOptions} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} options={locationScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MainNavigation;

