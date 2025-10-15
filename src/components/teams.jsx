import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../components/button";
import Coach from "../assets/images/coach.png";
import Big from "../assets/images/big.png";
import Small from "../assets/images/small.png";

const teams = [
  {
    name: "Management",
    desc: "Leadership team guiding our club to success",
    img: Coach,
    path: "/team/management",
  },
  {
    name: "Under 10",
    desc: "Developing young talents at the foundation stage",
    img: Small,
    path: "/team/under-10",
  },
  {
    name: "Under 13",
    desc: "Nurturing skills and discipline for future stars",
    img: Small,
    path: "/team/under-13",
  },
  {
    name: "Under 15",
    desc: "Developing tomorrow's champions",
    img: Big,
    path: "/team/under-15",
  },
  {
    name: "Under 17",
    desc: "Senior youth team competing at the highest level",
    img: Big,
    path: "/team/under-17",
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Roboto:wght@400;500;600;700&display=swap');

        .team-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
        }

        .team-body {
          font-family: 'Roboto', sans-serif;
        }

        .team-card {
          position: relative;
          overflow: hidden;
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #EF4444, #60A5FA);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .team-card:hover::before {
          transform: scaleX(1);
        }

        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #60A5FA, #EF4444);
          width: 20px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .team-card {
            border-radius: 0.75rem;
          }

          .team-card:hover {
            transform: none;
            box-shadow: 0 6px 14px rgba(0,0,0,0.08);
          }

          .swiper-pagination-bullet-active {
            width: 16px;
          }
        }

        @media (max-width: 480px) {
          .team-heading {
            font-size: 1.8rem;
          }

          .team-card-title {
            font-size: 1.2rem;
          }

          .team-body {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section
        id="teams"
        className="py-20 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-red-50 text-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="team-body text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-red-500"
          >
            OUR TEAMS
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="team-heading text-3xl sm:text-4xl md:text-5xl mb-4"
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              Bisco Teams
            </span>
          </motion.h2>

          <p className="team-body text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            From grassroots to elite level, discover the talented players and dedicated staff that make Bisco FC special.
          </p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {teams.map((team, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="team-card h-full flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <img
                      src={team.img}
                      alt={team.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between text-left">
                    <div>
                      <h3 className="team-card-title text-xl sm:text-2xl text-gray-900 mb-2">
                        {team.name}
                      </h3>
                      <p className="team-body text-gray-600 text-sm sm:text-base leading-relaxed">
                        {team.desc}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8">
                      <Button
                        onClick={() => navigate(team.path)}
                        className="w-full py-2.5 sm:py-3 text-sm sm:text-base"
                      >
                        View Team
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;
