import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-[390px] bg-white shadow-lg">
        <Header />
        <main className="px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Maemuki</h1>
          <p className="text-lg text-center text-gray-600">Landing page coming soon...</p>
        </main>
      </div>
    </div>
  );
}
