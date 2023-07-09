import { Nav } from "./src/components/navigation/Nav";
import Header from './src/components/header/Header'
import BestService from "./src/components/best-service/BestService";
import HowWeWork from "./src/components/how-we-work/HowWeWork";
import WhyChooseUs from "./src/components/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Nav />
      <Header/>
      <BestService/>
      <main className="">
        <HowWeWork/>
        <WhyChooseUs/>
      </main>
    </>
  );
}
