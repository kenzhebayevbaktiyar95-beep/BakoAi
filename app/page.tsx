// app/page.tsx — BAKOAI ФИНАЛ
"use client"
import { useState } from "react"

export default function Home() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div style={{background:"#f8f9ff", minHeight:"100vh", fontFamily:"system-ui"}}>
      {/* HEADER — ТЕК BAKOAI */}
      <header style={{display:"flex", justifyContent:"space-between", padding:"15px 20px", background:"white", borderBottom:"1px solid #eee"}}>
        <div>
          <h1 style={{margin:0, fontSize:"22px"}}>BakoAI 🤖</h1>
          <p style={{margin:0, fontSize:"12px", color:"gray"}}>Қандыағаштан шыққан тұңғыш AI</p>
        </div>
        <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
          <span style={{fontSize:"12px", color:"green"}}>🟢 1,247 онлайн</span>
          <button onClick={()=>setShowSettings(true)} style={{fontSize:"20px", border:"none", background:"none"}}>⚙️</button>
        </div>
      </header>

      {/* MAIN — ТЕК BAKOAI ЧАТЫ */}
      <main style={{maxWidth:"600px", margin:"40px auto", textAlign:"center", padding:"20px"}}>
        <img src="/avatar.png" style={{width:"90px", borderRadius:"50%"}} />
        <h2>Сәлем! Мен BakoAI-мын 👋</h2>
        <p style={{color:"gray"}}>Сұрағыңды жаз, Қандыағаштың жігіті жауап береді!</p>
        
        <div style={{background:"white", borderRadius:"15px", padding:"20px", marginTop:"20px", boxShadow:"0 2px 10px #0001"}}>
          <input placeholder="BakoAI-ға жаз..." style={{width:"80%", padding:"12px", borderRadius:"10px", border:"1px solid #ddd"}} />
          <button style={{padding:"12px 20px", background:"#0066ff", color:"white", border:"none", borderRadius:"10px", marginLeft:"10px"}}>Жіберу</button>
        </div>
      </main>

      {/* SETTINGS — ІШІНДЕ БАСҚА AI-лар */}
      {showSettings && (
        <div style={{position:"fixed", top:0, left:0, width:"100%", height:"100%", background:"#0006", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div style={{background:"white", padding:"25px", borderRadius:"15px", width:"90%", maxWidth:"400px"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <h3 style={{margin:0}}>⚙️ Настройка</h3>
              <button onClick={()=>setShowSettings(false)} style={{border:"none", background:"none", fontSize:"18px"}}>✖️</button>
            </div>
            
            <hr style={{margin:"15px 0"}} />
            <p style={{fontSize:"13px", color:"gray"}}>BakoAI ішінде жұмыс істейтін құралдар:</p>
            
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
              <div style={{padding:"10px", background:"#f5f5ff", borderRadius:"10px"}}>🎬 Видео — Higgsfield арқылы</div>
              <div style={{padding:"10px", background:"#f5f5ff", borderRadius:"10px"}}>💬 Чат — ChatGPT күшімен</div>
              <div style={{padding:"10px", background:"#f5f5ff", borderRadius:"10px"}}>🔍 Іздеу — Gemini арқылы</div>
              <div style={{padding:"10px", background:"#f5f5ff", borderRadius:"10px"}}>🎨 Сурет — Flux арқылы</div>
            </div>

            <hr style={{margin:"15px 0"}} />
            <h4 style={{margin:"5px 0"}}>🌍 Тіл</h4>
            <p style={{fontSize:"12px"}}>Қазақша • Русский • English • Türkçe • Deutsch • العربية</p>
            <p style={{fontSize:"11px", color:"gray", marginTop:"15px"}}>© 2026 BakoAI — Қандыағаш</p>
          </div>
        </div>
      )}
    </div>
  )
}
