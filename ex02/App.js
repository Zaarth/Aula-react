import React from "react";
import { FlatList, Text, StyleSheet, View } from 'react-native';

const data = Array.from({ length: 80 }, (_, i) => ({ id: i, name: `Item ${i + 1}` }));


export default function App() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});
 