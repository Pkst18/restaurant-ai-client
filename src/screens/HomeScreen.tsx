import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Animated, StatusBar } from 'react-native'
import Ionicons from '@expo/vector-icons/build/Ionicons'
import { api } from '../services/api'
import { C, CATEGORIES } from '../theme'
import RestaurantCard from '../components/HomeSc/RestaurantCard'
import CategoryTabs from '../components/HomeSc/CategoryTabs'
import SearchBar from '../components/HomeSc/SearchBar'
import HeroSection from '../components/HomeSc/HeroSection'

export default function HomeScreen({ navigation }: any) {
  const [restaurants, setRestaurants] = useState<any[]>([])
  const [filtered, setFiltered] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด')
  const [hasPrompt, setHasPrompt] = useState(false)
  const [prompt, setPrompt] = useState('')
  const heroAnim = useState(new Animated.Value(1))[0]

  useEffect(() => { loadRestaurants() }, [])

  useEffect(() => {
    if (!hasPrompt) return
    let result = restaurants
    if (activeCategory !== 'ทั้งหมด') {
      result = result.filter(r => r.cuisine === activeCategory)
    }
    if (prompt.trim()) {
      result = result.filter(r =>
        r.name.includes(prompt) ||
        r.cuisine?.includes(prompt) ||
        r.address?.includes(prompt)
      )
    }
    setFiltered(result)
  }, [prompt, activeCategory, restaurants, hasPrompt])

  const loadRestaurants = async () => {
    try {
      const data = await api.getRestaurants()
      setRestaurants(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handlePrompt = () => {
    if (!search.trim()) return
    setPrompt(search)
    setSearch('')
    setHasPrompt(true)
    Animated.timing(heroAnim, { toValue: 0, duration: 350, useNativeDriver: false }).start()
  }

  const heroHeight = heroAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 420] })

  return (
    <View style={{ flex: 1, backgroundColor: C.primary, justifyContent: 'space-between' }}>
      <StatusBar barStyle="light-content" backgroundColor={C.btn} />

      <HeroSection heroHeight={heroHeight} />

      {hasPrompt && (
        <View style={{ backgroundColor: C.btn, paddingHorizontal: 16, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: '800', color: '#fff' }}>HiwRaew Ai</Text>
          <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>AI Food Guide</Text>
        </View>
      )}

      {hasPrompt && (
        <>
          <View style={{ paddingHorizontal: 12, paddingTop: 10, paddingBottom: 4 }}>
            <View style={{ backgroundColor: C.btn, borderRadius: 12, borderBottomRightRadius: 4, padding: 10, alignSelf: 'flex-end', maxWidth: '75%' }}>
              <Text style={{ fontSize: 13, color: '#fff' }}>{prompt}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 }}>
              <Ionicons name="sparkles" size={14} color="rgba(255,255,255,0.8)" />
              <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>
                {filtered.length > 0 ? `พบ ${filtered.length} ร้าน` : 'ไม่พบร้านที่ตรงกัน'}
              </Text>
            </View>
          </View>

          <FlatList
            data={filtered}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <RestaurantCard
                item={item}
                onPress={() => navigation.navigate('Restaurant', { restaurantId: item.id })}
              />
            )}
            contentContainerStyle={{ padding: 12, gap: 10 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginTop: 20, fontSize: 13 }}>
                ลองพิมพ์ชื่อร้าน ประเภทอาหาร หรือย่านที่อยู่
              </Text>
            }
          />
        </>
      )}

      <View>
        <CategoryTabs activeCategory={activeCategory} onSelect={setActiveCategory} />
        <SearchBar value={search} onChange={setSearch} onSubmit={handlePrompt} />
      </View>
    </View>
  )
}