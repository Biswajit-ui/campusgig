import { useState } from "react";
import PitchDeck from "./PitchDeck";
import CampusGig from "./CampusGig";

export default function App() {
  const [view, setView] = useState(null);

  if (view === "deck") return <PitchDeck />;
  if (view === "platform") return <CampusGig />;

  return (
    <div style={{
      minHeight: "100vh", background: "#0B0F1A",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 32,
      fontFamily: "'Syne', sans-serif"
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;600&display=swap');`}</style>

      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#fff",
          letterSpacing: -2, lineHeight: 1 }}>
          Campus<span style={{ color: "#E8320A" }}>Gig</span>
        </div>
        <div style={{ fontSize: 13, color: "#555", marginTop: 8,
          fontFamily: "'DM Sans', sans-serif", letterSpacing: 1 }}>
          CHOOSE WHAT TO OPEN
        </div>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <button onClick={() => setView("deck")} style={{
          background: "#E8320A", border: "none", borderRadius: 12,
          padding: "18px 36px", fontSize: 15, color: "#fff",
          cursor: "pointer", fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 6px 24px rgba(232,50,10,0.4)"
        }}>
          🎤 Pitch Deck
        </button>
        <button onClick={() => setView("platform")} style={{
          background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12, padding: "18px 36px", fontSize: 15, color: "#fff",
          cursor: "pointer", fontWeight: 700, fontFamily: "'DM Sans', sans-serif"
        }}>
          🌐 Platform UI
        </button>
      </div>
    </div>
  );
}