import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">

      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-5 h-5"
      />

      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
        {name}
      </Text>

    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor:'#FFA001',
          tabBarInactiveTintColor:'#CDCDE0',
          tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:4,
            borderTopColor:'#232533',
            height:84,
          }
        }}
      >
        {/* Home Button */}
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        {/* Bookmark Button */}
        <Tabs.Screen
          name='Bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            )
          }}
        />

        {/* Create */}
        <Tabs.Screen
          name='Create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            )
          }}
        />

        {/* Profile Button */}
        <Tabs.Screen
          name='Profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />

        {/* About */}
        <Tabs.Screen
          name='About'
          options={{
            title: 'About',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.about}
                color={color}
                name="About"
                focused={focused}
              />
            )
          }}
        />

      </Tabs>
    </>
  )
}

export default TabsLayout