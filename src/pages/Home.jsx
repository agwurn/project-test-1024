import Banner from "../components/Banner";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="">
        <Banner/>
        <Main/>
      </div>
    </div>
  )
}
