import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppStyles from '../constants/AppStyles'

const RegisterPage = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TouchableOpacity style={{marginTop: 20}}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={{fontSize: 20, fontWeight: 700}}>Back</Text>
        </TouchableOpacity>
    </View>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.background,
  }
})