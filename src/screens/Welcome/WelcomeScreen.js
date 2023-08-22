import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './WelcomeStyles'

export default function WelcomeScreen() {
  return (
    <View style={styles.main}>

      <Image style={styles.bg_image}
        source={require('../../../assets/images/welcome.png')}
      />

      <View style={styles.container}>
      <LinearGradient
            colors={['transparent', 'rgba(3,105,161,0.8)']}
            style={{width: wp(100), height: hp(60), position: 'absolute', bottom: 0}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
        />
        <View style={styles.texts}>
          <Text style={styles.texts_title}>
            Viajar agora é fácil!
          </Text>
          <Text style={styles.texts_description}>
            Experimente as melhores aventuras ao redor do mundo com a gente
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