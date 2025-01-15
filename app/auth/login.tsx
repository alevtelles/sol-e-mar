import {
  ArrowLeft,
  EnvelopeSimple,
  FacebookLogo,
  GoogleLogo,
  LockKey,
} from "phosphor-react-native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
      </TouchableOpacity>
      <Text style={styles.wellcome}>Faça o login para acessar</Text>

      <View style={styles.content}>
        <View style={styles.contentInput}>
          <EnvelopeSimple size={32} color="#757575" />
          <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            placeholderTextColor="#757575"
          />
        </View>
        <View style={styles.contentInput}>
          <LockKey size={32} color="#757575" />
          <TextInput
            placeholder="Digite sua senha"
            style={styles.input}
            placeholderTextColor="#757575"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonSingIn}>
        <Text style={styles.buttonSingInText}>Acessar</Text>
      </TouchableOpacity>

      <View style={styles.containerSeparator}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>Ou continuar com</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.buttonSingInText}>
            <GoogleLogo size={32} weight="fill" color="#FFD400" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.buttonSingInText}>
            <FacebookLogo size={32} weight="fill" color="#FFD400" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}> Não tenho conta?</Text>
        <TouchableOpacity>
          <Text style={styles.footerButtonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignSelf: "flex-start",
    marginTop: 50,
  },
  wellcome: {
    color: "#f4f4f4",
    marginTop: 50,
    fontSize: 30,
    fontWeight: 600,
  },
  content: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    gap: 20,
  },
  contentInput: {
    width: "100%",
    height: 56,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    color: "#757575",
  },
  buttonSingIn: {
    backgroundColor: "#FFD400",
    width: "100%",
    height: 56,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonSingInText: {
    color: "#1f222a",
    fontSize: 18,
    fontWeight: 500,
  },
  containerSeparator: {
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#757575",
    flex: 1,
  },
  separatorText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: 400,
  },
  footer: {
    marginTop: 50,
    flexDirection: "row",
    gap: 10,
  },
  footerButton: {
    width: 100,
    height: 60,
    backgroundColor: "#1f222a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  footerText: {
    color: "#f4f4f4",
  },
  footerButtonText: {
    color: "#FFD400",
  },
});
