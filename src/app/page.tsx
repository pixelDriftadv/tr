import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#7289da] flex-col space-y-6 p-24">
      <h1 className=" text-white font-extrabold text-5xl">Extremely sorry</h1>

      <h1 className=" text-white font-semibold text-xl">
        Yesterday I got to know about my friend, not even my actual friend,
        abused you <br />
        In short, he is a friend of Flames, I dont even talk to him, I didnt
        liked him from the beggining, and few days ago I had a fight with him
        and he rather than targeting me, targeted you, but I didnt told him
        anything about us, it must be Flames {"I'm"} sure, and I wont talk to
        even Flames after this I am actually leaving entire Discord to be honest{' '}
        <br /> <br />
        Really, Really I am sorry from my heart, I know I have hurt you in the
        past but for your own good mindset, not to mentally abuse you
      </h1>

      <div className="h-auto flex items-center justify-end w-full p-6 bg-[#1e2124] fixed bottom-0 left-0">
        <Link href={'/things'}>
          <button
            type="submit"
            className="p-2 transition-all bg-[#7289da] focus:border focus:border-white active:border active:border-white hover:border hover:border-white"
          >
            Things for SSB
          </button>
        </Link>
      </div>
    </main>
  );
}
