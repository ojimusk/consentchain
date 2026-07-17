import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "90px 24px",
      }}
    >
      {/* Glow Background */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          background: "#4F7CFF",
          filter: "blur(120px)",
          opacity: 0.25,
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            border: "1px solid rgba(255,255,255,.15)",
            borderRadius: 999,
            color: "#8EA2FF",
            fontSize: 14,
            marginBottom: 24,
            background: "rgba(255,255,255,.03)",
          }}
        >
          🚀 Powered by AI + Blockchain
        </span>

        <h1
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Own Your
          <br />
          Digital Identity
        </h1>

        <p
          style={{
            color: "#A6ACC8",
            maxWidth: 620,
            margin: "0 auto",
            fontSize: 18,
            lineHeight: 1.8,
          }}
        >
          Protect your privacy, control every permission, and earn rewards
          whenever your data is used ethically.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#fff",
              color: "#000",
              padding: "16px 34px",
              borderRadius: 14,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Launch App
          </button>

          <button
            style={{
              background: "transparent",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: 14,
              border: "1px solid #444",
              cursor: "pointer",
            }}
          >
            Watch Demo
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginTop: 34,
            flexWrap: "wrap",
            color: "#A6ACC8",
            fontSize: 14,
          }}
        >
          <span>🔒 GDPR Ready</span>
          <span>🛡 End-to-End Encryption</span>
          <span>🌍 Global Privacy</span>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
          }
