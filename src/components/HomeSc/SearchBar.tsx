import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { C } from '../../theme'

interface Props {
  value: string
  onChange: (text: string) => void
  onSubmit: () => void
}

export default function SearchBar({ value, onChange, onSubmit }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 12, backgroundColor: C.box, borderRadius: 28, paddingHorizontal: 16, paddingVertical: 10 }}>
      <TextInput
        style={{ flex: 1, fontSize: 13, color: '#fff', fontFamily: 'Kanit_400Regular' }}
        placeholder="restaurants, dishes, cuisines..."
        placeholderTextColor="rgba(255,255,255,0.55)"
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity
        style={{ width: 28, height: 28, backgroundColor: C.btn, borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        onPress={onSubmit}
      >
        <AntDesign name="plus-circle" size={24} color="rgba(255,255,255,0.81)" />
      </TouchableOpacity>
    </View>
  )
}