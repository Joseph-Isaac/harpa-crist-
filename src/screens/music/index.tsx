import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../../styles'

const Music = ({route}: any) => {

  const {item} = route.params;
  const [sizeLetter, setSizeLetter] = useState(14);

  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitleGiant}>{item.titulo}</Text>
      </View>
      <View style={styles.containerLetter}>
        {item.letra.map((letters: any)=>(
          <Text style={[styles.text, {'fontSize': sizeLetter}]}>{letters}</Text>
        )
        )}
      </View>
    </ScrollView>
    <View style={[styles.musicList, styles.containerButtonTextSize]}>
      <TouchableOpacity style={styles.buttonTextSize} onPress={()=>sizeLetter>=10 && setSizeLetter(sizeLetter-2)}>
        <Text style={styles.text}>A -</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonTextSize, styles.alignEnd]} onPress={()=>sizeLetter<=24 && setSizeLetter(sizeLetter+2)}>
        <Text style={styles.text}>A +</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Music