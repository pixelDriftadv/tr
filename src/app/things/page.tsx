import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="flex min-h-screen bg-[#7289da] flex-col items-center text-center space-y-6 p-24">
      <h1 className=" text-white font-extrabold text-5xl mb-28">Things</h1>
      <Link href={'/things/needed'}>
        <button
          type="submit"
          className=" p-4 min-w-[35vw] font-bold bg-[#36393e] focus:border focus:border-white active:border active:border-white hover:border hover:border-white"
        >
          Needed to be with me
        </button>
      </Link>
      <Link href={'/things/likes'}>
        {' '}
        <button
          type="submit"
          className=" p-4 min-w-[35vw] font-bold bg-[#36393e] focus:border focus:border-white active:border active:border-white hover:border hover:border-white"
        >
          I like about you
        </button>
      </Link>
      <Link href={'/things/dislikes'}>
        <button
          type="submit"
          className=" p-4 min-w-[35vw] font-bold bg-[#36393e] focus:border focus:border-white active:border active:border-white hover:border hover:border-white"
        >
          I dislike about you
        </button>
      </Link>
    </main>
  );
};

export default Page;
