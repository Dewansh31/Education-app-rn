import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>DRK MELODIES </Text>
      <Text style={styles.paraStyle}> 😎It is a musical group(band)😎 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/25719.png",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About Us </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
         Drk melodies is an Indian pop rock band formed in 2015 currently based in Mumbai, India known for its renditions of old classic Indian Bollywood songs as well as original music. The band  consists of Dewansh (lead vocalist/composer), Dewansh Yadav (lyricist/lead guitar/composer), Badhshah (bass guitar) and Rakshit Yadav.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/channel/UC5CmRWLUH5DOwRsoJzaOCLg")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UC5CmRWLUH5DOwRsoJzaOCLg"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.youtube.com/channel/UC5CmRWLUH5DOwRsoJzaOCLg")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 40,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#000000",
    paddingBottom: 30,
    fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#fafafa",
    paddingHorizontal: 30,
    borderRadius:"10px",
    marginHorizontal:10,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#000",
    fontSize: 18,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;