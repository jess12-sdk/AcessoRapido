import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
  
function Home(){

  const {navigate} = useNavigation();

  function handleNavigateToGiveServicesPage() {
    navigate('Give');
  }

  function handleNavigateToSearchPages() {
    navigate('Search');
  }

    return (
      <View style = {styles.container}>
        <View style = {styles.containerHender}>
          <Image  style = {styles.logo} source = {require('../../assets/images/logo.png')} />
          <Image  style = {styles.image} source = {require('../../assets/images/services.png')} />
        </View>

        <RectButton
          onPress={handleNavigateToSearchPages} 
          style={styles.button}
        >
          <Text style = {styles.buttonText}>Buscar Serviços</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveServicesPage}
          style = {styles.buttonService}
        >
          <Text style = {styles.buttonText}>Ofertar Serviços</Text>
        </RectButton>
      </View>
    );
}



const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    marginLeft: 0,
    marginTop: 0,
    backgroundColor: '#D2D3E6',
    alignItems: 'center'
  },
  containerHender: {
    position: 'absolute',
    marginTop: 0,
    marginLeft: 0,
    backgroundColor: '#1A1D53',
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    marginTop: 52,
    width: 155,
    height: 55
  },
  image: {
    position: 'absolute',
    marginTop: 159,
    marginLeft: 59,
    height: 225,
    width: 251,
    borderRadius: 20
  },
  button: {
    position: 'absolute',
    width: 251,
    height: 36,
    marginLeft: 59,
    marginTop: 462,
    backgroundColor: '#04D361',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonService: {
    position: 'absolute',
    width: 251,
    height: 36,
    marginLeft: 59,
    marginTop: 521,
    backgroundColor: '#04D361',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    position: 'absolute',
    width: 90,
    height: 13,
    marginLeft: 140,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center'
  },

  
});

export default Home;