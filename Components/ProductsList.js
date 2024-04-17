import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import ProductsItems from "./ProductsItems";

const ProductsList = ({products}) => {
    return(
        <FlatList
            style = {styles.flatList}
            data={products}
            keyExtractor={
                product => product.id.toString()
            }
            renderItem={({item})=>(
                <ProductsItems product={item}/>
            )}
        />
    );
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: '#111827',
        width: 330
    }
});

export default ProductsList;