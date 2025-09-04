import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importe os componentes de tela
import FlatListScreen from './scroll/FlatListScreen';
import FormScreen from './scroll/FormScreen';
import SectionListScreen from './scroll/SectionListScreen';

const Tab = createBottomTabNavigator();

const ScrollScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Lista') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'Seção') {
                        iconName = focused ? 'layers' : 'layers-outline';
                    } else if (route.name === 'Formulário') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Lista" component={FlatListScreen} />
            <Tab.Screen name="Seção" component={SectionListScreen} />
            <Tab.Screen name="Formulário" component={FormScreen} />
        </Tab.Navigator>
    );
}

export default ScrollScreen;