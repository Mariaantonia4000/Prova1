import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from './styles';
import  logo  from '../assets/Image/logo.jpeg';

export function Login() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />

        <Image
        source={logo}
        style={styles.logo}
        />

        <TextInput
        placeholder="Celular, username ou email"
        style={styles.input}
        />
         <TextInput
        placeholder="Sua senha"
        style={styles.input}
        />

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookContainer}>
          <FontAwesome5 name="facebook" size={25} color="#399fff" />
          <Text style={styles.facebookText}>Continue como Maria</Text>
        </TouchableOpacity>

    <View style={styles.divisor}>
      <View style={styles.divisorLine}></View>
      <Text style={{ marginHorizontal: '3%' }} >OU</Text>
      <View style={styles.divisorLine}></View>
    </View>

    <View style={styles.signUpContainer}>
      <Text style={styles.signUpText}>Não possui um conta?</Text>
      <TouchableOpacity>
      <Text style={styles.sigUpButton}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}