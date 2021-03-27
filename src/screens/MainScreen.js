import React,{useState,useEffect}from 'react';
import EpisodeList from '../components/EpisodeList';

const MainScreen = (props) => {

   return(
       <EpisodeList navigation={props.navigation}  />
   )
};

export const mainScreenOptions =() => {
    return{
        title:'Rick and Morty',
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#6EA24E'
        },
        headerTintColor: '#fff',
    }
};

export default MainScreen;