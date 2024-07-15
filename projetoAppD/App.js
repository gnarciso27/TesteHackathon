import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen/MainScreen'; // Ajuste o caminho conforme necessário
import Mapa from './mapa/Mapa'; // Crie este componente
import Perfil from './perfil/perfil'; // Crie este componente
import loja from './loja/loja';

const slides = [
  {
    key: '1',
    title: 'Nome a decidir',
    text: 'Seja Bem-Vindo ao nosso App! Deslize para esquerda ou clique no botão e nos conheça melhor!',
    image: require('./assets/bv.png')
  },
  {
    key: '2',
    title: 'Quem somos',
    text: 'Nosso grupo é composto pelos alunos do IFRN Guilherme, Afonso, Patricía, Jamile e Roberto',
    image: require('./assets/IF.png')
  },
  {
    key: '3',
    title: 'O que queremos',
    text: 'Queremos uma Parnamirim melhor!',
    image: require('./assets/parna.png')
  },
];

const Tab = createBottomTabNavigator();

const App = () => {
  const [showHome, setShowHome] = useState(false);
  

  function renderSlides({ item }) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: 'blue',
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            paddingHorizontal: 25,
            fontSize: 15,
          }}>
          {item.text}
        </Text>
      </View>
    );
  }

  function handleDone() {
    setShowHome(true);
  }

  if (showHome) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Início') {
                iconName = focused
                  ? require('./assets/home.webp')
                  : require('./assets/home.webp');
              } else if (route.name === 'Mapa') {
                iconName = focused
                  ? require('./assets/loc.png')
                  : require('./assets/loc.png');
              } else if (route.name === 'Loja') {
                iconName = focused
                  ? require('./assets/carrinho.png')
                  : require('./assets/carrinho.png');
              } else if (route.name === 'Perfil') {
                iconName = focused
                  ? require('./assets/user.webp')
                  : require('./assets/user.webp');
              }

              // You can return any component that you like here!
              return <Image source={iconName} style={{ width: size, height: size }} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
            name="Início" 
            component={MainScreen} 
            options={{ headerShown: false }} 
          />
          <Tab.Screen 
            name="Mapa" 
            component={Mapa} 
            options={{ headerShown: false }} 
          />
          <Tab.Screen 
            name="Loja" 
            component={loja} 
            options={{ headerShown: false }} 
          />
          <Tab.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{ headerShown: false }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: 'blue',
          width: 30,
        }}
        renderNextButton={() => <Text style={{ fontSize: 20 }}>Próximo</Text>}
        renderDoneButton={() => <Text style={{ fontSize: 20 }}>Acessar!</Text>}
        onDone={handleDone}
      />
    );
  }
};

export default App;