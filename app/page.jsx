import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Navbar";
import LoadingPage from "../components/loading/LoadingPage";
import About from "../components/about/About";




export default function Home() {
  return (
    <LoadingPage> 
      <main>
          <div className="header_parent flex bg-[#fafafa]">
            <Header/>
            <Navbar/>
            <Hero/>
          </div>

          <div className="">
            <About/>
          </div>

      </main>
    </LoadingPage>
  );
}