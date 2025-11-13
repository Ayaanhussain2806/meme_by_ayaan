import React, { useState } from "react";
import Header from "./Components/Header";
import Apicalling from "./Components/Apicalling";
import Footer from "./Components/Footer";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header search={search} setSearch={setSearch} />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Apicalling search={search} />
      </main>

      <Footer />
    </div>
  );
}
