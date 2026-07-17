export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 32px",
        position: "sticky",
        top: 0,
        background: "rgba(5,8,22,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "22px"
        }}
      >
        ConsentChain
      </h2>

      <button
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontWeight: 600
        }}
      >
        Launch App
      </button>
    </header>
  );
}
