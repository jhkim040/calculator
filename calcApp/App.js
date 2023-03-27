import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Backspace from "./components/operations/backspace";
import Clear from "./components/operations/clear";
import WriteNumber from "./components/operations/writeNumber";

export default function App() {
  const [expression, setExpression] = useState("0");
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.input}>{expression}</Text>
      </View>
      <View style={styles.calcalate}>
        <TouchableOpacity
          style={[styles.box, styles.redBox]}
          onPress={() => {
            setExpression(Backspace(expression));
          }}
        >
          <Text style={[styles.operation, styles.whiteFont]}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.operationBox]}
          onPress={() => setExpression(Clear())}
        >
          <Text style={styles.operation}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.operationBox]}>
          <Text style={styles.operation}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.operationBox]}>
          <Text style={styles.operation}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 7))}
        >
          <Text style={styles.operation}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 8))}
        >
          <Text style={styles.operation}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 9))}
        >
          <Text style={styles.operation}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.operationBox]}>
          <Text style={styles.operation}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 4))}
        >
          <Text style={styles.operation}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 5))}
        >
          <Text style={styles.operation}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 6))}
        >
          <Text style={styles.operation}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.operationBox]}>
          <Text style={styles.operation}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 1))}
        >
          <Text style={styles.operation}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 2))}
        >
          <Text style={styles.operation}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 3))}
        >
          <Text style={styles.operation}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.operationBox]}>
          <Text style={styles.operation}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.numberBox]}>
          <Text style={styles.operation}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.numberBox]}
          onPress={() => setExpression(WriteNumber(expression, 0))}
        >
          <Text style={styles.operation}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.numberBox]}>
          <Text style={styles.operation}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.redBox]}>
          <Text style={[styles.operation, styles.whiteFont]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    flex: 1,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  calcalate: {
    flex: 2.2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    padding: 15,
  },
  input: {
    padding: 40,
    width: "100%",
    color: "#fff",
    textAlign: "right",
    fontSize: 50,
    fontWeight: "bold",
  },
  box: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    margin: 7,
  },
  numberBox: {
    backgroundColor: "#ddd",
  },
  operationBox: {
    backgroundColor: "#ffa500",
  },
  redBox: {
    backgroundColor: "red",
  },
  operation: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
  },
  whiteFont: {
    color: "#fff",
  },
});
