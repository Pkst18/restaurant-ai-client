import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { C } from '../../theme'

interface Props {
  value: string
  onChange: (text: string) => void
  onSend: () => void
  loading: boolean
}

export default function ChatInput({ value, onChange, onSend, loading }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 12, backgroundColor: C.box, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 8, gap: 8 }}>
      <TextInput
        style={{ flex: 1, fontSize: 13, color: '#fff', maxHeight: 80, fontFamily: 'Kanit_400Regular' }}
        value={value}
        onChangeText={onChange}
        placeholder="ถามเกี่ยวกับร้านนี้..."
        placeholderTextColor="rgba(255,255,255,0.5)"
        onSubmitEditing={onSend}
        multiline
      />
      <TouchableOpacity
        style={[{ width: 32, height: 32, backgroundColor: C.btn, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }, loading && { opacity: 0.5 }]}
        onPress={onSend}
        disabled={loading}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>→</Text>
      </TouchableOpacity>
    </View>
  )
}