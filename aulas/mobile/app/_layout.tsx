import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as SecureStore from 'expo-secure-store'
import { styled } from 'nativewind'

import bluBg from '../src/assets/luz.png'
import Stripes from '../src/assets/stripes.svg'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { SplashScreen, Stack } from 'expo-router'

const StylesStripes = styled(Stripes)

export default function Layout() {
  const [isUserAuthenticated, SetisUserAuthenticated] = useState<
    null | boolean
  >(null)

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      SetisUserAuthenticated(!!token)
    })
  }, [])
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  if (!hasLoadedFonts) {
    return <SplashScreen />
  }
  return (
    <ImageBackground
      source={bluBg}
      className="relative flex-1  bg-gray-900 "
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StylesStripes className="absolute left-2" />
      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  )
}
