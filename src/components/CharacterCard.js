import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({ characterApiUrl }) => {
    const navigation = useNavigation();

    const [data, setData] = useState({});

    const fetchCharacter = () => {
        fetch(characterApiUrl)
        .then((response) => response.json())
        .then((json) => { 
            setData(json);
        });
    };
    
    useEffect (() => {
        fetchCharacter();
    }, []);

    const getStatusColor = () => {
        if(data.status === 'Alive') {
            return 'green';
        } else if (data.status ==='Dead'){
            return 'red';
        }
        return 'grey';
    };
    

    return (
        <TouchableOpacity style={styles.charactercardcontainer} onPress={() => navigation.navigate('CharacterDetailScreen', {data: data })}>
            <Image source={{uri:data.image}} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text>{data.name}</Text>
                <Text>{data.species}</Text>
            </View>
            <View style={{...styles.statuscircle, backgroundColor: getStatusColor() }}/>
        </TouchableOpacity>
    )
};

const styles=StyleSheet.create({
    statuscircle:{
        width:30,
        height:30,
        borderRadius:30/2,
        alignSelf:'center',
    },
    image:{
        width:75,
        height:75,
        borderRadius:8,
        margin:15
    },
    charactercardcontainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textContainer:{
        maxWidth:90,
        alignSelf:'center'
    }
})

export default CharacterCard;