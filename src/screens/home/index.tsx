import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import styles from '../../../styles'
import musics from '../../data/muscis.json'

interface iItem {
  title: string;
  number: number;
}

interface iMusic {
  numero: number;
  titulo: string;
  letra: string[];
}

const Home = ({navigation}: any) => {

  const [search, setSearch] = useState('');

  const listSearched = (): Array<iMusic> => {
    const textoLowerCase = search.toLowerCase();

    const listaFiltradaNumero = musics.hinos.filter(title => title.numero.toString().includes(textoLowerCase))

    const listaFiltradaTitulo = musics.hinos.filter(title => title.titulo.toLowerCase().includes(textoLowerCase))

    return listaFiltradaNumero.concat(listaFiltradaTitulo);
  }

  const handleClick = (item: any) => {
    navigation.navigate('Music', {item})
  }

  const clearSearch = () => setSearch('');

  const Item = ({music}: {music: iMusic}) => {
    return (
      <TouchableOpacity style={styles.musicList} onPress={()=>handleClick(music)}>
        <View style={styles.row}> 
          <Text style={[styles.textTitle, styles.numberTitle]}>{music.numero}</Text>
          <Text style={styles.textTitle}> - {music.titulo}</Text>
        </View>
        <Feather name='chevron-right' size={24} color="#fff"/>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.containerInput}>
        <TextInput style={styles.input} value={search} onChangeText={(text)=>setSearch(text)} placeholder="Pesquisar hino..." placeholderTextColor={"#808080"}/>
        {search === '' ?
          <Feather name='search' size={24} color="#fff"/>
          :
          <TouchableOpacity style={styles.clearSearchButton} onPress={clearSearch}>
            <Feather name='x' size={24} color="#fff" />
          </TouchableOpacity>
        }
        
        
      </View>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={search !== '' ? listSearched() : musics.hinos}
        renderItem={({item}) => <Item music={item}/>}
        keyExtractor={item => item.titulo}
        contentContainerStyle={styles.flatList}
      />
      
    </View>
  )
}

export default Home