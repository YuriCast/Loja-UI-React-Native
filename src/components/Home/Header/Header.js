import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './HeaderStyles'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.header_text}>
            Let's Discover
        </Text>
        <TouchableOpacity>
            <Image style={styles.header_avatar}
                source={require('../../../../assets/images/avatar.png')} 
            />
        </TouchableOpacity>
    </View>
  )
}