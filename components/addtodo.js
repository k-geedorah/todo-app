import { View, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
export default function AddToDo({handleSubmit}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val)
    }
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='new task...'
            onChangeText={changeHandler}
            />
            <Button onPress={()=>handleSubmit(text)} title='add task' color='coral'/>
        </View>
    )
}
const styles=StyleSheet.create({
input:{
    marginBottom:10, 
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
}
})