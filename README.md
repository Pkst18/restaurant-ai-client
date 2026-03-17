# restaurant-ai-client 
HiwRaew AI is a restaurant review analyzer that transforms real customer feedback into actionable insights using a custom-built RAG pipeline. Each review is converted into a 1536-dimension vector via OpenAI Embeddings and stored in pgvector on PostgreSQL. When a user asks a question, the system retrieves only the most semantically relevant reviews using cosine similarity search, then passes them as context to GPT-4o-mini to generate summaries, pros/cons analysis, and Q&A responses — grounded entirely in real customer data.
# Restaurant AI — Frontend

React Native (Expo) app สำหรับดูรีวิวและถามตอบเกี่ยวกับร้านอาหารด้วย AI

## Tech Stack

- **React Native** + **Expo**
- **TypeScript**
- **React Navigation**
- **Expo Vector Icons**
- **Google Fonts** (Playfair Display, Kanit)

## Screens

- **Home** — ค้นหาร้านด้วย AI prompt
- **Restaurant** — ข้อมูลร้าน + สรุป AI + วิเคราะห์รีวิว
- **Chat** — Q&A chatbot กับร้านอาหาร
