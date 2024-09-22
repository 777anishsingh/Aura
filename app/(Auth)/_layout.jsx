import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="Sign-in"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Sign-up"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
            <StatusBar backgroundColor='#161622' style='light' />
        </>
    )
}

export default AuthLayout