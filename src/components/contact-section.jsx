import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="contact-heading text-4xl mb-4">
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
            <p className="contact-body text-gray-600 max-w-2xl mx-auto">
              Have questions about our teams, training sessions, or want to join Bisco FC? 
              We're here to help you get started on your football journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #EF444415, #EF444425)' }}>
                  <Mail className="w-6 h-6" style={{ color: '#EF4444' }} />
                </div>
                <div>
                  <h3 className="contact-body font-semibold text-gray-900">Email Us</h3>
                  <p className="contact-body text-gray-600">info@biscofc.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #60A5FA15, #60A5FA25)' }}>
                  <Phone className="w-6 h-6" style={{ color: '#60A5FA' }} />
                </div>
                <div>
                  <h3 className="contact-body font-semibold text-gray-900">Call Us</h3>
                  <p className="contact-body text-gray-600">+233 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #EF444415, #EF444425)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#EF4444' }} />
                </div>
                <div>
                  <h3 className="contact-body font-semibold text-gray-900">Visit Us</h3>
                  <p className="contact-body text-gray-600">Accra Sports Stadium, Accra, Ghana</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="contact-heading text-2xl text-gray-900 mb-4">
                  Ready to Join the Team?
                </h3>
                <p className="contact-body text-gray-600 mb-6">
                  Whether you're a player, parent, or sponsor, we'd love to hear from you. 
                  Reach out today and become part of the Bisco FC family.
                </p>
                
                <Button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-semibold transition-all group"
                  style={{ 
                    background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                    boxShadow: '0 4px 6px rgba(239, 68, 68, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 12px rgba(239, 68, 68, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(239, 68, 68, 0.2)';
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