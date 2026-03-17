import React, { useState } from 'react'
import { View, Image, ActivityIndicator, ScrollView, StatusBar } from 'react-native'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { api } from '../services/api'
import { C } from '../theme'
import RestaurantHeader from '../components/RestaurantSc/RestaurantHeader'
import RestaurantTabs from '../components/RestaurantSc/RestaurantTabs'
import InfoTab from '../components/RestaurantSc/InfoTab'
import SummaryTab from '../components/RestaurantSc/SummaryTab'
import InsightsTab from '../components/RestaurantSc/InsightsTab'

type Tab = 'info' | 'summary' | 'insights'

export default function RestaurantScreen({ navigation, route }: any) {
  const restaurantId = route.params?.restaurantId ?? 1
  const [restaurant, setRestaurant] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<Tab>('info')
  const [summary, setSummary] = useState<string>('')
  const [insights, setInsights] = useState<any>(null)
  const [loadingSummary, setLoadingSummary] = useState(false)
  const [loadingInsights, setLoadingInsights] = useState(false)
  const [loadingRestaurant, setLoadingRestaurant] = useState(true)

  React.useEffect(() => { loadRestaurant() }, [])

  const loadRestaurant = async () => {
    try {
      const data = await api.getRestaurant(restaurantId)
      setRestaurant(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingRestaurant(false)
    }
  }

  const handleTabPress = async (tab: Tab) => {
    setActiveTab(tab)
    if (tab === 'summary' && !summary) {
      setLoadingSummary(true)
      try {
        const data = await api.getSummary(restaurantId)
        setSummary(data.summary)
      } finally {
        setLoadingSummary(false)
      }
    }
    if (tab === 'insights' && !insights) {
      setLoadingInsights(true)
      try {
        const data = await api.getInsights(restaurantId)
        setInsights(data)
      } finally {
        setLoadingInsights(false)
      }
    }
  }

  if (loadingRestaurant) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: C.primary }}>
        <ActivityIndicator size="large" color={C.btn} />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: C.primary }}>
      <StatusBar barStyle="light-content" backgroundColor={C.btn} />

      <RestaurantHeader restaurant={restaurant} onBack={() => navigation.goBack()} />

      {restaurant?.image_url ? (
        <Image source={{ uri: restaurant.image_url }} style={{ width: '100%', height: 180 }} resizeMode="cover" />
      ) : (
        <View style={{ width: '100%', height: 180, backgroundColor: C.box, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="restaurant-menu" size={64} color="rgba(255,255,255,0.4)" />
        </View>
      )}

      <RestaurantTabs activeTab={activeTab} onPress={handleTabPress} />

      <ScrollView style={{ flex: 1, padding: 12 }} showsVerticalScrollIndicator={false}>
        {activeTab === 'info' && (
          <InfoTab
            restaurant={restaurant}
            onChatPress={() => navigation.navigate('Chat', { restaurantId, restaurantName: restaurant?.name })}
          />
        )}
        {activeTab === 'summary' && <SummaryTab loading={loadingSummary} summary={summary} />}
        {activeTab === 'insights' && <InsightsTab loading={loadingInsights} insights={insights} />}
        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  )
}