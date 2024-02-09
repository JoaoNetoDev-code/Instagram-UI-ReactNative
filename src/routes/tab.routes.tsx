import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

import Home from '../screens/Home';
import House from '../assets/house.svg';
import Search from '../assets/search.svg';
import Union from '../assets/union.svg';
import Store from '../assets/store.svg';
import foto from '../assets/foto.png';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarShowLabel: false,
      }}
      >
      <Tab.Screen options={{
        tabBarIcon: () => <House/>,
      }} name="Home"
      component={Home}/>
      
      <Tab.Screen options={{
        tabBarIcon: () => <Search/>,
      }} name="Search"
      component={Home}/>
      <Tab.Screen options={{
        tabBarIcon: () => <Union/>,
      }} name="Union"
      component={Home}/>
      <Tab.Screen options={{
        tabBarIcon: () => <Store/>,
      }} name="Store"
      component={Home}/>
      <Tab.Screen options={{
        tabBarIcon: () => <Image source={foto} style={{width: 30, height: 30}}/>,
      }} name="Foto"
      component={Home}/>
    </Tab.Navigator>
  )
}

export default TabRoutes;
