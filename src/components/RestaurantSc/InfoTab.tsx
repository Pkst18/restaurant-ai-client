import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/build/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import Ionicons from '@expo/vector-icons/build/Ionicons'
import { C } from '../../theme'

interface Props {
  restaurant: any
  onChatPress: () => void
}

export default function InfoTab({ restaurant, onChatPress }: Props) {
  return (
    <View>
      <View style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 14, padding: 14, marginBottom: 10 }}>
        <Text style={{ fontSize: 13, fontWeight: '700', color: C.text, marginBottom: 10, fontFamily: 'Kanit_400Regular' }}>ข้อมูลร้าน</Text>

        <InfoRow icon={<FontAwesome name="phone" size={20} color={C.primary} />} text={restaurant?.phone} />
        <InfoRow icon={<FontAwesome name="map-marker" size={22} color={C.primary} />} text={restaurant?.address} />
        <InfoRow icon={<FontAwesome5 name="money-bill-wave" size={18} color={C.primary} />} text={`${restaurant?.price_min} - ${restaurant?.price_max} บาท`} />
        <InfoRow icon={<FontAwesome5 name="parking" size={20} color={C.primary} />} text={restaurant?.parking || 'ไม่มีข้อมูล'} />
        <InfoRow icon={<FontAwesome5 name="calendar-check" size={18} color={C.primary} />} text={restaurant?.has_reservation ? 'รับจองโต๊ะ' : 'ไม่รับจอง'} />
        <InfoRow icon={<FontAwesome5 name="concierge-bell" size={18} color={C.primary} />} text={restaurant?.service_charge ? 'มี service charge' : 'ไม่มี service charge'} />
        {restaurant?.delivery?.length > 0 && (
          <InfoRow icon={<MaterialIcons name="delivery-dining" size={24} color={C.primary} />} text={restaurant.delivery.join(', ')} />
        )}
      </View>

      {restaurant?.story && (
        <View style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 14, padding: 14, marginBottom: 10 }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: C.text, marginBottom: 10, fontFamily: 'Kanit_400Regular' }}>เรื่องราวร้าน</Text>
          <Text style={{ fontSize: 13, color: C.muted, lineHeight: 20, fontFamily: 'Kanit_400Regular' }}>{restaurant.story}</Text>
        </View>
      )}

      <TouchableOpacity
        style={{ backgroundColor: C.btn, borderRadius: 16, padding: 14, alignItems: 'center', marginBottom: 10, flexDirection: 'row', gap: 8, justifyContent: 'center' }}
        onPress={onChatPress}
      >
        <Ionicons name="chatbubble-ellipses" size={18} color="#fff" />
        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', fontFamily: 'Kanit_400Regular' }}>ถามเกี่ยวกับร้านนี้</Text>
      </TouchableOpacity>

      <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 12, padding: 12, alignItems: 'center', flexDirection: 'row', gap: 6, justifyContent: 'center' }}>
        <Ionicons name="sparkles" size={14} color="rgba(255,255,255,0.85)" />
        <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: 'Kanit_400Regular' }}>
          กด "สรุป AI" หรือ "วิเคราะห์" เพื่อดูข้อมูลเชิงลึก
        </Text>
      </View>
    </View>
  )
}

function InfoRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <View style={{ width: 24, alignItems: 'center' }}>{icon}</View>
      <Text style={{ fontSize: 14, color: C.muted, flex: 1, fontFamily: 'Kanit_400Regular' }}>{text}</Text>
    </View>
  )
}