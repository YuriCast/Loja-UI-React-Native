import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'
import styles from './DestinationStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { HeartIcon } from 'react-native-heroicons/solid'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

export default function DestinationScreen(props) {
  const item = props.route.params
  const navigation = useNavigation()
  const [isFavorite, toggleFavorite] = useState(false)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
        <StatusBar style={'light'} />

      <SafeAreaView style={styles.btns}>
        <TouchableOpacity style={styles.voltar}
        onPress={() => navigation.goBack()}
        >
        <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.coracao}
        onPress={() => toggleFavorite(!isFavorite)}
        >
        <HeartIcon size={wp(7)} strokeWidth={4} color={isFavorite? "red": "white"}/>
        </TouchableOpacity>
      </SafeAreaView>


    </View>
  )
}