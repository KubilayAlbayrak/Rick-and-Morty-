import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CharacterDetailCard = ({data}) => {
    const getStatusColor = () => {
        if(data.status === 'Alive') {
            return 'green';
        } else if (data.status ==='Dead'){
            return 'red';
        }
        return 'grey';
    };

    return (
        <View style={styles.container}>
            <View style={styles.charactercarddetail}>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={styles.text}>{data.species}</Text>
            <Text style={styles.text}>{data.gender}</Text>
            <Text style={styles.text}>{data.type}</Text>
            </View>
            <View style={{...styles.statuscircle,backgroundColor:`${getStatusColor()}`}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    statuscircle:{
        width:30,
        height:30,
        borderRadius:30/2,
        marginRight:30,
        alignSelf:'center'
    },
    text:{
        fontSize:18,
    },
    charactercarddetail:{
        marginLeft:15,
        marginTop:15
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default CharacterDetailCard;