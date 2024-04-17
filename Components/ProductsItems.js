import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProductsItems = ({product}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textProductTitle}>{product.name}</Text>
            <Text style={styles.textProductPrice}>Precio: ${product.price}</Text>
            <Text style={styles.textProductDescription}>Descripción: {product.description}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={product.image}/>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a78bfa',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: 'white'
    },
    textProductTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 4
    },
    textProductPrice: {
        fontSize: 16,
        textAlign: "center"
    },
    textProductDescription: {
        fontSize: 14,
        textAlign: "center"
    },
    imageContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderRadius: 5,
     
    },
    image: {
        width: 120,
        height: 150
    }
});

export default ProductsItems;