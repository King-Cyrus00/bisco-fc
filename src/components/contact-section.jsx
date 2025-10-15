import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/button";

export default function ContactSection() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Roboto:wght@400;500;600&display=swap');

        .contact-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
        }

        .contact-body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="contact-heading text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #EF4444, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get In Touch
              </span>
            </h2>
            <p className="contact-body text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about our teams, training sessions, or want to join Bisco FC? 
              We're here to help you get started on your football journey.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center">
            
            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                {
                  icon: <Mail className="w-6 h-6 text-red-500" />,
                  title: "Email Us",
                  desc: "info@biscofc.com",
                  bg: "from-red-50 to-red-100",
                },
                {
                  icon: <Phone className="w-6 h-6 text-blue-500" />,
                  title: "Call Us",
                  desc: "+233 50 123 4567",
                  bg: "from-blue-50 to-blue-100",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-red-500" />,
                  title: "Visit Us",
                  desc: "Accra Sports Stadium, Accra, Ghana",
                  bg: "from-red-50 to-blue-50",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="contact-body font-semibold text-gray-900 text-lg sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="contact-body text-gray-600 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Call-To-Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full"
            >
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center md:text-left">
                <h3 className="contact-heading text-2xl sm:text-3xl text-gray-900 mb-4 leading-tight">
                  Ready to Join the Team?
                </h3>
                <p className="contact-body text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  Whether you're a player, parent, or sponsor, we'd love to hear from you. 
                  Reach out today and become part of the Bisco FC family.
                </p>

                <Button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #EF4444, #2563EB)",
                    boxShadow: "0 4px 8px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
