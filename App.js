import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Footer, Animated } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <Text style={styles.text}>First React Native</Text>
        <Text style={styles.text2}>Huỳnh Vĩnh Tiến</Text>
      </View>
      <View style={styles.container_img}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png' }}
        style={styles.image}
      />
      </View>
      <Image
        source={{ uri: 'https://cdn2.steamgriddb.com/logo_thumb/095d3681d7fdc1da4e72d354a1b6c747.png' }}
        style={styles.image_geny}
      />
      <Text style={styles.text_footer}>Đây là Project Đầu Tiên Về <Text style={styles.text_footer2}>React Native</Text> Của Tôi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
    objectFit: 'contain',
    marginTop: 50,
  },
  image_geny: {
    width: 300,
    height: 300,
    objectFit: 'contain',
    marginTop: -80,
  },
  container_img:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: -50,
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  text2:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },
  container_text:{
    marginBottom: 50,
    marginTop: 20,

  },
  text_footer:{
    marginTop: -50,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_footer2:{
    color: '#26d9fd'
  },
});
