import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Ionicons from '@expo/vector-icons/build/Ionicons'
import { C } from '../../theme'

interface Props {
  loading: boolean
  summary: string
}

export default function SummaryTab({ loading, summary }: Props) {
  if (loading) {
    return (
      <View style={{ padding: 32, alignItems: 'center' }}>
        <ActivityIndicator color={C.btn} />
        <Text style={{ marginTop: 10, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>AI กำลังสรุปรีวิว...</Text>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 14, padding: 14, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <Ionicons name="sparkles" size={16} color={C.btn} />
        <Text style={{ fontSize: 13, fontWeight: '700', color: C.text }}>สรุปรีวิวโดย AI</Text>
      </View>
      <Text style={{ fontSize: 13, color: C.text, lineHeight: 22 }}>{summary}</Text>
    </View>
  )
}