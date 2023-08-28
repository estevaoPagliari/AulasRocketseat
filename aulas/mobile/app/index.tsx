import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session'
import * as SecureStore from 'expo-secure-store'

import NwlLogo from '../src/assets/nlw-spacetime-logo.svg'

import { api } from '../src/lib/api'

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/68a32bf56d37295ca21c',
}

const StylesNwlLogo = styled(NwlLogo)

export default function App() {
  const router = useRouter()

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '68a32bf56d37295ca21c',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime',
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', {
      code,
    })
    const { token } = response.data
    console.log(token)
    await SecureStore.setItemAsync('token', token)
    router.push('/memories')
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      handleGithubOAuthCode(code)
      console.log('Sucesso')
    } else {
      console.log('Error')
    }
  }, [response])

  return (
    <View className=" flex-1 items-center px-8 py-8">
      <View className="flex-1 items-center justify-center gap-6">
        <StylesNwlLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-zinc-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-zinc-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
          onPress={() => signInWithGithub()}
        >
          <Text className=" font-alt text-sm uppercase text-black">
            COMEÇAR A CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-body text-sm leading-relaxed text-zinc-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  )
}
