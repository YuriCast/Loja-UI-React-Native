import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import Header from '../../components/Home/Header/Header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import styles from './HomeStyles'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView styles={styles.container}
      showVerticalScrollIndicator={false}>

      <Header />
      <SearchBar />

      </ScrollView>
    </SafeAreaView>
  )
}