import Banner from "../components/Banner";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:min-w-[345px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-30">
        <Navbar/>
      </div>
      <div className="w-auto">
        <Banner/>
        <Main/>
      </div>
    </div>
  )
}
