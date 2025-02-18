import Headie from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Headie />
      <div className="mb-20">
        <img src="home-main.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}
