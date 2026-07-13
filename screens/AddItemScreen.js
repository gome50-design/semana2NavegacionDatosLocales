// AddItemScreen.js - Crear y Editar items
import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { createItem, updateItem } from "../services/api";

export default function AddItemScreen({ navigation, route }) {
  const itemToEdit = route.params?.item; // Si viene un item, estamos editando

  const [title, setTitle] = useState(itemToEdit ? itemToEdit.title : '');
  const [description, setDescription] = useState(itemToEdit ? itemToEdit.description : '');
  const [loading, setLoading] = useState(false);

  const isEditing = !!itemToEdit;

  async function handleSave() {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    try {
      setLoading(true);

      if (isEditing) {
        // Modo edición
        await updateItem(itemToEdit.id, {
          title: title.trim(),
          description: description.trim(),
        });
        Alert.alert("Éxito", "Item actualizado correctamente");
      } else {
        // Modo creación
        await createItem({
          title: title.trim(),
          description: description.trim(),
        });
        Alert.alert("Éxito", "Item creado correctamente");
      }

      navigation.goBack();

    } catch (error) {
      Alert.alert("Error", isEditing ? "No se pudo actualizar el item" : "No se pudo crear el item");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Revisar proyecto"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe el elemento"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Pressable 
        style={[styles.button, loading && { opacity: 0.6 }]} 
        onPress={handleSave}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Guardando..." : isEditing ? "Actualizar" : "Guardar"}
        </Text>
      </Pressable>
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
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});