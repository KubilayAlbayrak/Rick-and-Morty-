import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const LocationCard = (props) => {
    
const [locations, setLocations] = useState([]);
    
async function fetchLocation() {
        fetch(props.locationUrl)
        .then((response) => response.json())
        .then((json) => {
			setLocations(json);
        });
    };


    useEffect (() => {
        fetchLocation();
    },[]);

    return (
        <View>
            <View style={{ marginLeft: 40, marginBottom: 15 }}><Text style={ styles.locationtext }>Location</Text></View>
            <TouchableOpacity style={ styles.locationcard } onPress={() => props.navigation.navigate('LocationScreen', { locations: locations })}>
                <View style={{ margin: 20 }}>
                    <Text>{ locations.name }</Text>
                    <Text>{ locations.dimension }</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    relations:{
        fontWeight:'bold',
        textAlign:'center'
    },
    locationcard:{
        width:'90%',
        height:75,
        backgroundColor:'#0AA9C0',
        alignSelf:'center',
        borderRadius:10
    },
    locationtext:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default LocationCard;