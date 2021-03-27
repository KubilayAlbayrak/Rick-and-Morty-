import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CharacterDetailCard from '../components/CharacterDetailCard';
import EpisodeCard from '../components/EpisodeCard';
import LocationCard from '../components/LocationCard';
import SeparatorView from '../components/SeparatorView';

const CharacterDetailScreen = ({ route, navigation }) => {
    const { data } = route.params;

    const [episodeList, setEpisodeList] = useState([]);

    const fetchEpisodeList = () => {
        for (const url of data.episode) {
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setEpisodeList(oldArray => [...oldArray, json]);
            });
        }
    };

    useEffect (() => {
        fetchEpisodeList();
    }, [data.episode]);

    return (
        <View>
            <CharacterDetailCard data={data} />
            <LocationCard locationUrl={ data.origin.url }  navigation={ navigation } />
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:17}}>Episodes Played By {data.name}</Text>
            <FlatList 
                data={episodeList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={ ({ item }) => <EpisodeCard item={item} onPress={ ()=> navigation.navigate('EpisodeDetailScreen', { item: item }) } /> }
                ItemSeparatorComponent={SeparatorView} />
            
        </View>
    )
};

export const charactersScreenOptions =({route}) =>{
    const { data } =route.params;
    return {
        title:(<Text>{data.name} </Text>),
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#0AA9C0'
        },
        headerTintColor: '#fff',
    }
};


    

export default CharacterDetailScreen;