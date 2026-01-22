"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import { features } from "@/app/api/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const handleCardClick = (index: number) => {
    const isSameCard = flippedIndex === index;
    setFlippedIndex(isSameCard ? null : index);

    // Pause autoplay on flip, resume on flip back
    if (sliderRef.current) {
      if (!isSameCard) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
    }
  };

  const settings = {
    autoplay: true,
    pauseOnHover: false,
    cssEase: "linear",
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="features" className="w-full bg-slateGray py-20 md:py-40 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white text-slate-900 md:text-4xl font-montserrat">
          Built for speed, trust, and growth
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-primary font-montserrat text-base">
          Everything you need to find help fast — and everything pros need to grow.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-x-auto scrollbar-hide">
        <Slider {...settings} ref={sliderRef}>
          {features.map((item, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div key={index} className="px-4 min-w-[320px]">
                <div
                  className={`flip-card ${isFlipped ? "flipped" : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front">
                      <div className="p-6 flex flex-col items-center justify-center text-center h-full">
                        {item.title === "Tracking" ? (
                          <Image
                            src="/tracking-map.png" // put your map image inside /public/
                            alt="Tracking Map"
                            width={280}
                            height={200}
                            className="rounded-lg object-cover"
                          />
                        ) : (
                          <>
                            <div className="mb-4 p-4 rounded-full bg-blue-100">
                              <Image
                                src={`${getImagePrefix()}${item.icon}`}
                                alt={item.title}
                                width={40}
                                height={40}
                              />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                              {item.title}
                            </h3>
                            <p className="text-sm text-slate-500 mt-2 font-montserrat">
                              Tap to learn more
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back">
                      <div className="p-6 flex flex-col items-center justify-center text-center h-full">
                        <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                          {item.title}
                        </h3>
                        {item.title === "Tracking" ? (
                          <Image
                            src="/tracking-map.png"
                            alt="Tracking Map"
                            width={280}
                            height={200}
                            className="rounded-lg object-cover mt-4"
                          />
                        ) : (
                          <p className="text-sm text-slate-600 mt-4 font-montserrat">
                            {item.description}
                          </p>
                        )}
                        <span className="text-xs text-primary mt-4 font-montserrat">
                          Tap again to flip back
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Flip Card CSS */}
      <style jsx>{`
        .flip-card {
          width: 100%;
          height: 300px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s ease-in-out;
          transform-style: preserve-3d;
        }

        .flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          backface-visibility: hidden;
          background: #cde7f7ff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .font-montserrat {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>

      {/* Load Montserrat Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default CardSlider;
