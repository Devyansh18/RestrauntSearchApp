import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
    const navigation = useNavigation();
return (
    <View>
        <Text style = {styles.titleStyle}>{title}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator = {false}
        data = {results}
        keyExtractor = {result => result.id}
        renderItem = {({item}) => {
               return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id : item.id})} >
              <ResultsDetail result = {item}/> 
                </TouchableOpacity>
               
               )
              
        }}
        />
    </View>
)
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
       
        marginBottom: 5
    }
});

export default ResultsList;