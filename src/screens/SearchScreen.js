import React, {useState, useEffect} from 'react' ;
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar  from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
const [term , setTerm] = useState('');
const [searchApi, errorMessage, results] = useResults();

//console.log(results);

const filterResultsByPrice = (price) => {
    // price = $ || $$ || $$$
   return results.filter (result => {
    return result.price === price;
   });

};


// call searchApi when
// component is first rendered. BAD CODE!

 //searchApi('pasta')
    return (
        <>
            <SearchBar
             term= {term}
              onTermChange = {setTerm} 
              onTermSubmit = {() => searchApi(term)}
              />
           {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
            <ResultsList navigation = {navigation} results = { filterResultsByPrice('$')} title = "Cost Effective"/>
            <ResultsList navigation = {navigation} results = { filterResultsByPrice('$$')} title = "Bit Pricier"/>
            <ResultsList navigation = {navigation} results = { filterResultsByPrice('$$$')} title = "Big Spender"/>
            </ScrollView>
            </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
