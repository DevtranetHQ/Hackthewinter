"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div className="h-screen w-screen  bg-black">
      <Snowfall snowflakeCount={100} speed={[0, 0.5]} />
      <main className="relative z-10 h-full w-full flex flex-col gap-7 md:gap-12 items-center justify-center">
        <div className="h-20 w-full px-10 md:px-20">
          <img
            src="/full-logo.png"
            alt="logo"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl font-light">
            February 3-10
          </h1>
          <h1 className="text-[#04C604] text-xl mdtext-2xl font-light">
            Online, on Devtranet &gt;&gt;
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="w-52 bg-white rounded-md py-4 font-semibold hover:opacity-90 transition-opacity">
            Get your username @
          </button>
          <button className="w-52 border-2 border-white bg-black rounded-md py-4 font-semibold text-white hover:opacity-90 transition-opacity">
            Join the Discord
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly py-5 gap-5">
          <Link
            href="/"
            className="w-52 text-white font-semibold flex flex-row items-center justify-center gap-2"
          >
            README.md <ArrowUpRight size="24px" />
          </Link>
          <Link
            href="/"
            className="w-52 text-white font-semibold flex flex-row items-center justify-center gap-2"
          >
            Get updates <ArrowUpRight size="24px" />
          </Link>
          <Link
            href="/"
            className="w-52 text-white relative font-semibold flex flex-row items-center justify-center gap-2"
          >
            Follow us on Twitter <ArrowUpRight size="24px" />
          </Link>
        </div>
      </main>
    </div>
  );
}
