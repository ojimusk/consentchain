export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 28px",
        background: "rgba(5,8,22,.75)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,.08)"
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "24px"
          }}
        >
          ConsentChain
        </h2>

        <small
          style={{
            color: "#8EA2FF"
          }}
        >
          AI Privacy Platform
        </small>
      </div>

      <button
        style={{
          padding: "12px 20px",
          borderRadius: "12px",
          border: "none",
          fontWeight: 700,
          cursor: "pointer"
        }}
      >
        Launch App
      </button>
    </header>
  );
}
