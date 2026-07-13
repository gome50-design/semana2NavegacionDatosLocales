// DetailScreen.js - Muestra el detalle y permite editar o eliminar
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { deleteItem } from "../services/api";

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  // Función para ir a editar
  const handleEdit = () => {
    navigation.navigate('AddItem', { item: item });
  };

  // Función para eliminar
  const handleDelete = () => {
    Alert.alert(
      "Eliminar item",
      "¿Estás seguro de que quieres eliminar este item?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteItem(item.id);
              Alert.alert("Éxito", "Item eliminado correctamente");
              navigation.goBack(); // Regresamos al listado
            } catch (error) {
              Alert.alert("Error", "No se pudo eliminar el item");
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </Pressable>
      </View>
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
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#dc2626',
    padding: 14,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});