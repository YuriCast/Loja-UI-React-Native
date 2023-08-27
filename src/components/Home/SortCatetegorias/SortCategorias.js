import { View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import styles from './SortCategoriasStyles'
import { sortCategoryData } from '../../../constants'
import { theme } from '../../../theme';

export default function SortCategorias() {
  const [activeSort, setActiveSort] = useState('Popular');

  return (
    <View style={styles.container}>
        {
            sortCategoryData.map((sort, index) => {
                const isActive = sort === activeSort;
                const activeButtonStyle = isActive ? {styles,activeButtonStyle} : {};
                const textStyle = {
                    fontSize: wp(3),
                    color: isActive ? theme.text : 'rgba(0, 0, 0, 0.6)',
                    fontWeight: 'bold',
                };

                return (
                    <TouchableOpacity
                        onPress={() => setActiveSort(sort)}
                        key={index}
                        style={{
                            padding: 8,
                            borderRadius: 999,
                            ...activeButtonStyle,
                            flex: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={textStyle}>{sort}</Text>
                    </TouchableOpacity>
                );
            })
        }
    </View>
);
}