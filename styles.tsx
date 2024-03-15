import { StyleSheet } from 'react-native';

const colors = {
  texto: '#fff',
  amarelo: '#FFC700',
  primaria: '#444',
  background: '#3A3A3A',
  preto: '#000',
  transparente: '#ffffffff00'
}

const styles = StyleSheet.create({
  //containers
  safeAreaView: {
    paddingTop: 30,
    backgroundColor: '#3A3A3A',
    flex: 1,
  },
  container:{
    backgroundColor: '#3A3A3A',
    flex: 1,
    paddingHorizontal: 20
  },
  containerInput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primaria,
    marginVertical: 20,
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 18,
    right: 18,
    zIndex: 10,
    borderWidth: 2,
    borderColor: colors.background
  },
  input:{
    color: colors.texto,
    width: '90%',
    height: '100%',
    padding: 0,
  },
  containerTitle:{},
  containerLetter:{},
  containerButtonTextSize:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    padding: 0,
  },

  //buttons
  clearSearchButton:{},
  musicList:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: colors.primaria,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: colors.preto,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 1,
  },
  buttonTextSize:{
    flex: 1,
    padding: 20,
    
  },

  //tipography
  text: {
    color: colors.texto,
    fontFamily: 'PlayfairDisplay_400Regular'
  },
  textTitle:{
    color: colors.texto,
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 16,
  },
  textTitleGiant: {
    color: colors.texto,
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 30,
  },

  //Outros
  numberTitle: {
    marginTop: -6,
    fontSize: 22,
  },
  row: {
    flexDirection: 'row',
  },
  flatList:{
    paddingTop: 80,
    paddingBottom: 10,    
  },
  alignEnd:{
    alignItems: 'flex-end'
  },
  scrollView:{
    paddingBottom: 90
  },
});

export default styles;
