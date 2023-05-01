import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>To-Do List</Text>
        </View>)
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'

    },
})