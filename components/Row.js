import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Row({person, selectedId, select}) {
    const backgroundColor = person.id === selectedId ? '#c0c0c0': '#f5f5f5';

    return (
    <Pressable onPress={() => select(person.id)}>
      <Text 
      style={[styles.row,{backgroundColor}]}>
        {person.lastname}, {person.firstname}
        </Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 10,
        fontSize: 20,
        height: 60,
        width: 300,
    }
})