import { View, TouchableOpacity, Image, Text} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import styles from './DestinationsStyles'
import { destinationData } from '../../../constants'
import { HeartIcon } from 'react-native-heroicons/outline';

export default function Destinations() {
  return (
    <View style={styles.container}>
      {
        destinationData.map((item, index) => {
          return (
            <DestinationCard item={item} key={index} />
          )
        })
      }
    </View>
  )
}

const DestinationCard = ({item}) => {
  const [isFavorite, toggleFavorite] = useState(false)
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.card_image} source={item.image} />
      <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35, position: 'absolute', bottom: 0}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
        />

      <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)} style={styles.heart_icon}>
        <HeartIcon size={wp(5)} color = {isFavorite ? "red" : "white"} />
      </TouchableOpacity>

      <Text style={styles.item_title}>{item.title}</Text>
      <Text style={styles.item_description}>{item.shortDescription}</Text>

    </TouchableOpacity>
  )
}