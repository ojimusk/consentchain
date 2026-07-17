import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#050816,#0B1227)"
      }}
    >
      <Navbar />

      <Hero />

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          padding: "40px"
        }}
      >
        <FeatureCard
          title="🛡 AI Sentinel"
          description="Monitor data leaks across the web with AI-powered scanning."
        />

        <FeatureCard
          title="💰 Monetize Your Data"
          description="Earn rewards whenever companies request ethical access to your data."
        />

        <FeatureCard
          title="🔐 Smart Consent"
          description="Approve, reject, or revoke data permissions with one tap."
        />
      </section>
    </main>
  );
}
