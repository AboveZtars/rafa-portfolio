import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <Chat />
      </main>
      <Footer />
    </div>
  );
}
