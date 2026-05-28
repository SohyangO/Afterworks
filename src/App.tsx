import { useState } from "react";
import posterImage from "../src/assets/poster.png";

export default function AfterWorksFestivalPage() {
  const [currentBand, setCurrentBand] = useState(0);
  const lineup = [
    {
      time: "1st",
      team: "25 O’CLOCK",
      desc: "'24시간이 모자라~' 그래서 모인 충주의 직장인 밴드 25시입니다. 하루가 끝난 뒤에도 음악을 사랑하는 마음으로, 여러분의 시간을 함께 채울게요!",
    },
    {
      time: "2nd",
      team: "Naive",
      desc: "안녕하세요 밴드 Naive(나이브)입니다. Naive는 2021년 결성된 얼터너티브 록 밴드입니다. 팀명에는 '음악만큼은 이것저것 따지지 않고, 천진난만한 마음으로 즐겁게 하자'는 의미를 담고 있습니다. 이번 공연도 Naive하게 즐겨주세요~!",
    },
    {
      time: "3rd",
      team: "GNH",
      desc: "안녕하세요, 밴드 GNH(그냥해)입니다. ‘그냥 해보자’로 시작했다가 어느새 공연까지 오게 된 밴드입니다. 이런 무대는 다들 처음이지만 재밌게 해보자는 마음으로 모였습니다. 첫 공연, 많이 즐겨주세요! 여러분들도 하고 싶은 게 있다면 그냥 하세요. GNH처럼요 😎",
    },
    {
      time: "4th",
      team: "BARD",
      desc: "안녕하세요, 밴드 바드입니다! 바드는 이야기와 음악을 전하던 음유시인을 뜻합니다. 저희는 음악을 순수하게 정말 좋아하는 사람들이 모여 저희만의 음악과 분위기를 전하고 싶다는 마음으로 함께하고 있습니다. 무대 위에서 좋아하는 음악을 함께 나누는 순간들을 소중하게 생각하며 이번 공연도 바드만의 이야기로 채워보려 합니다! 즐겁게 함께 놀아봐요~~",
    },
  ];

  const setlists = [
    {
      band: "25 O’CLOCK",
      songs: [
        "공원-곰팡이",
        "민수-민수는 혼란스럽다",
        "너드커넥션-Back in Time",
        "윤마치-초록",
        "한로로-사랑하게 될 거야",
        "극동아시아타이거즈-흔들리는 시간 속에",
        "극동아시아타이거즈-밤이 깊었네",
      ],
    },
    {
      band: "Naive",
      songs: [
        "Naive - Rusty Lake",
        "한로로 - 입춘",
        "Naive - Blue Bird",
        "Naive - 적야",
        "Naive - 아무래도",
        "Mrs. Green Apple - Lilac",
        "데이식스 - 한 페이지가 될 수 있게",
        "10cm - 너에게 닿기를",
      ],
    },
    {
      band: "GNH",
      songs: [
        "GNH - Bad as I used to be",
        "신해철 - 그대에게",
        "YB - 붉은노을",
        "혁오 - Tomboy",
        "duffy - Mercy",
        "델리 스파이스 - 고백",
        "이찬혁 - 멸종위기사랑",
      ],
    },
    {
      band: "BARD",
      songs: [
        "87Dance - 청색동경",
        "라쿠나 - Far Away",
        "유다빈밴드 - ONCE",
        "리도어 - 욕망주사기",
        "Guns N Roses - Welcome to the Jungle",
        "브로큰 발렌타인 - Answer me (String Ver.)",
        "Yellow Monsters - Red flag",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#8BB6F2] text-white overflow-x-hidden relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbe6f6] via-[#6d8df2] to-[#6B3EFF] opacity-90" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-20" />

      <main className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center px-5 sm:px-6 md:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 text-white/80">
                25 O’CLOCK | Naive | GNH | BARD
              </p>

              <h1 className="text-[3.8rem] sm:text-[5rem] md:text-[8rem] leading-[0.85] font-black tracking-tight text-black drop-shadow-2xl break-keep">
                MAKE
                <br />
                PLAY
              </h1>

              <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] leading-none font-black text-white mt-4 text-right break-keep">
                AFTER
                <br />
                WORKS
              </h2>

              <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 text-l sm:text-m md:text-base font-semibold">
                <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  2026. 06. 06 SAT 17:00 PM Swing Hall
                </div>
                {/* <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  
                </div>
                <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Swing Hall
                </div> */}
              </div>

              <p className="mt-8 max-w-xl text-white/70 leading-relaxed text-sm md:text-base">
                퇴근 후에도 끝나지 않는 우리들의 플레이리스트. <br/> 직장인 밴드 4팀이
                함께 만드는 연합 공연, 음악으로 하루의 피로를 날려버릴 밤.
              </p>
            </div>

            <div className="relative flex justify-center items-center order-first lg:order-last">
              <div className="absolute w-[420px] h-[420px] bg-white/10 rounded-full blur-2xl" />

              <img
                src={posterImage}
                alt="Band instruments"
                className="relative w-full max-w-[360px] sm:max-w-md md:max-w-xl rounded-[2rem] border border-white/20 shadow-2xl object-cover aspect-[0.72/1] sm:aspect-auto"
              />
            </div>
          </div>
        </section>

        {/* <section className="px-5 sm:px-6 md:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-12 h-[2px] bg-white/50" />
              <p className="uppercase tracking-[0.4em] text-white/70 text-sm">
                Band Introduction
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
              {["25 O’CLOCK", "Naive", "GNH", "BARD"].map((band, index) => (
                <div
                  key={band}
                  className="group rounded-[2rem] p-6 md:p-8 bg-white/10 backdrop-blur-xl border border-white/10 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-5xl font-black text-white/20 mb-6">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">
                    {band}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    '테스트'
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="px-5 sm:px-6 md:px-16 py-16 md:py-24 bg-black/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-12 h-[2px] bg-white/50" />
              <p className="uppercase tracking-[0.4em] text-white/70 text-sm">
                Timetable
              </p>
            </div>

            <div className="space-y-6">
              {lineup.map((item) => (
                <div
                  key={item.team}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-lg"
                >
                  <div>
                    <p className="text-white/50 text-sm mb-2">{item.time}</p>
                    <h3 className="text-3xl md:text-4xl font-black">
                      {item.team}
                    </h3>
                  </div>

                  <p className="max-w-md text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 md:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-400/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-white/50" />
                    <p className="uppercase tracking-[0.4em] text-white/70 text-sm">
                      Setlist Preview
                    </p>
                  </div>

                  <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-semibold text-white/80">
                    {currentBand + 1} / 4
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 break-keep">
                    {setlists[currentBand].band}
                  </h3>
                  <p className="text-white/60">공연 예정 셋리스트 미리보기</p>
                </div>

                <div className="space-y-4">
                  {setlists[currentBand].songs.slice(0, 7).map((song, idx) => (
                    <div
                      key={song}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >
                      <span className="text-white/40 font-bold text-sm min-w-[40px]">
                        0{idx + 1}
                      </span>

                      <span className="text-sm sm:text-base md:text-xl font-semibold text-right leading-snug break-keep">
                        {song}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-10 flex items-center justify-between gap-3 md:gap-4 flex-wrap">
                  <button
                    onClick={() =>
                      setCurrentBand((prev) =>
                        prev === 0 ? setlists.length - 1 : prev - 1,
                      )
                    }
                    className="px-4 md:px-6 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all font-semibold text-sm md:text-base"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {setlists.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentBand === idx ? "bg-white w-8" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentBand((prev) =>
                        prev === setlists.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="px-4 md:px-6 py-3 rounded-full bg-white text-[#5A61F7] hover:scale-105 transition-all font-black text-sm md:text-base"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#5D7EF7]/60 to-[#7C49FF]/60 p-6 md:p-10 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[2px] bg-white/50" />
                <p className="uppercase tracking-[0.4em] text-white/70 text-sm">
                  Venue
                </p>
              </div>

              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Swing Hall
              </h3>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>서울 마포구 동교로 162-5 지하 1층</p>
                <p>홍대입구역 도보 3분 거리</p>
                <p>
                  입장 시작 : 16:45
                  <br />
                  공연 시작 : 17:00
                </p>
              </div>

              <a
                href="https://naver.me/GSD1Qj2l"
                className="inline-flex mt-16 px-8 py-4 rounded-full bg-white text-[#5A61F7] font-black hover:scale-105 transition-transform"
              >
                지도 보기
              </a>
            </div>
          </div>
        </section>

        <footer className="px-5 sm:px-6 md:px-16 py-10 md:py-12 border-t border-white/10 text-center text-white/50 text-xs sm:text-sm leading-relaxed">
          THIS ENTIRE PERFORMANCE IS NOT SPONSORED BY EXCEL.
          <br />
          BUT WE DO EXCEL IN EXCELLENT SOUND.
        </footer>
      </main>
    </div>
  );
}
