import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import styles from './HomeStyles'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView styles={styles.container}
      showVerticalScrollIndicator={false}>
        {/* avatar */}
        <View style={styles.header}>
          <Text style={styles.header_text}>
            Let's Discover
          </Text>
            <TouchableOpacity>
              <Image source={require('../../../assets/images/avatar.png')} style={styles.header_image}/> 
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}