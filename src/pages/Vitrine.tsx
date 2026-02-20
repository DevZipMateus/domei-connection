import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      {/* Spacer for fixed header (h-20 = 80px) */}
      <div className="h-20 shrink-0" />
      {/* iframe fills remaining space minus 63px badge */}
      <iframe
        src="https://domei.egestor.com.br/vitrine/"
        title="Demonstração de Vitrine"
        className="w-full border-none flex-1"
        style={{ height: "calc(100vh - 80px - 63px)" }}
        allowFullScreen
      />
    </div>
  );
};

export default Vitrine;
