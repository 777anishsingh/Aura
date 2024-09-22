import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { images } from '../constants';
import CustomButton from '../Components/CustomButton';
import 'react-native-url-polyfill/auto'

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full items-center min-h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'
                    />

                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className="text-3xl text-white font-bold text-center">
                            <Text className="text-secondary-200">Discover{' '}</Text>
                            Endless Possibilities{' '}
                            <Text className="text-secondary-200">Aura</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className="text-sm text-gray-100 mt-7 text-center">
                        Where Creativity meets innovation: embark on a journey of limitless exploration Aura
                    </Text>
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => { router.push('/Sign-in') }}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    )
}
