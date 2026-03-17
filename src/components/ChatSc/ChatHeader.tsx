import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { C } from '../../theme'

interface Props {
  restaurantName: string
  onBack: () => void
}

export default function ChatHeader({ restaurantName, onBack }: Props) {
  return (
    <View style={{ backgroundColor: C.btn, paddingHorizontal: 16, paddingTop: 48, paddingBottom: 12 }}>
      <TouchableOpacity onPress={onBack}>
        <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginBottom: 4 }}>← กลับ</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: '800', color: '#fff', fontFamily: 'PlayfairDisplay_700Bold' }}>Hungry AI</Text>
      <Text style={{ fontSize: 11, color: '#FAEEDA', marginTop: 2, fontFamily: 'Kanit_400Regular' }}>{restaurantName}</Text>
    </View>
  )
}