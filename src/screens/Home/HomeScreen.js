import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './HomeStyles'
import Header from '../../components/Home/Header/Header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView styles={styles.container} showVerticalScrollIndicator={false}>

      <Header />
      <SearchBar />

      </ScrollView>
    </SafeAreaView>
  )
}