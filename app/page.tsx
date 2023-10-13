"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="bg-gray-800 p-20">
        <h1 className="text-5xl font-bold text-amber-400 text-center">Bandlify</h1>
        <h2 className="text-center text-white my-3">All your band resources in one place</h2>
      </header>

      <section className="bg-gray-400 p-4 text-white">

        <div className="flex items-center justify-center gap-3">
          <Link href="/register">
            <Button color="primary">Sign Up</Button>
          </Link>

          <Link href="/features">
            <Button color="secondary">Features</Button>
          </Link>
        </div>

      </section>
    </main>
  )
}
