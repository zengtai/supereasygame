import { useEffect } from "react";
import { SHOW_AD, ADS_ID, DEV_MODE } from "../lib/constants";

const Banner = ({
  className,
  style,
  layout,
  format,
  client = ADS_ID,
  slot,
  responsive,
  layoutKey,
  auto,
}) => {
  useEffect(() => {
    if (SHOW_AD) {
      try {
        let adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
      } catch (e) {
        console.error(e.message);
      }
    }
  }, []);

  return (
    SHOW_AD &&
    (auto ? (
      <div className={`${className}`}>
        <div className="text-center text-xs text-white/50">ADVERTISEMENT</div>
        <ins
          className={`adsbygoogle`}
          style={
            style
              ? style
              : {
                  display: `flex`,
                  justifyContent: `center`,
                  margin: `0 auto`,
                }
          }
          data-ad-layout={layout}
          data-ad-format={`auto`}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-layout-key={layoutKey}
          data-full-width-responsive={`true`}
          {...(process.env.NODE_ENV === "development" || DEV_MODE
            ? { "data-adtest": "on" }
            : null)}
        />
      </div>
    ) : (
      <div
        className={`${className} AdContainer relative z-0 mx-auto mb-2 flex flex-col items-center overflow-hidden bg-black/5`}
      >
        <div className="text-center text-xs text-white/50">ADVERTISEMENT</div>
        <ins
          className={`adsbygoogle`}
          style={
            style
              ? style
              : {
                  display: `flex`,
                  justifyContent: `center`,
                  width: `100%`,
                  height: `100%`,
                }
          }
          data-ad-layout={layout}
          data-ad-format={format}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-layout-key={layoutKey}
          data-full-width-responsive={responsive}
          {...(DEV_MODE ? { "data-adtest": "on" } : null)}
        />
      </div>
    ))
  );
};

export default Banner;
