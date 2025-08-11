import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0A233C",
      }}
    >
        <Text style={{ color: "white", fontSize: 20 }}>Welcome to</Text>
      <Text style={{ fontWeight: "bold", fontSize: 80 }}>
        <Text style={{ color: "white" }}>Ever</Text>
        <Text style={{ color: "#40E0D0" }}>Deal</Text>
      </Text>
    </View>
  );
}
