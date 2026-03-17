import React from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { C } from '../../theme'

interface Props {
  heroHeight: Animated.AnimatedInterpolation<number>
}

export default function HeroSection({ heroHeight }: Props) {
  return (
    <Animated.View style={{ backgroundColor: C.primary, paddingTop: 48, height: heroHeight, overflow: 'hidden' }}>

      {/* Top bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: '800', color: '#fff' }}>HiwRaew Ai</Text>
        <TouchableOpacity style={{ width: 32, height: 32, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome name="search" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Center */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.15)', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <MaterialIcons name="restaurant" size={56} color="rgba(255,255,255,0.7)" />
        </View>
        <Text style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 10, textAlign: 'center' }}>
          YOUR AI FOOD GUIDE
        </Text>
        <Text style={{ fontSize: 28, color: '#fff', textAlign: 'center', lineHeight: 34, marginBottom: 10, fontFamily: 'PlayfairDisplay_700Bold' }}>
          What are you{'\n'}craving today?
        </Text>
        <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 18, fontFamily: 'Kanit_400Regular' }}>
          Discover restaurants, get personalized recommendations
        </Text>
      </View>
    </Animated.View>
  )
}