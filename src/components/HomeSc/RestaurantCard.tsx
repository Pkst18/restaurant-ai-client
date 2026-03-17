import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { C } from '../../theme'

interface Props {
  item: any
  onPress: () => void
}


export default function RestaurantCard({ item, onPress }: Props) {
  return (
  <TouchableOpacity
      style={{ backgroundColor: C.white, borderRadius: 14, overflow: 'hidden', elevation: 2 }}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {item.image_url ? (
        <Image source={{ uri: item.image_url }} style={{ width: '100%', height: 130 }} resizeMode="cover" />
      ) : (
        <View style={{ width: '100%', height: 130, backgroundColor: C.box, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="restaurant-menu" size={48} color="rgba(255,255,255,0.4)" />
        </View>
      )}
      <View style={{ padding: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: C.text, flex: 1, marginRight: 8, fontFamily: 'PlayfairDisplay_700Bold' }} numberOfLines={1}>{item.name}</Text>
          <View style={{ backgroundColor: C.tag, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 }}>
            <Text style={{ fontSize: 10, color: C.tagText, fontWeight: '600', fontFamily: 'Kanit_400Regular' }}>{item.cuisine}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 2 }}>
          <Text style={{ fontSize: 11, color: C.muted, marginTop: 2,  }}><FontAwesome name="map-marker" size={24} color={C.primary}/> </Text> <Text style={{ marginLeft: 12, fontSize: 14, color: C.muted, marginTop: 2, fontFamily: 'Kanit_400Regular' }}>{item.address}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 2 }}>
          <Text style={{ fontSize: 11, color: C.muted, marginTop: 2,}}><FontAwesome5 name="money-bill-wave" size={20} color={C.primary} /> </Text><Text style={{ marginLeft: 3, fontSize: 14, color: C.muted, marginTop: 2, fontFamily: 'Kanit_400Regular' }}>{item.price_min} - {item.price_max} บาท</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 2 }}>
          <Text style={{ fontSize: 11, color: C.muted, marginTop: 2,  }}><MaterialIcons name="delivery-dining" size={28} color={C.primary} /> </Text><Text style={{ marginLeft: 2, fontSize: 14, color: C.muted, marginTop: 2, fontFamily: 'Kanit_400Regular' }}>{item.delivery.join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}