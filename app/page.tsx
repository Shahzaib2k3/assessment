export default function Home() {
  return (
    <main>
      <div className="text-center bg-blue-100 text-xs py-2 text-green-900">
        The Waiting Room opens August 18–24 at participating schools
      </div>
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center p-4 px-4 md:px-8 border-b border-gray-100">
        <div className="hidden md:flex gap-8 text-gray-600 text-sm">
          <a href="">Waiting Room</a>
          <a href="">Ambassadors</a>
          <a href="">Calendar</a>
          <a href="">FAQ</a>
        </div>
        <div className="font-serif text-2xl md:text-4xl text-center text-green-900 ">
          Bubba
        </div>
        <div className="flex justify-end">
          <button className="bg-black rounded-full py-2 px-4 md:py-3 md:px-8 text-white text-xs ">
            Join Waitlist
          </button>
        </div>
      </nav>
      <section className="bg-slate-200 pt-15 pb-32 md:pb-55 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-blue-900 font-bold">
            FOUNDING 500
          </div>
          <div className="font-serif text-3xl md:text-4xl mt-4">Lead the campus launch</div>
          <div className=" mt-6 text-xs">
            <div> invite friends into your campus waiting room</div>
            <div> and unlock prizes before launch </div>
          </div>
          <div className="text-sm mt-6 text-blue-900 ">
            interested? Message @joinbubba
          </div>
          <div className="text-sm mt-6 font-semibold">
            Already have an invite?{" "}
            <a href="" className="underline">
              Log in
            </a>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto -mt-24 md:-mt-39 relative z-10 font-serif px-4">
        <div className="bg-white shadow-lg rounded-lg grid grid-cols-2 md:grid-cols-5 gap-y-6 md:gap-y-0 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-200 px-4 md:px-8 py-6">
          <div>
            <div className="text-xs -mt-2 font-bold text-green-900">
              Top Prize
            </div>
            <div className="text-2xl md:text-3xl  md:-ml-3 font-semibold mt-1 underline underline-offset-8 md:underline-offset-13  decoration-1 decoration-gray-300">
              $24,000
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-semibold">100</div>
            <div className=" -mt-1 underline underline-offset-8  decoration-1 decoration-gray-300 ">
              Schools
            </div>
            <div className="text-xs mt-4"> participating</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-semibold mt-4 underline decoration-1 underline-offset-8 md:underline-offset-14 decoration-gray-300">
              August 12
            </div>
            <div className="text-xs mt-6">Competition starts</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-semibold md:-ml-3">~500</div>
            <div className=" underline underline-offset-6 decoration-1 decoration-gray-300 md:ml-6">
              Ambassadors
            </div>
            <div className="text-xs mt-4 md:-ml-12">total</div>
          </div>
          <div className="text-center">
            <div className="text-4xl -mt-4 md:-ml-7 font-bold">7</div>
            <div className="text-xl font-semibold  underline decoration-1 underline-offset-9 decoration-gray-300">
              {" "}
              Days
            </div>
            <div className="text-xs  mt-5 md:-mr-6">Invite duration</div>
          </div>
        </div>
      </div>
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6 md:gap-0 mb-8 text-center md:text-left">
          <div>
            <div className="text-xs md:-mt-15 uppercase tracking-widest text-green-900 font-semibold">
              Earn up to
            </div>
            <div className="text-4xl md:text-6xl font-semibold text-green-900 mt-2 font-serif">
              $24,000
            </div>
            <div className="text-slate-600 mt-1">
              in cash, plus merch & perks
            </div>
            <div className="text-sm text-slate-500 mt-1">
              <span className="text-green-900 font-semibold">$84,000</span> in
              total cash prizes
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm md:-mt-5">
            <span className="bg-green-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">
              👑
            </span>
            <span>
              Every participant gets
              <br />
              <span className="text-green-900 font-semibold">
                1 year of Bubba Premium
              </span>
              <br />
              on us
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 pb-4 md:ml-14 overflow-x-auto">
          <div className="flex items-center gap-2 font-semibold pb-4 -mb-4 whitespace-nowrap">
            <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
              01
            </span>
            Individual
          </div>

          <div className="h-px bg-slate-200 w-10 md:w-20 shrink-0"></div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="border border-slate-300 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
              02
            </span>
            Market
          </div>

          <div className="h-px bg-slate-200 w-10 md:w-20 shrink-0"></div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="border border-slate-300 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
              03
            </span>
            National
          </div>
        </div>

        {/* Cards row + sidebar */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white md:col-span-3 shadow-lg rounded-lg h-auto md:h-85 border border-gray-200 pb-4 md:pb-0">
              <div className="text-green-900 font-semibold mt-4 ml-6">
                INDIVIDUAL
              </div>
              <div className="text-[10px] ml-2">
                Invite friends. Unlock all three
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-slate-200 divide-y sm:divide-y-0 text-center mt-2 gap-6 sm:gap-0">
                <div>
                  <div className="text-green-900 font-bold">50</div>
                  <div className="text-[10px]">INVITES</div>
                 <div className="flex flex-col items-center">
  <img
    src="/Screenshot 2026-08-28 231445.png"
    alt=""
    className="p-6 max-w-[140px]"
  />
  <div className="w-[50px] border-b border-gray-200"></div>
</div>
                  
                  <div className="text-xs font-semibold mt-3">Merch Pack</div>
                  <div className="text-xs"> tote,hat,bottle</div>
                </div>
                <div>
                  <div className="text-green-900 font-bold">100</div>
                  <div className="text-[10px]">INVITES</div>
                  <div className="flex flex-col items-center">
  <img
    src="/Screenshot 2026-08-28 231455.png"
    alt=""
    className="p-6 max-w-[140px]"
  />
  <div className="w-[50px] border-b border-gray-200"></div>
</div>
 <div className="text-xs font-semibold mt-4">Game set</div>
                  <div className="text-xs"> Backgammon set</div>
                  
                </div>
                <div>
                  <div className="text-green-900 font-bold">200</div>
                  <div className="text-[10px]">INVITES</div>
                 <div className="flex flex-col items-center">
  <img
    src="/Screenshot 2026-08-28 231510.png"
    alt=""
    className="p-6 max-w-[140px]"
  />
  <div className="w-[50px] border-b border-gray-200"></div>
</div>
                   <div className="text-xs font-semibold mt-3">Beach set</div>
                  <div className="text-xs"> towel,bottle</div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg h-auto md:h-85 border border-gray-200 ">
              <div className="p-2 md:ml-6">
               <div className="text-2xl font-semibold mb-3 text-green-900 font-serif mt-2 text-center ">Market</div>
      <div className="text-xs -mt-3 mb-3 text-center md:text-left md:ml-10">Win your city.</div>
      <div className="md:ml-0">
        1st
      </div>
      <div className="font-bold text-2xl text-green-900 border-b border-gray-200">
        $2,400
      </div>
       <div className="mt-4">
        2nd
      </div>
      <div className="font-bold text-2xl text-green-900 border-b border-gray-200 ">
        $1,200
      </div>
       <div className="mt-4">
        3rd
      </div>
      <div className="font-bold text-2xl text-green-900 border-b border-gray-200">
        $600
      </div>
      <div className="text-sm">
        10 winners of each position
      </div>
      
      </div>
            </div>
          </div>
        </div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 mt-8 pt-6 text-sm border-b border-gray-200 pb-6">

  <div className="col-span-2 md:col-span-1 md:border-r border-gray-200">
    <a href="" className="underline underline-offset-4">
      Official Rules →
    </a>
  </div>

  <div className="text-center mb-2">
    <span className="text-green-900 text-xl font-semibold">10</span> Markets
  </div>

  <div className="text-center">
    <span className="text-green-900 text-xl font-semibold">100</span> Schools
  </div>

  <div className="text-center">
    <span className="text-green-900 text-xl font-semibold">~500</span> Ambassadors
  </div>

</div>
        
      </section>
      <section className="max-w-5xl mx-auto px-4 border-b border-gray-200 py-16 md:py-24">
        <div className="grid grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest  mb-2 text-green-900 font-semibold -mt-10">
              Your participation
            </div>
            <div className="text-[300px] ml-10 font-serif text-orange-600 -mt-35">7</div>
            <div className="text-4xl ml-25 -mt-20  font-[cursive]">days</div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xl md:text-2xl font-semibold text-center md:text-left">
              One week to invite your friends. That's it.
            </div>
            <div className="text-slate-500 mt-2 text-center md:text-left">
              Then the Waiting Room begins.
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mt-8 gap-6 sm:gap-2">
              <div className="text-center flex-1">
                <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  📩
                </div>
                <div className="text  font-bold mt-2 uppercase">Invite period</div>
                <div className="text-xs  mt-1">
                  Invite your friends
                  <br />
                  for seven days
                </div>
              </div>
              <div className="hidden sm:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  ⏳
                </div>
                <div className="text font-bold mt-2">Waiting room</div>
                <div className="text-xs  mt-1">
                  Your campus experiences
                  <br />
                  the interactive waiting room
                </div>
              </div>
              <div className="hidden sm:block text-slate-300">→</div>
              <div className="text-center flex-1">
                <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  🌅
                </div>
                <div className="text font-bold mt-2">Launch</div>
                <div className="text-xs  mt-1">
                  Bubba goes live
                  <br />
                  in your market
                </div>
              </div>
              <div className="hidden sm:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  🏆
                </div>
                <div className="text font-bold mt-2 ">
                  Winners announced
                </div>
                <div className="text-xs  mt-1">
                  Rankings are finalized
                  <br />
                  and winners are announced
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center">
            <div  className="p-4">
              <div className="">ⓘ </div>
              <div className="text-sm font-semibold md:ml-10 md:-mt-10">How points work</div>
              <div className="text-xs text-slate-500 mt-1 md:ml-10">
                Learn how points are earned
                <br />
                and what counts towards your score.
              </div>
            </div>
            <span className="text-slate-400">⌄</span>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center">
            <div className="p-4">
              <div>🎯</div>
              <div className="text-sm font-semibold  md:ml-10 md:-mt-10">
                 Why we're doing this
              </div>
              <div className="text-xs text-slate-500 mt-1  md:ml-10 ">
                Learn about our mission
                <br />
                and why we're so excited.
              </div>
            </div>
            <span className="text-slate-400">⌄</span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-green-900 mb-2">
              What you're building
            </div>
            <div className="text-4xl md:text-6xl font-serif">
              Your campus gets
              <br />
              its own <span className="text-blue-600">Waiting Room.</span>
            </div>
            <div className="text-xs mt-4">
              Seven days of prompts, voting, and friendly <br className="hidden md:block" /> competition — across
              your campus, city, and country.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-slate-200 gap-4 mt-8 text-center md:text-left">
              <div>
                <div className="text-lg">👥</div>
                <div className="text-xs font-semibold mt-2">One community</div>
                <div className="text-xs text-slate-500 mt-1">
                  Everyone on campus in one
                </div>
              </div>
              <div>
                <div className="text-lg">💬</div>
                <div className="text-xs font-semibold mt-2">Daily prompts</div>
                <div className="text-xs text-slate-500 mt-1">
                  Share, vote, and see the best every day.
                </div>
              </div>
              <div>
                <div className="text-lg">🏆</div>
                <div className="text-xs font-semibold mt-2">
                  Live leaderboard
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Climb the ranks and earn merch and perks.
                </div>
              </div>
            </div>
          </div>

          {/* Phone-style preview card */}
         <div className="bg-white border border-slate-200 rounded-2xl min-h-[520px] shadow-lg p-5 w-full max-w-sm mx-auto">
  <div className="flex justify-between items-center text-xs border-b border-gray-200 pb-3">
    <span className="text-slate-500 uppercase tracking-wide">
      Your campus
    </span>
    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
      Day 1 of 7
    </span>
  </div>

  <div className="mt-6">
    <div className="text-xs text-slate-500">Today's prompt</div>
    <div className="text-sm font-semibold mt-1">
      If I had one last first date ever it would be..
    </div>
  </div>

  <div className="mt-6">
    <div className="text-xs text-slate-500 mb-3">Top responses</div>

    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-sm border border-slate-200 rounded-lg p-3">
        <div className="flex items-center gap-2">
          <div className="bg-slate-200 rounded-full w-6 h-6 border border-gray-200"></div>
          <span>Emma S.</span>
        </div>
        <span className="text-slate-400 text-xs">♡ 73</span>
      </div>

      <div className="flex items-center justify-between text-sm border border-slate-200 rounded-lg p-3">
        <div className="flex items-center gap-2">
          <div className="bg-slate-200 rounded-full w-6 h-6 border border-gray-200"></div>
          <span>Jason A.</span>
        </div>
        <span className="text-slate-400 text-xs">♡ 48</span>
      </div>
    </div>
  </div>

  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 text-sm">
    <div>
      <p className="text-green-900 text-xl font-semibold">2,424</p>
      <p>people waiting</p>
    </div>
    <div>
      <p className="text-blue-900 text-xl font-semibold">24</p>
      <p>responses</p>
    </div>
  </div>

  <div className="text-center mt-6 text-sm font-medium">
    Explore the waiting room →
  </div>
</div>
        </div>
      </section>
    </main>
  );
}