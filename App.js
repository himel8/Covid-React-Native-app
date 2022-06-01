import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text";
import Home from "./src/screens/home";

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/GraphikRegular.otf"),
    "Semi-Bold": require("./assets/fonts/GraphikSemibold.otf"),
    Bold: require("./assets/fonts/GraphikBold.otf"),
  });
  if (!loaded) {
    return <Text>Font is loading....</Text>;
  }

  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
