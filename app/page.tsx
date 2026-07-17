export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "12px"
          }}
        >
          ConsentChain
        </h1>

        <p
          style={{
            opacity: 0.8,
            marginBottom: "30px"
          }}
        >
          Your Data, Your Rules, Your Income
        </p>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
