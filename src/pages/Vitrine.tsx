import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) badge.style.display = "none";
    return () => {
      if (badge) badge.style.display = "";
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      <div className="h-20 shrink-0" />
      <iframe
        src="https://domei.egestor.com.br/vitrine/"
        title="Demonstração de Vitrine"
        className="w-full border-none flex-1"
        style={{ height: "calc(100vh - 80px)" }}
        allowFullScreen
      />
    </div>
  );
};

export default Vitrine;
