import * as React from 'react';
import {Image, Text, View, StyleSheet } from 'react-native';
import Menu from '../component/Menu';


const Home = () => {
 
const description= "This is an educational app by DRK Melodies team , our ambition is to reach maximum students and help them learning various technologies and achieve their goal ,what they wanna be in future .Best of luck!"
  return (
    <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
    <Image style={styles.headerImg}
      resizeMode="contain"
      source={require('../../assets/photo.jpg')} />
      <Text style={styles.mainHeader}> WELCOME TO</Text>
      <Text style={[styles.mainHeader],{
        fontSize: 33,
        color:'blue',
        marginTop:0

      }
      }> DRK Education</Text>

      <Text style={styles.paraStyle}>{description}</Text>


    </View>

     <View style={styles.menuStyle}>
      <View style={styles.lineStyle}></View>
            <Menu/>
       <View style={[styles.lineStyle,
       {
         marginVertical:10,
       }
       ]}></View>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
 
 mainContainer:{
   height:'100%',
   display:"flex",
   justifyContent:"space-between",
   paddingHorizontal:20,
   backgroundColor : "#fff",
   textAlign: "center"

 },

 homeTop:{
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   paddingHorizontal:10,
 },

 headerImg:{
   height: undefined,
   width:'100%',
   aspectRatio: 1,
   display:"flex",
   alignItems:"stretch",
   marginTop:45,
   borderRadius:50,
 },

 mainHeader:{
   fontSize:30,
   color:"#344055",
   textTransform:"uppercase",

},
paraStyle:{
  fontSize:18,
  color:'#7d7d7d',
  marginTop:30,
  paddingBottom: 50,
  lineHeight:26,
},
lineStyle:{
  marginBottom:20,
  borderWidth:0.5,
  borderColor:"green",
  fontFamily: "Nunito_600SemiBold",
}


});


export default Home;

