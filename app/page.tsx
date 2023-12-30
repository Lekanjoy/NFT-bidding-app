import React from 'react'
import Dashboard from "@/components/Dashboard";


 const Home: React.FC = () => {
  return (
    <main className="relative px-4 py-3 mt-[60px] lg:w-[calc(100% - 80px)] lg:ml-[80px]">
      <Dashboard />
      Hello World
    </main>
  );
}

export default Home
