import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharacterList from '../components/CharacterList';

const EpisodeDetailScreen = ({ route }) => {
    let { item } = route.params;
    return (
        <>
            <View style={{marginLeft:15,marginTop:15}}>
                <Text style={{...styles.text, fontSize: 20}}>{item.name}</Text>
                <Text style={{...styles.text, fontWeight: 'normal', fontSize: 18}}>Release Date: {item.air_date}</Text>
            </View>
            <View style={{marginTop: 50}}>
                <View style={{marginLeft: 15}}><Text style={styles.text}>Characters</Text></View>
                <CharacterList characters={item.characters}  />
            </View>
        </>
    )
};


const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:20
    }
});


export const episodesScreenOptions =({ route }) => {
    const { item } = route.params;
    return {
        title:(
            <Text style={{textAlign:'center'}}>{item.episode}</Text>
        ),
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#0AA9C0'
        },
        headerTintColor: '#fff',
    }
};


export default EpisodeDetailScreen;