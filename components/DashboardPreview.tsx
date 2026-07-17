export default function DashboardPreview() {
  return (
    <div
      style={{
        maxWidth: 340,
        margin: "60px auto 0",
        padding: 24,
        borderRadius: 24,
        background: "rgba(255,255,255,.06)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 0 40px rgba(79,124,255,.25)",
      }}
    >
      <h3 style={{ marginBottom: 20 }}>🛡 Privacy Dashboard</h3>

      <p>✅ Wallet Connected</p>
      <p>📊 Consent Score : <b>98</b></p>
      <p>💰 Rewards : <b>320 CC</b></p>
      <p>🔒 Active Permissions : <b>5</b></p>

      <div
        style={{
          marginTop: 20,
          height: 8,
          borderRadius: 99,
          background: "#1E293B",
        }}
      >
        <div
          style={{
            width: "82%",
            height: "100%",
            borderRadius: 99,
            background: "#4F7CFF",
          }}
        />
      </div>
    </div>
  );
}
