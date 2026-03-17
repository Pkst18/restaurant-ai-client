const BASE_URL = 'http://localhost:8000'

export const api = {
  // ดึงข้อมูลร้าน
  getRestaurant: async (id: number) => {
    const res = await fetch(`${BASE_URL}/restaurants/${id}`)
    return res.json()
  },

  // สรุปรีวิว
  getSummary: async (id: number) => {
    const res = await fetch(`${BASE_URL}/restaurants/${id}/summary`)
    return res.json()
  },

  // insights
  getInsights: async (id: number) => {
    const res = await fetch(`${BASE_URL}/restaurants/${id}/insights`)
    return res.json()
  },

  // Q&A
  ask: async (id: number, question: string) => {
    const res = await fetch(`${BASE_URL}/restaurants/${id}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    })
    return res.json()
  },
  getRestaurants: async () => {
  const res = await fetch(`${BASE_URL}/restaurants/`)
  return res.json()
},
}