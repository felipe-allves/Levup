import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home/indexHome'
import User from '../pages/user/indexUser'
import Settings from '../pages/settings/indexSettings'
import CustomTabBar from '../components/customTabBar/indexCustomTabBar'
import Sequence from '../pages/sequence/indexSequence'
import { BottomTabParamList } from '../global/navigation'

const Tab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomRoutes() {
  return (
    <Tab.Navigator id='bottom' screenOptions={{headerShown:false}} tabBar={pros=><CustomTabBar {...pros}/>}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sequence" component={Sequence} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}