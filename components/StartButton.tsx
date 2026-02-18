import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

const StartButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Started</Text>
    </View>
  )
}

export default StartButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(120, 120, 120, 0.7)",
        padding: s(10),
        borderRadius: s(30),
        borderWidth: 1,
        width: s(160),
        height: vs(45),
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        color: "#fff",
        fontSize: s(16),
        fontWeight: "bold",
    }
})