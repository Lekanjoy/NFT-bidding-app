import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";



export default function Home() {

  return (
    <main className="relative flex justify-between items-center px-2 py-3">
      <SideBar/>
      <Header/>
    </main>
    
  );
}
