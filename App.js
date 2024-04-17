import { StyleSheet, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from "./Components/SearchBar";
import ProductsList from "./Components/ProductsList";
import products from "./data";

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar 
        value={search} 
        onChangeText={setSearch}
      />
      <ProductsList 
        products={filteredProducts}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#111827",
    padding: 6,
    color: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center"
  },
});
