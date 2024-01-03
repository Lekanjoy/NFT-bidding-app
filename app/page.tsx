import { Metadata } from "next";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: 'NFT-List-Bid',
  description: 'Bid for your favorite arts from different collections',
}

 const Home = () => {

  return (
    <main className="relative px-4 py-3 mt-[60px] lg:w-[calc(100% - 80px)] lg:ml-[100px]"> 
      <Dashboard />   
    </main>
  );

}

export default Home
