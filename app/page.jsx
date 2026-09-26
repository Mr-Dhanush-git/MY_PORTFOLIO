import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Navbar";
import LoadingPage from "../components/loading/LoadingPage"



export default function Home() {
  return (
    <LoadingPage> 
      <main>
          <div className="header_parent flex bg-[#FCFBFD]">
            <Header/>
            <Navbar/>
            <Hero/>
          </div>
      </main>
    </LoadingPage>
  );
}