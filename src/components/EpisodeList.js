import React, {useState,useEffect} from 'react';
import { FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import EpisodeCard from '../components/EpisodeCard';
import LoadMoreButton from '../components/LoadMoreButton';
import SeparatorView from '../components/SeparatorView';

const EpisodeList = ({ navigation }) => {

    let episodesUrl=`https://rickandmortyapi.com/api/episode?page=${currentPage}`;
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [episodes, setEpisodes] = useState([]);
	const [pageCount, setPageCount] = useState(1);
	const [totalEpisodeCount, setTotalEpisodeCount] = useState(0);
    
    async function fetchData() {
        fetch(episodesUrl)
        .then((response) => response.json())
        .then((json) => {
			setTotalEpisodeCount(json.info.count || 0);
			setPageCount(json.info.pages || 1);
			setEpisodes([...episodes, ...json.results]);
        })
        .finally(() => setIsLoading(false));
    };

    useEffect (() => {
        fetchData();
    },[ currentPage ]);
    
        return(
            <SafeAreaView>
                {isLoading ? (<ActivityIndicator /> ) : 
                (
                    <FlatList 
                        data={episodes}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={ ({ item }) => <EpisodeCard item={item} onPress={ ()=> navigation.navigate('EpisodeDetailScreen', { item: item }) } /> }
                        ItemSeparatorComponent={SeparatorView}
                        ListFooterComponent={() => 
                            <LoadMoreButton
                                onPress={() => { setCurrentPage(currentPage + 1); }}
                                disabled={ currentPage === pageCount }
                                text={`Listing ${episodes.length} of ${totalEpisodeCount} episodes`}
                                loading={isLoading} />
                        } />
                )}
            </SafeAreaView>
        )
};

export default EpisodeList;