import { SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'


import styles from './HomeStyles'
import Header from '../../components/Home/Header/Header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import Categorias from '../../components/Home/Categorias/Categorias'
import SortCategorias from '../../components/Home/SortCatetegorias/SortCategorias'
import Destinations from '../../components/Home/Destinations/Destinations'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView styles={styles.container} showVerticalScrollIndicator={false}>

      <Header />
      <SearchBar />

      <View style={{marginBottom: 16}}>
      <Categorias />
      </View>

      <View style={{marginBottom: 16}}>
      <SortCategorias />
      </View>

      <View style={{marginBottom: 16}}>
      <Destinations />
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}