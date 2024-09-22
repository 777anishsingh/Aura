import { Image, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { images } from '../../constants'
import FormField from '../../Components/FormField'
import { useState } from 'react'
import CustomButton from '../../Components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
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

            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold"> Sign un to Aura</Text>
          </View>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({
              ...form,
              username: e
            })}
            otherStyles="mt-10"
          />

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
              Have an Account already ?
            </Text>
            <Link href="/Sign-in"
              className='text-lg font-psemibold text-secondary'>
              Sign-in
            </Link>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp