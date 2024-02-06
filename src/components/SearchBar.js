import React from 'react' ;
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backGroundStyle}> 
        <Feather name="search" style = {styles.iconStyle} />
        <TextInput
         style= {styles.inputStyle} 
         placeholder = 'Search'
         autoCapitalize="none"
         autoCorrect = {false}
         value = {term}
         onChangeText = {onTermChange}
         onEndEditing = {onTermSubmit}
         />
        </View>
    );
};

const styles = StyleSheet.create({
    backGroundStyle: {
        backgroundColor: '#dfdfdf',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop:10,
        flexDirection: 'row',
        marginBottom: 10

    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    inputStyle: {
        fontSize: 20,
        flex : 1,
    }

});

export default SearchBar;
