import { useEffect } from "react";
import { ADS_ID } from "../lib/constants";

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
    try {
      (window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return auto ? (
    <div className={`${className}`}>
      <div className="bg-black/5 text-center text-xs text-white/20">
        ADVERTISEMENT
      </div>
      <ins
        className={`adsbygoogle`}
        style={style ? style : { display: `block` }}
        data-ad-layout={layout}
        data-ad-format={`auto`}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={`true`}
        data-adtest="on"
      />
    </div>
  ) : (
    <div
      className={`${className} AdContainer relative z-0 mx-auto mb-2 flex flex-col items-center overflow-hidden bg-black/5`}
    >
      <div className="text-center text-xs text-white/20">ADVERTISEMENT</div>
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
        data-adtest="on"
      />
    </div>
  );
};

export default Banner;
