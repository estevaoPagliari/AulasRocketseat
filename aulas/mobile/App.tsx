import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import bluBg from './src/assets/luz.png'

import Stripes from './src/assets/stripes.svg'
import NwlLogo from './src/assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind'

const StylesStripes = styled(Stripes)
const StylesNwlLogo = styled(NwlLogo)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    <ImageBackground
      source={bluBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-8"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StylesStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <StylesNwlLogo />
        <View className="space-y-2">
          <Text className="font-title text-center text-2xl leading-tight text-zinc-50">
            Sua cápsula do tempo
          </Text>
          <Text className="font-body text-center text-base leading-relaxed text-zinc-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className=" font-alt text-sm uppercase text-black">
            COMEÇAR A CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-body text-sm leading-relaxed text-zinc-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <StatusBar style="auto" translucent />
    </ImageBackground>
  )
}
