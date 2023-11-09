import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Wish() {
  const greet = () => {
    const date: Date = new Date();
    const hour: number = date.getHours();
    let minute: number | string = date.getMinutes();
    let second: number | string = date.getSeconds();

    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  const wish = greet();
  
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>{wish}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textColor:{
        color:"#fff",
        fontSize:24,
        fontFamily:'NunitoSans_10pt-Medium'
    },
    container:{
        flex:1,
        alignItems:"center",
        marginTop:10,
        height:'10%',
    }
});
