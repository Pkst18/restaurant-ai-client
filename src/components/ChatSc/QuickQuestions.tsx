import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'

const QUICK_QUESTIONS = ['อาหารอร่อยไหม?', 'ที่จอดรถมีไหม?', 'เมนูแนะนำ?', 'ต้องจองไหม?']

interface Props {
  onSelect: (q: string) => void
}

export default function QuickQuestions({ onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 8, maxHeight: 48 }}
      contentContainerStyle={{ paddingHorizontal: 12, gap: 8 }}
    >
      {QUICK_QUESTIONS.map(q => (
        <TouchableOpacity
          key={q}
          style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' }}
          onPress={() => onSelect(q)}
        >
          <Text style={{ fontSize: 11, color: '#fff', fontFamily: 'Kanit_400Regular' }}>{q}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}