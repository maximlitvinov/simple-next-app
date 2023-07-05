import { Nav } from "./src/components/navigation/Nav";
import Header from './src/components/header/Header'
import BestService from "./src/components/best-service/BestService";

export default function Home() {
  return (
    <>
      <Nav />
      <Header/>
      <BestService/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
