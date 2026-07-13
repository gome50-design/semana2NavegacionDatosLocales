// App.js - Pantalla principal que controla toda la navegación y el estado de los items
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import DetailScreen from './screens/DetailScreen';
import AddItemScreen from './screens/AddItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // useState para guardar la lista de items (datos locales)
  const [items, setItems] = useState([]);

  // Función que se llama cuando se guarda un nuevo item desde AddItemScreen
  const handleAddItem = (newItem) => {
    // Agregamos un id único usando Date.now()
    const itemWithId = {
      ...newItem,
      id: Date.now().toString(),
    };
    // Actualizamos el estado agregando el nuevo item
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Pantalla de inicio */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Pantalla de listado - le pasamos los items como prop */}
        <Stack.Screen 
          name="Items" 
          children={(props) => (
            <ItemsScreen {...props} items={items} />
          )} 
        />

        {/* Pantalla para agregar item - le pasamos la función handleAddItem */}
        <Stack.Screen 
          name="AddItem" 
          children={(props) => (
            <AddItemScreen {...props} onAddItem={handleAddItem} />
          )} 
        />

        {/* Pantalla de detalle */}
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}