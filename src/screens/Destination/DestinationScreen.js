import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'
import styles from './DestinationStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { HeartIcon, MapPinIcon, SunIcon, ClockIcon } from 'react-native-heroicons/solid'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

export default function DestinationScreen(props) {
  const item = props.route.params
  const navigation = useNavigation()
  const [isFavorite, toggleFavorite] = useState(false)

  return (
    <View style={styles.main}>

      {/* Destination Image */}
      <Image style={styles.image} source={item.image} />
        <StatusBar style={'light'} />

      {/* Btn Voltar */}
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

      {/* Titulo - Descricao*/}
      <View style={styles.container}>
        <ScrollView style={styles.scroll}
        showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {item?.title}
            </Text>
            <Text style={styles.price}>
              $ {item?.price}
            </Text>
          </View>
          <Text style={styles.description}>
            {item?.longDescription}
          </Text>

          <View style={styles.container_info}>
            <View style={styles.info}>
              <ClockIcon size={wp(7)} color='skyblue'/>
              <View style={{display: 'flex'}}>
                <Text style={styles.info_icon}>
                  {item.duration}
                </Text>
                <Text style={styles.info_text}>
                  Duração
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <MapPinIcon size={wp(7)} color='#f87171'/>
              <View style={{display: 'flex'}}>
                <Text style={styles.info_icon}>
                  {item.distance}
                </Text>
                <Text style={styles.info_text}>
                  Distância
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <SunIcon size={wp(7)} color='orange' style={{marginRight: -24}}/>
              <View style={{display: 'flex'}}>
                <Text style={styles.info_icon}>
                  {item.weather}
                </Text>
                <Text style={styles.info_text}>
                  Temperatura
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.reservar}>
          <Text style={styles.reservar_text}>
            Reservar agora
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}