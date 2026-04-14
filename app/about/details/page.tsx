"use client"

import { useCountStore } from "@/store/counterStore"

export default function AboutPage() {
  // await new Promise(r=>setTimeout(r,2000))
  const count = useCountStore((state)=>state.count)
  return (
    <div className="container mx-10 p-4">
      <h1 className="text-4xl font-bold mb-4">About Details</h1>
      <p>React + Shadcn UI + PokeAPI</p>
      <p className="text-3xl">count : {count}</p>
    </div>
  )
}