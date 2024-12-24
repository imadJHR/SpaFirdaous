import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mwpkdrdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  return (
    <div className="pt-24 sm:pt-24 container mx-auto min-h-screen px-4 pb-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center mb-12"
      >
        <motion.h1 className="text-4xl font-bold text-center">Contactez-nous</motion.h1>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="ml-4"
        >
          <Send className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p>📍 Rue oussama ibno zaid n110 maarif, Casablanca, Morocco</p>
            <p>📱 +212 661-253143</p>
            <p>✉️ imadjohar4@gmail.com.com</p>
            <div>
              <h3 className="font-semibold mb-2">Opening Hours:</h3>
              <p>lundi - dimanche: 10:00 AM - 20:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">Envoyez un message</h2>
          {isSubmitted ? (
            <p className="text-green-600 font-bold text-center">
              Votre message a été envoyée avec succès !
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
