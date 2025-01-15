import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BellRinging,
  Bookmark,
  ChatsTeardrop,
  MagnifyingGlass,
  SlidersHorizontal,
  SunHorizon,
} from "phosphor-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerLeftLogo}>
            <SunHorizon size={30} color="#FFD400" weight="duotone" />
            <Text style={styles.headerLeftText}>Sol & Mar</Text>
          </View>

          <View>
            <Text style={styles.headerLeftParagraph}>
              Pousada e Apartamentos
            </Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <BellRinging size={30} color="#f4f4f4" weight="duotone" />r
          <Bookmark size={30} color="#f4f4f4" weight="duotone" />r
        </View>
      </View>
      <Text style={styles.userName}>Olá, Oliver Augusto</Text>
      <View style={styles.inputContainer}>
        <MagnifyingGlass size={30} color={"#757575"} weight="duotone" />
        <TextInput
          style={styles.input}
          placeholder="Faça sua pesquisa"
          placeholderTextColor="#757575"
        />
        <SlidersHorizontal size={30} color={"#FFD400"} weight="duotone" />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  headerLeftLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: 800,
  },
  headerLeftParagraph: {
    color: "#f4f4f4",
    fontSize: 13,
    fontWeight: 400,
  },
  headerRight: {
    flexDirection: "row",
    gap: 10,
  },
  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: 800,
  },
  inputContainer: {
    width: "100%",
    height: 56,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: "#f4f4f4",
  },
});
