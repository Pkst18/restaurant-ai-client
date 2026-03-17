import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { C } from '../../theme'

interface Props {
  loading: boolean
  insights: any
}

export default function InsightsTab({ loading, insights }: Props) {
  if (loading) {
    return (
      <View style={{ padding: 32, alignItems: 'center' }}>
        <ActivityIndicator color={C.btn} />
        <Text style={{ marginTop: 10, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>AI กำลังวิเคราะห์...</Text>
      </View>
    )
  }

  if (!insights) return null

  return (
    <View>
      <InsightSection icon="check-circle" iconColor="#4CAF50" title="ข้อดี" items={insights.pros} />
      <InsightSection icon="cancel" iconColor="#F44336" title="ข้อเสีย" items={insights.cons} />
      <InsightSection icon="restaurant" iconColor={C.btn} title="เมนูยอดนิยม" items={insights.popular_menus} />
    </View>
  )
}

function InsightSection({ icon, iconColor, title, items }: any) {
  return (
    <View style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 14, padding: 14, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <MaterialIcons name={icon} size={18} color={iconColor} />
        <Text style={{ fontSize: 13, fontWeight: '700', color: C.text }}>{title}</Text>
      </View>
      {items?.map((item: string, i: number) => (
        <Text key={i} style={{ fontSize: 13, color: C.text, marginBottom: 6, lineHeight: 18 }}>• {item}</Text>
      ))}
    </View>
  )
}