import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blueish">
      <div className="max-w-5xl font-mono text-redish">
        <h1 className="text-7xl text-center">Name Generator</h1>
        <Link
          href="/generator"
          className="mx-auto block bg-blueish border-solid border-2 border-redish text-center my-20 p-4
        rounded-lg hover:bg-redish hover:text-blueish transition duration-300 ease-in-out"
        >
          Start Generating
        </Link>
      </div>
    </main>
  );
}
