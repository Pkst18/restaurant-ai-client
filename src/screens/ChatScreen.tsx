import React, { useState, useRef } from 'react'
import { View, ScrollView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import { api } from '../services/api'
import { C } from '../theme'
import ChatHeader from '../components/ChatSc/ChatHeader'
import ChatBubble from '../components/ChatSc/ChatBubble'
import QuickQuestions from '../components/ChatSc/QuickQuestions'
import ChatInput from '../components/ChatSc/ChatInput'

interface Message {
  role: 'user' | 'ai'
  text: string
}

export default function ChatScreen({ navigation, route }: any) {
  const restaurantId = route.params?.restaurantId ?? 1
  const restaurantName = route.params?.restaurantName ?? 'ร้านอาหาร'
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: `สวัสดีครับ! มีอะไรอยากถามเกี่ยวกับ ${restaurantName} ไหมครับ?` }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<ScrollView>(null)

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const question = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: question }])
    setLoading(true)
    scrollRef.current?.scrollToEnd({ animated: true })

    try {
      const data = await api.ask(restaurantId, question)
      setMessages(prev => [...prev, { role: 'ai', text: data.answer }])
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: 'เกิดข้อผิดพลาด ลองใหม่อีกครั้ง' }])
    } finally {
      setLoading(false)
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100)
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: C.primary }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor={C.btn} />

      <ChatHeader restaurantName={restaurantName} onBack={() => navigation.goBack()} />

      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} />
        ))}
        {loading && <ChatBubble role="ai" loading />}
      </ScrollView>

      <QuickQuestions onSelect={setInput} />
      <ChatInput value={input} onChange={setInput} onSend={sendMessage} loading={loading} />
    </KeyboardAvoidingView>
  )
}