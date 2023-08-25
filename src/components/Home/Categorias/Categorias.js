import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

import { categoriesData } from '../../../constants'
import styles from './CategoriasStyles'

export default function Categorias() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.container_text}>
          Categorias
        </Text>
        <TouchableOpacity>
          <Text style={styles.btn_text}>
            Ver Tudo
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.slide}
      horizontal
      contentContainerStyle={{paddingHorizontal: 15}}
      showsHorizontalScrollIndicator={false}
      >
        {
          categoriesData.map((cat,index) =>{
            return (
              <TouchableOpacity style={styles.slide_btn}
              key={index}
              >
                <Image style={styles.slide_images} source={cat.image} />
                <Text style={styles.images_title}>{cat.title}</Text>
              </TouchableOpacity>
            )
          })
        }

      </ScrollView>
    </View>
  )
}