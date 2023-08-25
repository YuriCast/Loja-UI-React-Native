import { View, TextInput} from 'react-native'
import React from 'react'

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import styles from './SearchBarStyles'

export default function SearchBar() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray"/>
        <TextInput style={styles.text_input}
        placeholder='Pesquise seu destino'
        placeholderTextColor={'gray'}
        >
        </TextInput>
      </View>
    </View>
  )
}