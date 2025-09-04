import React from "react";
import { FlatList, Text, StyleSheet, View } from 'react-native';

const FlatListScreen = () => {
    const data = Array.from({ length: 80 }, (_, i) => ({ id: i, name: `Item ${i + 1}` }));

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#e0f7fa',
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default FlatListScreen;
