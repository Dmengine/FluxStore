import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { s, vs } from 'react-native-size-matters'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>Splash Screen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  splashText: {
    fontSize: s(28),
    fontWeight: 'bold',
    color: '#fff',
  },
})
