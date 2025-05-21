import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p>Your go-to platform for 3D printing files</p>
      <h1>Discover what’s possible with 3D printing</h1>
      <p>Join our community of creators and explore a vast library of user-submitted models.</p>
      <button>Browse models</button>
      <img src={"/hero-image.png"}></img>
    </main>
  );
}
