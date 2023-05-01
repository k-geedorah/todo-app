import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
export default function ToDoItem({ item,handlePress }) {
    
    return (
        <TouchableOpacity onPress={()=>handlePress(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10
    }
})