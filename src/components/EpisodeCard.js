import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback,ImageBackground } from 'react-native';


const EpisodeCard = ({ item, onPress, episodeUrl }) => {
  
  const [episodeData, setEpisodeData] = useState(item);

  const fetchEpisodeData = () => {
    if(!episodeUrl) setEpisodeData(item);

    fetch(episodeUrl)
      .then((response) => response.json())
      .then((json) => { 
          setEpisodeData(json);
      });
  };

  useEffect (() => {
    fetchEpisodeData();
  }, []);

  useEffect (() => {
    fetchEpisodeData();
  }, [ episodeUrl ]);


  return(
    <View style={styles.card}>
      <TouchableNativeFeedback
      onPress={onPress}
      >
        <ImageBackground source={require('../Image/Rick.jpg')}
        style={{width:'100%' ,height:180 }}
        >
          <View style={{alignItems:'center',marginBottom:0,backgroundColor:'#6EA24E',marginTop:170}}>
            <Text style={{fontWeight:'bold',color:'white'}}>{episodeData?.episode}</Text>
          </View>
        </ImageBackground>
      </TouchableNativeFeedback>
    </View>
  )
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
	},
  card:{
    padding:10,
    justifyContent:"flex-end",
    alignItems:'flex-end'
  },
});

export default EpisodeCard; 