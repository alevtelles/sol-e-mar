import { ArrowLeft, Bookmark, DotsThree, MapPin } from "phosphor-react-native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("../assets/hotel.png")}
        />

        <View style={styles.headerInfoButtons}>
          <ArrowLeft size={32} color="#f4f4f4" />
          <View style={styles.headerInfoButtonsRight}>
            <Bookmark size={32} color="#f4f4f4" />
            <DotsThree size={32} color="#f4f4f4" />
          </View>
        </View>
      </View>

      <Text style={styles.infoNameText}> Hotel da Casa</Text>

      <View style={styles.contentAddress}>
        <MapPin size={32} color="#FFD400" />
        <Text style={styles.contentAddressText}>
          Rua Dez, 329 - Jurerê - Florianópolis
        </Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.containerGalleryPhotos}>
        <Text style={styles.containerTextGallery}>Galeria de fotos</Text>
        <Text style={styles.containerTextSellAll}>Ver todas</Text>
      </View>

      <ScrollView horizontal style={styles.contentPhotoContainer}>
        <Image
          style={styles.contentPhotoImage}
          source={require("../assets/hotel.png")}
        />
        <Image
          style={styles.contentPhotoImage}
          source={require("../assets/hotel.png")}
        />
        <Image
          style={styles.contentPhotoImage}
          source={require("../assets/hotel.png")}
        />
        <Image
          style={styles.contentPhotoImage}
          source={require("../assets/hotel.png")}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContainerText}>
          <Text style={styles.footerContainerTextMoney}>R$ 250</Text>
          <Text style={styles.footerContainerTextMonth}>/ mês</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
  },
  header: {
    width: "100%",
    height: "40%",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerInfoButtons: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerInfoButtonsRight: {
    flexDirection: "row",
    gap: 10,
  },
  infoNameText: {
    color: "#f4f4f4",
    fontSize: 36,
    fontWeight: "bold",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  contentAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  contentAddressText: {
    color: "#f4f4f4",
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "#757575",
    marginHorizontal: 30,
    marginTop: 15,
  },
  containerGalleryPhotos: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: "space-between",
  },
  containerTextGallery: {
    fontSize: 18,
    color: "#f4f4f4",
    fontWeight: "bold",
  },
  containerTextSellAll: {
    fontSize: 14,
    color: "#FFD400",
    fontWeight: 400,
  },
  contentPhotoContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  contentPhotoImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginLeft: 15,
  },
  footer: {
    width: "100%",
    borderWidth: 1,
    height: 80,
    borderRightColor: "#757575",
    borderLeftColor: "#757575",
    borderTopColor: "#757575",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 10,
  },
  footerContainerText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footerContainerTextMoney: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD400",
  },
  footerContainerTextMonth: {
    fontSize: 12,
    fontWeight: 400,
    color: "#f4f4f4",
  },
  button: {
    backgroundColor: "#FFD400",
    flex: 1,
    height: 56,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#1f222a",
    fontSize: 16,
    fontWeight: 500,
  },
});
