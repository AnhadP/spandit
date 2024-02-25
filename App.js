import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const sfors = [
    "Sic",
    "Stupid",
    "Sunday",
    "Saturday",
    "Sick",
    "Simple",
    "Sassy",
    "Samsung",
    "Startup",
    "Sad",
    "Sexy",
    "Sanskari",
    "Secret",
  ];

  const getRandomSFor = () => {
    var sfor = sfors[Math.floor(Math.random() * sfors.length)];
    return sfor;
  };

  const getRandomBGColor = () => {
    var randcol = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randcol;
  };

  const [currentSFor, setCurrentSFor] = useState(getRandomSFor());

  const [BGColor, setBGcolor] = useState(getRandomBGColor());

  return (
    <SafeAreaView style={styles.container} backgroundColor={BGColor}>
      <View>
        <Text style={styles.textView}>
          <Text style={{ fontWeight: "bold" }}>{currentSFor}</Text>
          Pandit
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCurrentSFor(getRandomSFor());
          setBGcolor(getRandomBGColor());
        }}
      >
        <View style={styles.buttonView} title="Another One!" color="#007AFF">
          <Text style={styles.buttonText}>Another One!</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: "100%",
  },
  textView: {
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 17,
    fontWeight: "bold",
    padding: 25,
  },
});
