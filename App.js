import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Search from './components/Search';
import Row from './components/Row';
import { DATA } from './Data';

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setItems(DATA);
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  const select = (id) => {
    setSelectedId(id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem = {({item}) => (
          <Row person={item} selectedId={selectedId} select={select} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
