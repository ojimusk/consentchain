const stats = [
  ["1M+", "Protected Users"],
  ["$12M", "Data Rewards"],
  ["99.9%", "Encrypted"],
  ["500+", "AI Partners"],
];

export default function Stats() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
        gap: "18px",
        padding: "20px 30px 50px"
      }}
    >
      {stats.map(([value, label]) => (
        <div
          key={label}
          style={{
            background: "#101828",
            borderRadius: "18px",
            padding: "24px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,.08)"
          }}
        >
          <h2 style={{ color: "#fff", margin: 0 }}>
            {value}
          </h2>

          <p style={{ color: "#8F9BB3" }}>
            {label}
          </p>
        </div>
      ))}
    </section>
  );
}
