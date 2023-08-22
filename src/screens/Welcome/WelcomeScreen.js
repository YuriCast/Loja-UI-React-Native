import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './WelcomeStyles'

export default function WelcomeScreen() {
  return (
    <View style={styles.main}>

      <Image style={styles.bg_image}
        source={require('../../../assets/images/welcome.png')}
      />

      <View style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.title}>
            Viajar agora é fácil!
          </Text>
          <Text style={styles.description}>
            Experimente das as melhores aventuras ao redor do mundo com a gente
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>
            Vamos Lá!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}