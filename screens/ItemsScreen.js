// ItemsScreen.js - Pantalla que muestra la lista de items guardados
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function ItemsScreen({ navigation, items }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Listado</Text>
        
        <Pressable 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddItem')}
        >
          <Text style={styles.addButtonText}>Nuevo</Text>
        </Pressable>
      </View>

      {/* Mostramos la lista de items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { item: item })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#f5f7fb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardText: {
    color: '#555',
  },
});