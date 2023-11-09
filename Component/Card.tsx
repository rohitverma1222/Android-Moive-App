import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface Movie {
    id: number;
    title: string;
    backdrop_path:string;
    poster_path:string;
  }
  
  interface CardProps {
    movieObj: Movie;
  }
export default function Card(props: CardProps) {
    const { movieObj } = props;
  return (
    <View style={styles.cardContainer}>
        <View style={styles.mainMovieCard}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/original${movieObj.poster_path}` }}  style={styles.imgstyle}/>
            </View>
            <View style={styles.movieTitle}>
                <Text style={styles.textColor}>{movieObj.title}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainMovieCard:{
        backgroundColor:"#222222",
        width:"90%",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:20,
        borderRadius:12,
        
    },
    movieTitle:{
        // backgroundColor:"red",
        marginTop:10,
        width:"97%",
    },
    textColor:{
        fontSize:18,
        color:"#FFFFFF",
    },
    imgstyle:{
        height:"100%",
        width:"100%",
        borderRadius:10,
    },
    imgContainer:{
        height:500,
        width:"100%",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    cardContainer:{
        // backgroundColor:"red",
        marginTop:20,
        width:"100%",
        flex:2,
        alignItems:"center",
        justifyContent:"center",
    },

})