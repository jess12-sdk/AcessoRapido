import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function Success(){

  const {navigate} = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home');
  }

  return (
    <View style = {styles.container}>
        <Text style = {styles.title}>
          Sucesso!!!
        </Text>

        <Text style = {styles.paragraph}>
          Seus dados foram cadastrados com sucesso.
        </Text>

        <Text style = {styles.text}>
          Boa, agora aproveite a plataforma confira nossos serviços.
        </Text>

        <RectButton
        onPress={handleNavigateToHomePage}
          style = {styles.button}
        >
            <Text style = {styles.buttonText}>Vamos lá</Text>
        </RectButton>
    </View>
    );
}

export default Success;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: '100%',
    marginLeft: 0,
    marginTop: 0,
    backgroundColor: '#1A1D53',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    width: 255,
    marginTop: 150,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 55,
    color: '#25C998',
  },
  paragraph: {
    width: 255,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 23,
    color: '#25C998',
  },
   text: {
    width: 255,
    marginTop: 130,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 23,
    color: '#25C998',
  },
   button: {
    position: 'absolute',
    width: 161,
    height: 36,
    marginLeft: 99,
    marginTop: 500,
    backgroundColor: '#04D361',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    position: 'absolute',
    width: 60,
    height: 13,
    marginLeft: 140,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  }
  
});