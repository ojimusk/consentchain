export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "90px 24px"
      }}
    >
      <p
        style={{
          color: "#7C9CFF",
          fontWeight: 600,
          letterSpacing: 1
        }}
      >
        AI × Blockchain × Privacy
      </p>

      <h1
        style={{
          fontSize: "52px",
          fontWeight: 800,
          color: "#fff",
          marginTop: 18
        }}
      >
        Own Your Digital Identity
      </h1>

      <p
        style={{
          maxWidth: "650px",
          margin: "24px auto",
          color: "#B9C1D9",
          lineHeight: 1.8
        }}
      >
        Take back control of your personal data.
        Monitor where it goes, choose who can access it,
        and earn rewards whenever your data is used ethically.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        <button
          style={{
            padding: "14px 28px",
            borderRadius: "12px",
            border: "none",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Get Started
        </button>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "12px",
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.25)",
            cursor: "pointer"
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
