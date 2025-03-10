import Footer from "@/components/Footer";
import Headie from "@/components/Header";

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
