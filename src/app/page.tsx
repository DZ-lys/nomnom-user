import Footer from "@/components/Footer";
import Headie from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Headie />
      <div className="mb-20">
        <img
          src="https://res.cloudinary.com/da889nybx/image/upload/v1742432774/etdig5bkqsfxu3ib4kff.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}
