import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24 px-4 sm:px-14 lg:px-18">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[80vh] border rounded-lg overflow-hidden shadow">
            <iframe
              src="http://143.198.234.95/organization"
              className="w-full h-full border-none"
              title="Recursos del Sistema"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
