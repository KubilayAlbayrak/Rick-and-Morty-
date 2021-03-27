import React from 'react'
import { FlatList} from 'react-native';
import SeparatorView from '../components/SeparatorView';
import CharacterCard from '../components/CharacterCard';

const CharacterList = ({characters}) => {

    return (
        <FlatList
        ItemSeparatorComponent={SeparatorView}
        data={characters}
        keyExtractor={(item) => item}
        renderItem={ ({ item }) => <CharacterCard characterApiUrl={item} /> }
        />
    )
}

export default CharacterList;