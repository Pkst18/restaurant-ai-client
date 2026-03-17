import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { C } from '../../theme'

interface Props {
  role: 'user' | 'ai'
  text?: string
  loading?: boolean
}

export default function ChatBubble({ role, text, loading }: Props) {
  const isUser = role === 'user'

  return (
    <View style={[
      { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
      isUser ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }
    ]}>
      {!isUser && (
        <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.9)', alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="smart-toy" size={16} color={C.btn} />
        </View>
      )}
      <View style={[
        { maxWidth: '75%', padding: 12, borderRadius: 16 },
        isUser
          ? { backgroundColor: C.btn, borderBottomRightRadius: 4 }
          : { backgroundColor: 'rgba(255,255,255,0.92)', borderBottomLeftRadius: 4, minWidth: 48, minHeight: 40, justifyContent: 'center' }
      ]}>
        {loading
          ? <ActivityIndicator size="small" color={C.btn} />
          : <Text style={[{ fontSize: 13, lineHeight: 20 }, isUser ? { color: '#fff' } : { color: C.text }]}>
              {text}
            </Text>
        }
      </View>
    </View>
  )
}