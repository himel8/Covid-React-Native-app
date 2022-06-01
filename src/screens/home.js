import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Text from "../components/text";
import { color } from "../theme/color";
import { spacing } from "../theme/spacing";

const HeaderBtn = ({ icon, title, bgColor }) => {
  return (
    <View style={[styles.headerBtn, { backgroundColor: bgColor }]}>
      <Ionicons name={icon} size={18} color="white" />

      <Text preset="h4" style={{ marginLeft: spacing[2] }}>
        {title}
      </Text>
    </View>
  );
};

const renderImage = (name) => {
  switch (name) {
    case "first":
      return <Image source={require("../../assets/first.png")} />;
    case "second":
      return <Image source={require("../../assets/second.png")} />;
    case "third":
      return <Image source={require("../../assets/third.png")} />;
  }
};

const PreventData = ({ title, image }) => {
  return (
    <View style={styles.preventContainer}>
      {renderImage(image)}
      <Text preset="h5" style={styles.preventText}>
        {title}
      </Text>
    </View>
  );
};

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.upperContainer}>
          <View style={styles.headerIcon}>
            <Pressable>
              <Image source={require("../../assets/menu.png")} />
            </Pressable>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={color.white}
            />
          </View>
          <View style={styles.header}>
            <Text preset="h2">Covid-19</Text>
            <View style={styles.country}>
              <Image
                style={styles.countryImage}
                source={require("../../assets/country.png")}
              />
              <Text
                preset="h4"
                style={{ color: color.black, marginHorizontal: spacing[1] }}
              >
                USA
              </Text>
              <AntDesign name="caretdown" size={16} color="black" />
            </View>
          </View>

          <Text style={styles.headerText} preset="h3">
            Are you feeling sick?
          </Text>
          <Text style={styles.headerminiText} preset="small">
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
          <View style={styles.headerBtnContainer}>
            <HeaderBtn title="Call Now" icon="call" bgColor={color.red} />
            <HeaderBtn
              title="Send SMS"
              icon="chatbubble"
              bgColor={color.blue}
            />
          </View>
        </View>

        <View style={styles.lowerContainer}>
          <Text preset="h3" style={{ color: color.black }}>
            Prevention
          </Text>
          <View style={styles.prevention}>
            <PreventData title="Avoid close contact" image="first" />
            <PreventData title="Clean your hands often" image="second" />
            <PreventData title="Wear a facemask" image="third" />
          </View>
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/Frame.png")}
                style={{
                  position: "absolute",
                  top: -79,
                  left: 0,
                  width: 130,
                  height: 140,
                }}
              />
            </View>
            <View style={styles.cardText}>
              <Text preset="h3" style={{ marginBottom: spacing[2] }}>
                Do your own test!
              </Text>
              <Text preset="small">
                Follow the instructions to do your own test.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: color.white,
  },
  upperContainer: {
    backgroundColor: color.purple,
    borderBottomLeftRadius: spacing[5],
    borderBottomRightRadius: spacing[5],
    paddingHorizontal: spacing[3],
  },
  headerIcon: {
    marginVertical: spacing[6],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: spacing[4],
  },
  country: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: color.white,
    borderRadius: 10,
    padding: spacing[1],
  },
  countryImage: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  headerText: {
    marginVertical: spacing[2],
  },
  headerminiText: {
    marginTop: spacing[1],
    marginBottom: spacing[4],
    lineHeight: 22,
  },
  headerBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[6],
  },
  headerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: 20,
  },
  lowerContainer: {
    marginTop: spacing[4],
    marginLeft: spacing[2],
  },
  prevention: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: spacing[4],
  },
  preventContainer: {
    width: 100,
  },
  preventText: {
    marginRight: spacing[5],
    color: color.black,
    textAlign: "center",
  },
  card: {
    marginVertical: spacing[6],
    marginRight: spacing[2],
    padding: spacing[2],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#AEA1E6",
    borderRadius: 16,
    position: "relative",
  },
  cardText: {
    flex: 1,
  },
});
