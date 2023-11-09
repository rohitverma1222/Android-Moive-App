import React, { useEffect, useState } from 'react';
import { SafeAreaView,View,Text,StyleSheet, useColorScheme, FlatList, ScrollView } from 'react-native'
import Wish from './Component/Wish'
import Card from './Component/Card';
import axios from "axios";
interface Movie {
  id: number;
  title: string;
  backdrop_path:string;
  poster_path:string;
}

function App():JSX.Element {
  const darkColor=useColorScheme()==='dark';

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

  const [movies, setMovies] = useState<Movie[]>([]);
  const currPage = 1; // Replace with your desired page number

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const mainPageUrl = `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${currPage}`;
        const res = await axios.get(mainPageUrl);
        const data = res.data;
        setMovies([...data.results]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [currPage]);

  return (
      <View style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.bigText}>{wish}</Text>
          </View>
          <View>
            <Text style={styles.textDesing}>Trending</Text>
            {
            movies.map((movieobj)=>(
            <Card key={movieobj.id} movieObj={movieobj}/>
            ))
            }

          </View>
        </ScrollView>
      </View>
  )
}
const bgcolor="#111111";
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  screen:{
    backgroundColor: bgcolor,
    flex: 1,
  },
  bigText:{
    color:"#FFFFFF",
    fontSize:24,
    fontFamily:'NunitoSans_10pt-Medium',
  },
  header:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:8,
  },
  textDesing:{
    color:"#FFFFFF",
    margin:8,
    fontSize:14,
    fontFamily:'NunitoSans_10pt-Regular',
  }
})
export default App;