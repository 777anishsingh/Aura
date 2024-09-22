import { Image, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { images } from '../../constants'
import FormField from '../../Components/FormField'
import { useState } from 'react'
import CustomButton from '../../Components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => { }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[82vh] px-4">

          <View className="items-center">
            <Image source={images.logo}
              resizeMode='contain' className="w-[115px] h-[35px]" />

            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold"> Log in to Aura</Text>
          </View>


          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })}
            otherStyles="mt-7"
            keyboardTypes="email-Address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign-in"
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2 mt-3">
            <Text className="text-lg text-green-100 font-pregular">
              Don't have an Account ?
            </Text>
            <Link href="/Sign-up"
              className='text-lg font-psemibold text-secondary'>
              Sign-up
            </Link>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn