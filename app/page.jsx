import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <main>
        <div className="header_parent flex bg-[#FCFBFD]">
          <Header/>
          <Navbar/>
          <Hero/>
        </div>
    </main>
  );
}