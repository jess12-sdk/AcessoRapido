import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ProfileWeekProps {
    dayWeek: string;
    time: string;
}

const Agenda: React.FC<ProfileWeekProps> = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.dia}>
          <Text style={styles.text1}>Dia</Text>
          <Text style={styles.text2}>{props.dayWeek}</Text>
          <Text style={styles.text1}>Horário</Text>
          <Text style={styles.text2}>{props.time}</Text>
        </View>
    </View>
  );
}

export default Agenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 110,
    width: 104,
    marginTop: 20,
    marginRight: 15,
  },

  text1:{
    width: 'auto',
    height: 21,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 26,
    color: '#6E71A9',
    marginBottom: 2
  },

  text2:{
    width: 'auto',
    height: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 16,
    color: '#1A1D53',
    marginBottom: 8
  },
  
  dia: {
    flex: 2,
    width: 'auto',
    paddingLeft: 15,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor:'#FFFFFF',
    borderColor:'#6E71A9'
  }

});
