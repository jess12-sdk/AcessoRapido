import React from 'react';
import { Image, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';


function Give(){

  const {goBack} = useNavigation();
  const {navigate} = useNavigation();

  function handleNavigateToSuccessPage() {
    navigate('Success');
  }

  function handleNavigateBack() {
    goBack();
  }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <RectButton 
                  onPress={handleNavigateBack}
                  style={styles.voltar}
                >
                    <Image style = {styles.voltarImage} source = {require('../../assets/images/back.png')} />
                </RectButton>
            </View>

            <ScrollView>
                <View  style={styles.container}>
                    <View style={styles.corpo}>
                        <Text style={styles.text}>Que íncrivel que você quer ofertar seus serviços</Text>
                        <Text style={styles.text1}>Primeiro passo é preencher esse formulário</Text>
                    </View>


                    <View style = {styles.containerDados}>

                        <Text style={styles.text2}>Seus Dados</Text>

                        <Text style={styles.text3}>Nome</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder="Nome"
                        />

                        <Text style={styles.text3}>Sobrenome</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder="Sobrenome"
                        />
                        
                        <Text style={styles.text3}>E-mail</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder = "E-mail"
                        />

                        <Text style={styles.text3}>Whatsapp</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder = "Whatsapp"
                        />

                        <Text style={styles.text3}>Experiências</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea2]}
                            placeholder="Fale sobre suas exériências"
                        />
                        
                        <Text style={styles.text2}>Serviços</Text>
                        <Text style={styles.text3}>Tipo de serviço</Text>
                        <RNPickerSelect
                          onValueChange={(value) => console.log(value)}
                          items={[
                              { label: 'Diarista', value: 'Diarista' },
                              { label: 'Elétrica', value: 'Elétrica' },
                              { label: 'Fretes', value: 'Fretes' },
                              { label: 'Obras Gerais', value: 'Obras Gerais' },
                              { label: 'pedreiro', value: 'pedreiro' },
                          ]}
                        />

                        <Text style={styles.text3}>Preço/hora</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder="Preço"
                        />

                        <Text style={styles.text2}>Local de Atendimento</Text>
                        <Text style={styles.text3}>Bairro(os)</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder="Bairro(os) atendimento"
                        />

                        <Text style={styles.text3}>Estado</Text>
                        <RNPickerSelect
                          onValueChange={(value) => console.log(value)}
                          items={[
                              { label: 'CE', value: 'CE' },
                              { label: 'MG', value: 'MG' },
                              { label: 'SP', value: 'SP' },
                              { label: 'RJ', value: 'RJ' },
                              { label: 'GO', value: 'GO' },
                          ]}
                        />

                        <Text style={styles.text3}>Cidade</Text>
                        <RNPickerSelect
                          onValueChange={(value) => console.log(value)}
                          items={[
                              { label: 'russas', value: 'russas' },
                              { label: 'fortaleza', value: 'fortaleza' },
                              { label: 'São Paulo', value: 'São Paulo' },
                              { label: 'aracati', value: 'aracati' },
                              { label: 'jaguaruana', value: 'jaguaruana' },
                          ]}
                        />
                        
                        <Text style={styles.text2}>Horários Disponíveis</Text>
                        <Text style={styles.text3}>Dia da Semana</Text>
                        <RNPickerSelect
                          onValueChange={(value) => console.log(value)}
                          items={[
                              { label: 'Domingo', value: '0' },
                              { label: 'Segunda-feira', value: '1' },
                              { label: 'Terça-feira', value: '2' },
                              { label: 'Quarta-feira', value: '3' },
                              { label: 'Quinta-feira', value: '4' },
                              { label: 'Sexta-feira', value: '5' },
                              { label: 'Sábado', value: '6' },
                          ]}
                        />

                        <Text style={styles.text3}>Das</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder="00:00"
                        />

                        <Text style={styles.text3}>Até</Text>
                        <TextInput 
                            style = {[styles.input, styles.textArea]}
                            placeholder="00:00"
                        />
                        
                        
                        
                            
                        <View style={styles.rodape}>
                            <View style={styles.button}>
                                <RectButton onPress={handleNavigateToSuccessPage}>
                                    <Text style={styles.buttonText}>Salvar Cadastro</Text>
                                </RectButton>
                            </View>
                            <Image style = {styles.rodapeImage} source = {require('../../assets/images/importante.png')} />
                            <Text style = {styles.textRodape}>Importante!</Text>
                            <Text style={styles.textRodape2}>Preencha todos os dados corretamente.</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    ) 
}

export default Give;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 2100,
    backgroundColor: '#D2D3E5',
    alignItems: 'center'
  },

  pickerComponent: {
    width: 231,
    height: 40,
    backgroundColor: '#FAFAFC',
    borderColor: '#E6E6F0',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14
  },

  containerHeader:{
    width: 360,
    height: 62,
    backgroundColor: '#1A1D53',
    justifyContent: 'center'
  },

  containerDados: {
    position: 'absolute',
    backgroundColor: '#F1F1F1',
    height: 1800,
    width: 274,
    marginTop: 149,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopEndRadius: 31,
    borderTopStartRadius: 31,
  },

  voltarImage: {
    width: 35,
    height: 10
  },

  rodapeImage: {
    width: 45.75,
    height: 43.54,
    marginLeft: 34,
    marginTop: 25,

  },

  voltar:{
    marginLeft: 17.6,
    marginTop: 10,
    width: 70,
    height: 20
  },

  text:{
    width: 255,
    height: 56,
    marginTop: 23,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 28,
    color: '#1A1D53',
  },

  corpo:{
    width: 360,
    height: 200,
    marginLeft: 0,
    paddingLeft: 24,
    backgroundColor: '#25C998'
  },

  text1:{
    width: 255,
    height: 22.71,
    marginTop: 5,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 30,
    color: '#6E71A9',
  },

  rodape:{
    position: 'absolute',
    height: 170,
    width: 274,
    backgroundColor: '#E2E2E2',
    borderBottomEndRadius: 31,
    borderBottomStartRadius: 31,
    marginTop: 1730,
    textAlign: 'left',
  },

  textRodape: {
    position: 'absolute',
    paddingLeft: 100,
    width: 274,
    height: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1A1D53',
    marginTop: 86,
  },

  textRodape2: {
    position: 'absolute',
    paddingLeft: 100,
    width: 274,
    height: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#A0A0B3',
    marginTop: 106,
  },

  button:{
    width: 161,
    height: 36,
    backgroundColor: '#04D361',
    borderRadius: 60, 
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 56.5,
    marginRight: 56.5,
  },

  buttonText:{
    fontSize: 16,
    color:'#FFFFFF',
    textAlign: 'center',
  },

  text3: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#6E71A9',
    marginBottom: 20

  },

  line1: {
    position: 'absolute',
    width: 74,
    marginTop: 20,
    borderBottomColor: '#6E71A9',
    borderBottomWidth: 1,
  },

  line2: {
    position: 'absolute',
    width: 74,
    marginLeft: 138,
    marginTop: 20,
    borderBottomColor: '#6E71A9',
    borderBottomWidth: 1,
    alignItems: 'flex-end'
  },

  buttonExcluir: {
    position: 'absolute',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textExcluir: {
    marginTop: 10,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FF0000',
  },

  input: {
    width: 231,
    height: 32,
    backgroundColor: '#FAFAFC',
    borderColor: '#E6E6F0',
    borderWidth: 2,
    marginBottom: 20
  },

   textArea2: {
    paddingLeft: 15,
    paddingTop: 15,
    height: 131,
    textAlignVertical: 'top',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
  },

  textArea: {
    paddingLeft: 15,
    height: 40,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
  },

  text2:{
    height: 40,
    borderBottomColor: '#6E71A9',
    borderBottomWidth: 1,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1A1D53',
    marginBottom: 20,
  },

});