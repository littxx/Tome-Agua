import React from "react";
import { StyleSheet, View, Text} from "react-native";
import Button from "./components/Button";
import Imagem from "./components/Imagem";
import Display from "./components/Display";


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Display></Display>
        <Button></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

  },
  font:{
    color: "#000000",
    fontSize: 24,

  }
})