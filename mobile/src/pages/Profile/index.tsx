import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Agenda from '../../components/Agenda/index';

function Profile(){

    const {goBack} = useNavigation();
    

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <RectButton 
                    onPress={handleNavigateBack}
                    style={styles.voltar}>
                    <Image style = {styles.voltarImage} source = {require('../../assets/images/back.png')} />
                </RectButton>
            </View>

            <ScrollView>
                <View  style={styles.container}>
                    <View style={styles.corpo}>
                        <Text style={styles.text}>Sua busca foi realizada!!!</Text>
                    </View>


                    <View style = {styles.profissional}>
                        <View>
                            <Image style={styles.foto} source = {require('../../assets/images/foto.png')}/>
                            <View style = {styles.dados}>
                                <Text style={[styles.text1, {textAlign: 'center'}]}>Nome do profissional</Text>
                                <Text style={[styles.text2, {textAlign: 'center'}]}>Profissão</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.text2, {textAlign: 'justify'}]}>Trabalho há 20 anos nessa profissão. Sou ágil gosto deixar tudo brilhando e sempre quero dar meu melhor, deixando sempre meu cliente satisfeiro.</Text>
                            <Text style={styles.text1}>Local de atendimento:</Text>
                            <Text style={styles.text2}>Endereço</Text>
                        </View>
                        
                        <View>
                            <ScrollView 
                                horizontal = {true} 
                                showsHorizontalScrollIndicator = {false}
                            >
                                <Agenda dayWeek = "Segunda" time = "8h - 18h" />
                                <Agenda dayWeek = "Terça" time = "8h - 18h" />
                                <Agenda dayWeek = "Quarta" time = "8h - 18h" />
                                <Agenda dayWeek = "Quinta" time = "8h - 18h" />
                                <Agenda dayWeek = "Sexta" time = "8h - 18h" />
                            </ScrollView>
                        </View>

                        <View style={styles.rodape}>
                            <View style={styles.textRodape}>
                                <Text style={styles.text2}>Preço/hora:</Text>
                                <Text style={styles.text1}>R$ 0,00</Text>
                            </View>
                            <RectButton style={styles.button}>
                                <Image style={styles.img} source = {require('../../assets/images/whatsapp.png')}/>
                                <Text style={styles.text3}>Entrar em contato</Text>
                            </RectButton>
                        </View>              
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 360,
        height: 760,
        backgroundColor: '#D2D3E5',
        alignItems: 'center'
    },

    containerHeader:{
        width: 360,
        height: 62,
        backgroundColor: '#1A1D53',
        justifyContent: 'center'
    },

    profissional: {
        position: 'absolute',
        backgroundColor: '#F1F1F1',
        height: 620,
        width: 274,
        marginTop: 100,
        paddingTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 31,
    },

    voltarImage: {
        width: 35,
        height: 10
    },


    voltar:{
        marginLeft: 17.6,
        marginTop: 10,
        width: 70,
        height: 20
    },
    
    corpo:{
        width: 360,
        height: 150,
        backgroundColor: '#25C998'
    },

    text:{
        width: 197,
        height: 56,
        marginLeft: 32,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
        color: '#1A1D53'
    },

    foto:{
        width: 35,
        height: 35,
        borderRadius: 30, 
        backgroundColor: '#C4C4C4',
        marginBottom: 20
    },

    dados: {
        paddingLeft: 55,
        position: 'absolute',
    },

    text1:{
        width: 'auto',
        height: 'auto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#1A1D53',
    },

    text2:{
        width: 'auto',
        height: 'auto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 26,
        color: '#6E71A9',
        marginBottom: 5
    },

    rodape:{
        position: 'absolute',
        width: 274,
        height: 30,
        marginTop: 455,
        marginBottom: 20,
        borderTopColor: '#6E71A9',
        borderTopWidth: 1,
    },

    textRodape: {
        marginLeft: 30,
        marginTop: 10
    },

    button:{
        width: 214,
        height: 48,
        marginLeft: 30,
        marginTop: 20,
        backgroundColor: '#04D361',
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center'
    },

    img:{
        height: 26,
        width: 26,
        marginRight: 100
    },

    text3:{
        position: 'absolute',
        paddingLeft: 35,
        fontSize: 12,
        color:'#FFFFFF',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
  
});
