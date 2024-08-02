import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="flex min-h-screen bg-[#7289da] flex-col items-center text-center space-y-6 p-24">
      <h1 className="text-white font-semibold text-xl">Besides could you say who is itz_sahil_732, asiff_zayn and itz_kalam afterall? <br/>
      if I get to know {"you're"} lying or catch you lying then dont expect me either, I got myself to a place I could absolutely abandon you, so be honest</h1>
      <h1 className="text-white font-semibold text-xl">Also, why have you kept blocking me all the time while its easy for you to follow other boys? And you could also laugh with other boys in my absence, but not with me<br/>
       Look, If you dont like me just say it already, I request you to not waste my time or yours, its completely useless, <br/>
        Or if you think you started this relation as a mistake and now can end it because I would get hurt then its totally okay, just say it to me, my life is a disaster already <br/>
        I wont get hurt, wont do anything stupid or suicidal I promise, just say it <br/>
        If you just clear it out, no more time would be wasted, I already live a extreme stress-ful life, I really dont want to stress over even more, seeing new boys you follow or they follow you, just think about it <br/>
        And please dont lie this time, like I sometimes believe jeon_abrooo is your alternate account and you follow other boys with it and post stories for them, I dont really want to stress more, I really think my mind would blast anyday, my head really hurts in the back every single day, appointed with a doctor, stress was the only cause behind it confirmed<br/>
        So, I think I deserve humanity even for once from your side, so please I request to sort it out
      </h1>
      <h1 className=" text-white font-extrabold text-5xl my-28">Things</h1>
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
