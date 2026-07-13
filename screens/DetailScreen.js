// DetailScreen.js - Muestra los detalles completos de un item seleccionado
import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route }) {
  // Recibimos el item que enviamos desde la pantalla Items
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },
  label: {
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});