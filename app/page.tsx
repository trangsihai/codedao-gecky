import clsx from "clsx";
import { Alfa_Slab_One } from "next/font/google";
import localFontNext from "next/font/local";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const alfaFont = Alfa_Slab_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--alfa-slab-one-font",
});

const localFont = localFontNext({
  src: "./ED-Piedmont-Regular.woff2",
});

import heroBg from "./hero.png";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] bg-white">
      <div className="relative overflow-hidden">
        {/* banner */}
        <div className="relative overflow-hidden">
          <Image src={heroBg} quality={100} priority alt="hero" />

          <div className="w-full absolute bottom-0">
            <div className="px-4 lg:px-24 flex justify-between items-end gap-4">
              <img className="lg:w-auto w-1/2" src="/new/img-2.png" alt="" />
              <div className="flex flex-col gap-4 lg:gap-8 lg:w-auto w-1/2 justify-center items-start">
                <div className="flex flex-col justify-center items-center text-white">
                  <div className="flex flex-row justify-between items-center gap-10">
                    <div
                      className={clsx(
                        "text-center text-[24px] lg:text-[100px] break-words",
                        localFont.className
                      )}
                    >
                      Gecky
                    </div>
                    <div className="flex gap-4 lg:gap-8">
                      <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
                        <img
                          className="w-[30px] lg:w-auto"
                          src="/new/x-1-icon.png"
                          alt=""
                        />
                      </a>
                      <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
                        <img
                          className="w-[30px] lg:w-auto"
                          src="/new/d-1-icon.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "text-center text-[24px] lg:text-[100px] break-words",
                      localFont.className
                    )}
                  >
                    on Tron
                  </div>
                </div>
                <div className="lg:max-w-[400px] flex flex-col gap-4 text-white text-[10px] lg:text-[16px]">
                  <div>Who is AlonMushk?</div>
                  <div>
                    Alon Mushk, the ledgend himselph, reddy to take ovur Solana
                    and mek free spech possibel.
                  </div>
                </div>
                <div
                  className="w-fit min-w-[100px] lg:min-w-[400px] flex flex-col justify-center 
                  items-center bg-[#FF0004] px-4 lg:px-10 py-1 lg:py-2 text-white 
                  rounded-[27px] border-2 border-solid border-black border-r-[12px]"
                >
                  <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
                    <div className="text-center text-[16px] lg:text-[48px] font-black	 break-words">
                      BUY NOW
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-[20%] lg:mb-[25%] py-2 lg:py-4 bg-[#FF0004] text-white">
              <Marquee
                className={clsx(
                  "text-[16px] lg:text-[64px]",
                  localFont.className
                )}
              >
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
                <div className="mr-4 lg:mr-10">$Gecky</div>
              </Marquee>
            </div>

            <div className="px-4 lg:px-12 flex justify-between items-start">
              <img className="lg:w-auto w-1/2" src="/new/img-1.png" alt="" />
              <div className="flex flex-col gap-4 lg:gap-8 w-1/2 justify-center items-center">
                <div
                  className={clsx(
                    "text-center text-[16px] lg:text-[128px] break-words text-white",
                    localFont.className
                  )}
                >
                  Tokenomic
                </div>
                <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
                  <div
                    className="w-fit  min-w-[100px] lg:min-w-[360px] flex flex-col justify-center 
                  items-center bg-[#FF0004] px-4 lg:px-10 py-1 lg:py-2 text-white 
                  rounded-[14px] lg:rounded-[27px] border-2 border-solid border-black border-r-[12px]"
                  >
                    <div className="text-center text-[16px] lg:text-[48px] font-black	 break-words">
                      TOTAL SUPPLY
                    </div>
                    <div className="text-center text-[13px] lg:text-[36px] font-medium	 break-words">
                      1,000,000,0000
                    </div>
                  </div>
                </a>
                <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
                  <div
                    className="w-fit  min-w-[100px] lg:min-w-[360px] flex flex-col justify-center 
                  items-center bg-[#FF0004] px-4 lg:px-10 py-1 lg:py-2 text-white 
                  rounded-[14px] lg:rounded-[27px] border-2 border-solid border-black border-r-[12px]"
                  >
                    <div className="text-center text-[16px] lg:text-[48px] font-black	 break-words">
                      TAX
                    </div>
                    <div className="text-center text-[13px] lg:text-[36px] font-medium break-words">
                      0/0
                    </div>
                  </div>
                </a>
                <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
                  <div
                    className="w-fit  min-w-[100px] lg:min-w-[360px] flex flex-col justify-center 
                  items-center bg-[#FF0004] px-4 lg:px-10 py-1 lg:py-2 text-white 
                  rounded-[14px] lg:rounded-[27px] border-2 border-solid border-black border-r-[12px]"
                  >
                    <div className="text-center text-[16px] lg:text-[48px] font-black	 break-words">
                      LIQUIDITY
                    </div>
                    <div className="text-center text-[13px] lg:text-[36px] font-medium	 break-words">
                      100% Locked
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
            <article
              className={clsx(
                "text-center text-[13px] lg:text-[40px] font-bold	 bg-[#FF0004] text-white px-4 lg:px-[10%] py-4 lg:py-8 break-all",
                alfaFont.variable
              )}
            >
              {process.env.NEXT_PUBLIC_TBA_URL}
            </article>
          </a>
        </div>

        <div className="relative">
          <img
            className="w-full max-w-[1440px] m-auto"
            src="/new/footer.png"
            alt=""
          />
          <div className="absolute bottom-[5%] left-[5%] flex gap-8 lg:gap-16">
            <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
              <img
                className="w-[60px] lg:w-auto"
                src="/new/x-icon.png"
                alt=""
              />
            </a>
            <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
              <img
                className="w-[60px] lg:w-auto"
                src="/new/d-icon.png"
                alt=""
              />
            </a>
          </div>
          <div
            className={clsx(
              "absolute top-[5%] right-[5%] text-white  text-[48px] lg:text-[128px]",
              localFont.className
            )}
          >
            <a href={process.env.NEXT_PUBLIC_DEXS_URL}>Contact us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
