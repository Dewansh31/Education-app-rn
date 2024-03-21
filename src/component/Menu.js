import * as React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = ()=>{
  const navigation = useNavigation();
  return(
    <View style={styles.menuContainer}>

    <TouchableOpacity style={styles.btnStyle}
      onPress={()=>navigation.navigate("Course")}>
   
    <Image
    style={styles.iconStyle}
    source={{uri:"https://img.icons8.com/nolan/344/courses.png"}} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnStyle}
      onPress={()=>navigation.navigate("UserData")}>
    <Image
    style={styles.iconStyle}
    source={{uri:"https://img.icons8.com/external-itim2101-lineal-color-itim2101/344/external-students-online-education-itim2101-lineal-color-itim2101.png"}} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnStyle}
      onPress={()=>navigation.navigate("Contact")}>
     <Image
    style={styles.iconStyle}
    source={{uri:"https://img.icons8.com/nolan/2x/contact-card.png"}} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnStyle}
      onPress={()=>navigation.navigate("About")}>
    <Image
    style={styles.iconStyle}
    source={{uri:"https://img.icons8.com/color-glass/2x/about.png"}} />
    </TouchableOpacity>
    </View>
  );
};

const styles =StyleSheet.create({
  menuContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",

  },
  btnStyle:{
    textTransform:"uppercase",
    
  },
  iconStyle:{
    width:'100%',
    height:50,
    aspectRatio:1,
  }
  

});


export default Menu;