import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChangeText}) => {
    return(
        <TextInput
            placeholder="Buscar producto..."
            multiline={false}
            value = {value}
            onChangeText={onChangeText}
            style={styles.searchBar}
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: 240,
        height: 65,
        marginTop: 60,
        marginBottom: 20,
        borderRadius: 5, 
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#f3f4f6",
        paddingVertical: 3,
        paddingHorizontal: 4,
        color: "black"
    }
});

export default SearchBar;