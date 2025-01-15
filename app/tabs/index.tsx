import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BellRinging,
  Bookmark,
  MagnifyingGlass,
  SlidersHorizontal,
  Bed,
} from "phosphor-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerLeftLogo}>
            <Bed size={30} color="#FFD400" weight="duotone" />
            <Text style={styles.headerLeftText}>AlugAí</Text>
          </View>

          <View>
            <Text style={styles.headerLeftParagraph}>
              Casas, Apart e Quartos,
            </Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <BellRinging size={30} color="#f4f4f4" weight="duotone" />r
          <Bookmark size={30} color="#f4f4f4" weight="duotone" />r
        </View>
      </View>
      <View>
        <Text style={styles.userName}>Olá, Oliver Augusto</Text>
      </View>

      <View style={styles.inputContainer}>
        <MagnifyingGlass size={30} color={"#757575"} weight="duotone" />
        <TextInput
          style={styles.input}
          placeholder="Faça sua pesquisa"
          placeholderTextColor="#757575"
        />
        <SlidersHorizontal size={30} color={"#FFD400"} weight="duotone" />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image
              style={styles.cardImage}
              source={require("../assets/hotel.png")}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Pousada Canajurê</Text>
              <Text style={styles.cardInfoSubTitle}>Florianopólis</Text>
            </View>
          </Pressable>

          <View style={styles.cardInfoBuy}>
            <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
            <Bookmark size={30} color="#f4f4f4" weight="fill" />
          </View>
        </View>
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
    alignItems: "flex-start",
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
  content: {
    width: "100%",
    gap: 20,
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#1f222a",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  cardButton: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  cardInfo: {
    height: "100%",
    gap: 10,
  },
  cardInfoTitle: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: 400,
  },
  cardInfoSubTitle: {
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: 300,
  },
  cardInfoBuy: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardInfoBuyText: {
    color: "#FFD400",
    fontSize: 18,
    fontWeight: 900,
  },
});
