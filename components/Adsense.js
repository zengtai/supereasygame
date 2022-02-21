import React, { useEffect } from "react";
import { ADSENSE_ID } from "../lib/constants";

export default function Adsense({ slot, height, wFull }) {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <div
      className={`relative z-30 my-3 mx-auto w-[300px] overflow-hidden before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:opacity-50 before:content-['Advertisement'] ${height} md:h-[90px] ${
        wFull ? `md:w-full` : `md:w-[728px] lg:w-[970px]`
      } bg-black/10`}
    >
      <ins
        className="adsbygoogle bg-loading bg-center bg-no-repeat"
        style={{ display: "block", height: "100%", width: "100%" }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        // data-ad-format="auto"
        // data-full-width-responsive="true"
      ></ins>
    </div>
  );
}