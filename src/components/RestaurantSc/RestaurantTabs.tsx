import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/build/Ionicons'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { C } from '../../theme'

type Tab = 'info' | 'summary' | 'insights'

interface Props {
  activeTab: Tab
  onPress: (tab: Tab) => void
}

export default function RestaurantTabs({ activeTab, onPress }: Props) {
  const tabStyle = (tab: Tab) => [
    { flex: 1, paddingVertical: 10, alignItems: 'center' as const, justifyContent: 'center' as const, flexDirection: 'row' as const, gap: 4 },
    activeTab === tab && { borderBottomWidth: 2, borderBottomColor: '#fff', backgroundColor: 'rgba(0,0,0,0.1)' }
  ]

  const textStyle = (tab: Tab) => [
    { fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: '500' as const, fontFamily: 'Kanit_400Regular' },
    activeTab === tab && { color: '#fff', fontWeight: '700' as const }
  ]

  const iconColor = (tab: Tab) => activeTab === tab ? '#fff' : 'rgba(255,255,255,0.6)'

  const AiBadge = () => (
    <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 6, paddingHorizontal: 4, paddingVertical: 1 }}>
      <Text style={{ fontSize: 7, color: '#fff', fontWeight: '700' }}>AI</Text>
    </View>
  )

  return (
    <View style={{ flexDirection: 'row', backgroundColor: C.box }}>
      <TouchableOpacity style={tabStyle('info')} onPress={() => onPress('info')}>
        <MaterialIcons name="info" size={18} color={iconColor('info')} />
        <Text style={textStyle('info')}>ข้อมูล</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tabStyle('summary')} onPress={() => onPress('summary')}>
        <Ionicons name="sparkles" size={16} color={iconColor('summary')} />
        <Text style={textStyle('summary')}>สรุป</Text>
        <AiBadge />
      </TouchableOpacity>

      <TouchableOpacity style={tabStyle('insights')} onPress={() => onPress('insights')}>
        <Ionicons name="analytics-sharp" size={18} color={iconColor('insights')} />
        <Text style={textStyle('insights')}>วิเคราะห์</Text>
        <AiBadge />
      </TouchableOpacity>
    </View>
  )
}