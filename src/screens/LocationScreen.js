import React from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import CharacterCard from '../components/CharacterCard';
import SeparatorView from '../components/SeparatorView';

const LocationScreen = ({route}) => {
    const {locations}=route.params;

    return (
            <View style={{margin:25}}>
            <View>
            <Text style={{...styles.text,fontWeight:'bold'}}>{locations.name}</Text>
            <Text style={styles.text}>{locations.type}</Text>
            <Text style={styles.text}>{locations.dimension}</Text>
            <Text style={{...styles.text,fontWeight:'bold',textAlign:'center'}}>Residents</Text>
            </View>
            <FlatList
                data={locations.residents}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={SeparatorView}
                renderItem={ ({ item }) => <CharacterCard characterApiUrl={item} /> } />
            </View>
    )
}


export const locationScreenOptions =({route}) => {
    const {locations} = route.params;
    return{
        title:`${locations.name}`,
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#0AA9C0'
        },
        headerTintColor: '#fff',
    }
};

const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
});

export default LocationScreen;