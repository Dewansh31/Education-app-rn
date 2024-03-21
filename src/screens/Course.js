import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import Courses from '../API/courseApi';

const Course = ({navigation}) => {
  const courseCard = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage}
             source={item.image}
             resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>
            {item.title}
          </Text>

           <Text style={styles.descText}>
            {item.description}
          </Text>

          <View  style={styles.btnContainer}>
             <TouchableOpacity style={styles.btnStyle}
             onPress={()=> navigation.navigate("CourseDetails",
             {
               courseId : item.id,
             })
             }
             >
               <Text style={styles.btntxt}>Course Details</Text>
             </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage:{
  width:"100%",
  height:undefined,
  borderRadius: 10,
  aspectRatio: 1,
  },

mainContainer:{
  paddingHorizontal: 20,

},
courseContainer:{
  padding:30,
   backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
},
 mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
    
  },
   descText: {
    textAlign: "left",
    fontFamily: "WorkSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
   btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
   btnStyle: {
    backgroundColor: "#809fff",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "WorkSans_400Regular",
    textTransform: "capitalize",
  },
});

export default Course;
