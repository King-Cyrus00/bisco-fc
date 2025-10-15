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
        
        .team-card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
        }
        
        .swiper-pagination-bullet {
          background: #9CA3AF;
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #EF4444, #60A5FA);
          width: 24px;
          border-radius: 4px;
        }
        
        .team-card {
          position: relative;
          overflow: hidden;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .team-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #EF4444, #60A5FA);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        
        .team-card:hover::before {
          transform: scaleX(1);
        }
      `}</style>
      
      <section
        className="py-20 text-center bg-gradient-to-br from-blue-50 via-white to-red-50"
        id="teams"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="team-body text-sm font-bold tracking-widest mb-3 uppercase"
            style={{ color: '#EF4444' }}
          >
            OUR TEAMS
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="team-heading text-4xl md:text-5xl mb-4"
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              Bisco Teams
            </span>
          </motion.h2>

          <p className="team-body text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            From grassroots to elite level, discover the talented players and dedicated staff that make Bisco FC special.
          </p>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {teams.map((team, index) => (
              <SwiperSlide key={index}>
                <div className="team-card">
                  {/* Image Section */}
                  <div className="relative w-full h-72 overflow-hidden bg-gray-100">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      src={team.img}
                      alt={team.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-between min-h-[220px]">
                    <div className="mb-6">
                      <h3 className="team-card-title text-2xl text-gray-900 mb-3">
                        {team.name}
                      </h3>
                      <p className="team-body text-base text-gray-600 leading-relaxed">
                        {team.desc}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <Button
                        onClick={() => navigate(team.path)}
                        className="w-full"
                      >
                        View Team
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;