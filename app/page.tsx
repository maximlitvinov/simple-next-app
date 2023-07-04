import { Nav } from "./src/components/navigation/Nav";
import Header from './src/components/header/Header'

export default function Home() {
  return (
    <>
      <Nav />
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
