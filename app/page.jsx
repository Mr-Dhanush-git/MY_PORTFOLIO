import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <main>
        <div className="header_parent flex">
          <Header/>
        <Navbar/>
        </div>
    </main>
  );
}