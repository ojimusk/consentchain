type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "20px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,.08)"
      }}
    >
      <h3
        style={{
          color: "#fff",
          marginBottom: "12px"
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#A8B0C7",
          lineHeight: 1.7
        }}
      >
        {description}
      </p>
    </div>
  );
}
