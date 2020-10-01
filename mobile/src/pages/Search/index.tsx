import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'

export default class Search extends Component{
  render(){
    return(
      //Tela
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <TouchableOpacity style={styles.voltar}>
            <Image 
              source={require('../../assets/images/back.png')}
              style={styles.img1}/>
          </TouchableOpacity>
        </View>
      
        <View style={styles.corpo}>
          <Text style={styles.text}>Estes são os profissionais disponíveis</Text>
          <Text style={styles.text1}>Categoria</Text>
          <TextInput 
            style = {styles.input1} 
            placeholder="Digite sua categoria"/>
            
          <Text style={styles.text2}>Estado</Text>
          <TextInput 
            style = {styles.input2} 
            placeholder="Qual estado?"/>
    

          <Text style={styles.text3}>Cidade</Text>
          <TextInput 
            style = {styles.input3} 
            placeholder="Qual cidade?"/>

        </View>
        <View style={styles.rodape}>
          <TouchableOpacity>
            <Text style={styles.botao }>buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 360,
    height: 1137,
    left: 0,
    top: 0,
    backgroundColor: '#D2D3E5',
  },

  cabecalho:{
    position:'absolute',
    width: 360,
    height: 62,
    left: 0,
    top: 0,
    backgroundColor: '#1A1D53',
  },

  voltar:{
    marginLeft: 17.6,
    marginTop: 15,
    width: 35,
    height: 15
  },

   img1:{
    marginLeft:0,
    marginTop:13,
    width:30,
    height:20,
  },

  text:{
    width: 302,
    height: 56,
    marginLeft: 29,
    marginTop: 23,
    fontFamily: 'Ubuntu', 
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    color: '#1A1D53',
  },

  corpo:{
    position: 'absolute',
    width: 360,
    height: 275,
    left: 0,
    marginTop: 61,
    backgroundColor: '#25C998'
  },

  text1:{
    position: 'absolute',
    width: 70.77,
    height: 22.71,
    marginLeft: 31,
    marginTop: 108,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1D53',
  },

  text2:{
    position: 'absolute',
    width: 70.77,
    height: 22.71,
    marginLeft: 31,
    marginTop: 212,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1D53',
  },

  text3:{
    position: 'absolute',
    width: 70.77,
    height: 22.71,
    marginLeft: 172,
    marginTop: 212,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1D53',
  },

  input1: {
    position: 'absolute',
    width: 298,
    height: 48,
    marginLeft: 26,
    marginTop: 145,
    backgroundColor: '#FAFAFC',
    borderRadius: 9.38528,
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:10,    
  },

  input2: {
    position: 'absolute',
    width: 113,
    height: 48,
    marginLeft: 26,
    marginTop: 250,
    backgroundColor: '#FAFAFC',
    borderRadius: 9.38528,
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:10
  },

    input3: {
    position: 'absolute',
    width: 157.19,
    height: 48.48,
    marginLeft: 167,
    marginTop: 250,
    backgroundColor: '#FAFAFC',
    borderRadius: 9.38528,
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:10,
  },

  rodape:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:120,
    height:36,
    left: 1,
    marginTop: 500,
    marginLeft:'27%'
  },

  botao:{
    width:161,
    height:36,
    backgroundColor: '#04D361',
    borderRadius: 60, 
    fontSize: 16,
    color:'#fff',
    paddingLeft:'35%',
    paddingTop:5
  },

  img:{
    marginLeft:0,
    marginTop:0,
    width:15,
    height:10,
  },
  
  selecionar1:{
    position: 'absolute',
    marginLeft:295,
    marginTop:160,
    width:15,
    height:10
  },

  selecionar2:{
    position: 'absolute',
    marginLeft:111,
    marginTop:270,
    width:15,
    height:10,
  },

  selecionar3:{
    position: 'absolute',
    marginLeft:295,
    marginTop:270,
    width:15,
    height:10
  }

});