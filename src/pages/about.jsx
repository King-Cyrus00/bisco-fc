import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Navbar from "../components/nav-bar";
import Footer from "../components/footer";
import Button from "../components/button";

const branches = [
  {
    title: "Brief History",
    content:
      "Bisco Football Club was established in 2008 with the vision of nurturing young talent and inspiring passion for the beautiful game. What began as a small local team has grown into a reputable club known for discipline, teamwork, and excellence.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Progress & Growth",
    content:
      "Over the years, the club has expanded its reach, built stronger community ties, and developed youth academies. Our commitment to player development has seen several athletes move on to national and international levels.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Achievements",
    content:
      "Bisco FC has won regional tournaments, produced top-tier players, and received awards for fair play and community service. Our dedication on and off the pitch continues to earn respect across the football community.",
    image:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vision",
    content:
      "To be a leading football club recognized for excellence in player development, sportsmanship, and community impact across the continent.",
    image:
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mission",
    content:
      "To provide opportunities for talented youth through structured training, mentorship, and exposure to professional football standards.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
  },
];

const About = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Roboto:wght@400;500;600;700&display=swap');
        
        .about-page-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
        }
        
        .about-page-body {
          font-family: 'Roboto', sans-serif;
        }
        
        .branch-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
        }
        
        .card-content {
          position: absolute;
          inset: 0;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        
        .timeline-card:hover .card-content {
          opacity: 1;
        }
        
        .content-text {
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-card:hover .content-text {
          transform: translateY(0);
        }
      `}</style>
      
      <div className="relative min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" 
               style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5"
               style={{ background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="about-page-body text-sm font-bold tracking-widest uppercase"
                    style={{ 
                      color: '#EF4444',
                      borderBottom: '2px solid #EF4444',
                      paddingBottom: '4px'
                    }}>
                Our Story
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-page-heading text-4xl md:text-5xl text-gray-900 mt-4 mb-6 leading-tight"
            >
              About Bisco Football Club
            </motion.h1>
            
            <p className="about-page-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the journey, vision, and achievements that define our club and community.
            </p>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 transform -translate-x-1/2" />

            {/* Branch nodes */}
            <div className="space-y-16 md:space-y-24">
              {branches.map((branch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 shadow-lg z-10"
                       style={{ borderColor: index % 2 === 0 ? '#EF4444' : '#60A5FA' }} />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="w-full md:w-5/12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative overflow-hidden h-56">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={branch.image}
                        alt={branch.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Title overlay on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h2 className="branch-title text-2xl md:text-3xl text-white drop-shadow-lg">
                          {branch.title}
                        </h2>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="about-page-body text-base text-gray-600 leading-relaxed">
                        {branch.content}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" 
               style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
               style={{ background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <h2 className="about-page-heading text-4xl md:text-5xl text-gray-900 mb-6">
              Join Our Journey
            </h2>
            <p className="about-page-body text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of a legacy built on passion, excellence, and community. Together, we achieve greatness.
            </p>
            <Button onClick={() => navigate('/contact')}>
              Contact Us Today
            </Button>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;