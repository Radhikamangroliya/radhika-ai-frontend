# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🚀 Radhika AI — Personal AI Assistant

A modern, full-stack AI portfolio featuring an intelligent chatbot that answers questions about Radhika Mangroliya’s experience, projects, skills, and internships.
Built with a responsive React frontend and a lightweight FastAPI backend powered by OpenAI GPT-4.1.

📐 3D High-Level Architecture Diagram

                                 ┌──────────────────────────────────────────┐
                                 │              React Frontend              │
                                 │  (ChatWidget.jsx • Floating Assistant)   │
                                 └────────────▲─────────────────────────────┘
                                              │ axios POST /ask
                                              │
                                              ▼
     ┌────────────────────────────────────────────────────────────────────────────┐
     │                     🟦  FASTAPI BACKEND (API LAYER — 3D BOX)               │
     │────────────────────────────────────────────────────────────────────────────│
     │   • Receives question from ChatWidget                                      │
     │   • Builds instruction + context prompt                                    │
     │   • Calls OpenAI GPT-4.1 model                                             │
     │   • Returns formatted JSON response back to frontend                       │
     └───────────────▲────────────────────────────────────────────────────────────┘
                     │  OpenAI API Call
                     ▼
     ┌────────────────────────────────────────────────────────────────────────────┐
     │                       🟩  OPENAI GPT-4.1 MODEL (AI LAYER)                   │
     │────────────────────────────────────────────────────────────────────────────│
     │   • Processes user question                                                 │
     │   • Generates Radhika-specific structured answer                            │
     │   • Sends back completion text                                              │
     └────────────────────────────────────────────────────────────────────────────┘

                                 ◄──────── JSON Answer Back ────────►

✅ 3D Version (Layered Architecture Style)

A more 3D-layered architecture representation:

┌─────────────────────────────────────────────────────────────────────────────┐
│                                FRONTEND LAYER                               │
│─────────────────────────────────────────────────────────────────────────────│
│  React (Vite) App                                                           │
│  - ChatWidget (floating AI assistant)                                       │
│  - Axios POST /ask                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
                       ▲
                       │   JSON payload (question)
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                                API LAYER (3D BOX)                           │
│─────────────────────────────────────────────────────────────────────────────│
│  FastAPI Backend                                                            │
│  - /ask endpoint                                                            │
│  - CORS Middleware                                                          │
│  - Pydantic request validation                                              │
│  - Calls OpenAI GPT-4.1                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
                       ▲
                       │   Model Request
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           AI MODEL LAYER (3D BLOCK)                         │
│─────────────────────────────────────────────────────────────────────────────│
│  OpenAI GPT-4.1                                                             │
│  - Prompt processing                                                         │
│  - Generates answer                                                          │
│  - Sends back structured completion                                          │
└─────────────────────────────────────────────────────────────────────────────┘
                       ▲
                       │   JSON Answer
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                               RETURN TO FRONTEND                            │
│─────────────────────────────────────────────────────────────────────────────│
│  ChatWidget updates UI                                                      │
│  Displays AI bubble with response                                           │
└─────────────────────────────────────────────────────────────────────────────┘



🔄 How the System Works (Flow Explanation)
1️⃣ User interacts with ChatWidget

A floating “💬” bubble is visible on every page.

Clicking it opens the mini chat window.

The user types a question like “What skills does Radhika have?”

2️⃣ Frontend sends request to FastAPI
POST http://your-domain.com/ask
{
  "question": "What skills does Radhika have?"
}
3️⃣ FastAPI processes the request

Validates input

Builds a customized prompt

Sends request to OpenAI GPT-4.1

4️⃣ GPT-4.1 generates an intelligent response

Model analyses question

Produces Radhika-focused answer

Returns clean JSON text

5️⃣ Backend returns formatted response

FastAPI sends back {"answer": "..."}

ChatWidget displays AI message bubble

✅ Entire flow is under 500ms–1s depending on model & deployment.

🏗 Backend Structure (FastAPI)

backend/
│── main.py               → FastAPI app & /ask endpoint
│── model.py              → OpenAI GPT-4.1 call logic
│── schemas.py            → Pydantic request/response models
│── routers/
│     └── chat.py         → Chat-specific route
│── .env                  → API keys
│── requirements.txt      → Dependencies

main.py

from fastapi import FastAPI
from routers.chat import router as chat_router

app = FastAPI()
app.include_router(chat_router)

chat.py

@router.post("/ask")
async def ask_question(payload: Question):
    response = call_openai(payload.question)
    return {"answer": response}

🧰 Technology Stack
✅ Frontend

React + Vite

Floating chat widget

React Markdown renderer

Axios for API calls

Global neon UI theme

✅ Backend

FastAPI

Pydantic

Uvicorn

CORS middleware

dotenv for secrets

✅ AI Model

OpenAI GPT-4.1 / GPT-4.1-mini
(fast, cheap, perfect for portfolio)

✅ Deployment

Frontend → Netlify / Vercel

Backend → Render / Railway / AWS

SSL via reverse proxy (NGINX optional)

🔐 Security Architecture
✅ 1. Environment Isolation

API keys stored in .env

Never exposed to frontend

✅ 2. Rate Limiting (Recommended)

Using FastAPI middleware or reverse proxy:

20 requests/min per IP

✅ 3. CORS

Restrict backend to only your frontend domain:

origins = ["https://radhika-ai.com"]

✅ 4. Input Sanitization

Pydantic validation

Trim/strip/limit message sizes

✅ 5. Model Safety

Use OpenAI safety filters

Remove harmful or irrelevant outputs

✅ 6. Optional:

JWT if admin portal added

Request logging & monitoring

☁️ Deployment Architecture

                         ┌───────────────────────────┐
                         │      Netlify / Vercel      │
                         │   React Frontend Hosting   │
                         └──────────────▲─────────────┘
                                        │
                                        │ HTTPS
                                        ▼
                         ┌───────────────────────────┐
                         │      Render / Railway      │
                         │  FastAPI Backend Hosting   │
                         │  Uvicorn + Gunicorn        │
                         └──────────────▲─────────────┘
                                        │
                                        │ API Call
                                        ▼
                         ┌───────────────────────────┐
                         │        OpenAI Cloud       │
                         │       GPT-4.1 Model       │
                         └───────────────────────────┘
✅ Fully serverless compatible
✅ Low latency
✅ Auto-scales automatically