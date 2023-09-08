import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, FlatList, StyleSheet } from 'react-native';

type ProductProps = {
  image: string;
  title: string;
  id?: number;
};

const CardList = ({ title, image }: ProductProps) => {
  return (
    <>
      <Image
        style={styles.logo}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </>
  );
};

const ListScreen = () => {
  const [list, setList] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=20`,
      );

      const result = await response.json();

      setList(result);
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <CardList title={item.title} image={item.image} />
        )}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 300,
  },
  text: {
    marginBottom: 20,
  },
});

export default ListScreen;
