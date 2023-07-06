import { Nav } from "./src/components/navigation/Nav";
import Header from './src/components/header/Header'
import BestService from "./src/components/best-service/BestService";
import HowWeWork from "./src/components/how-we-work/HowWeWork";

export default function Home() {
  return (
    <>
      <Nav />
      <Header/>
      <BestService/>
      <main className="">
        <HowWeWork/>
      </main>
    </>
  );
}
