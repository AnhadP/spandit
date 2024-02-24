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
    "Sex",
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
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textView}>{`${currentSFor}Pandit`}</Text>
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
  },
  textView: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 35,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    bottom: 0,
    width: "100%",
    height: 65,
    position: "absolute",
    bottom: 0,
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
