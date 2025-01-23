import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo_paradise-removebg-preview.png";
import FlyingFlowers from "../components/FlyingFlowers";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    date: "",
    time: "",
    service: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the data (ensure no field is empty)
    if (!formData.name || !formData.tel || !formData.date || !formData.time || !formData.service) {
      alert("Veuillez remplir tous les champs avant de soumettre.");
      return;
    }

    // Format the message for WhatsApp
    const message = `Nouvelle réservation:\n
Nom: ${formData.name}
Téléphone: ${formData.tel}
Date: ${formData.date}
Heure: ${formData.time}
Service: ${formData.service}`;

    // Replace this with your WhatsApp number (with country code)
    const whatsappNumber = "212645288216";

    // Create WhatsApp URL with the formatted message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Reset form and show success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      tel: "",
      date: "",
      time: "",
      service: "",
    });
  };

  return (
    <div className="pt-16 sm:pt-24 container mx-auto min-h-screen px-4 pb-8 relative overflow-hidden">
      <FlyingFlowers />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
      >
        Prenez rendez-vous
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 max-w-md lg:max-w-lg"
        >
          <img
            src={Logo}
            alt="Relaxation"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full lg:w-1/2 max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg relative z-10"
          onSubmit={handleSubmit}
        >
          {isSubmitted ? (
            <p className="text-green-600 font-bold text-center">
              Votre réservation a été envoyée avec succès !
            </p>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Entrez votre nom"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="tel">
                  Téléphone
                </label>
                <input
                  id="tel"
                  type="tel"
                  className="w-full p-2 border rounded"
                  placeholder="Entrez votre numéro"
                  value={formData.tel}
                  onChange={(e) =>
                    setFormData({ ...formData, tel: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full p-2 border rounded"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="time">
                  Heure
                </label>
                <input
                  id="time"
                  type="time"
                  className="w-full p-2 border rounded"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="service">
                  Service
                </label>
                <select
                  id="service"
                  className="w-full p-2 border rounded"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="swedish">Massage Suédois</option>
                  <option value="deep-tissue">Massage Deep Tissue</option>
                  <option value="hot-stone">Massage aux Pierres Chaudes</option>
                  <option value="hammam-au-chocolat">Hammam Au Chocolat</option>
                  <option value="hammam-anti-stress">Hammam Anti-Stress</option>
                  <option value="pack-paradise-anti-stress">
                    Pack Paradise Anti-Stress
                  </option>
                  <option value="pack-hammam-aux-algues-medicales">
                    Pack Hammam Aux Algues Médicales
                  </option>
                  <option value="pack-hammam-vip">Pack Hammam VIP</option>
                  <option value="pack-sultana">Pack Sultana</option>
                  <option value="pack-hammam-shahrazade">
                    Pack Hammam Shahrazade
                  </option>
                  <option value="pack-hammam-loock">Pack Hammam Loock</option>
                  <option value="pack-hammam-royal">Pack Hammam Royal</option>
                  <option value="pack-hammam-luxe">Pack Hammam Luxe</option>
                  <option value="pack-hammam-prestige">
                    Pack Hammam Prestige
                  </option>
                  <option value="pedicure-royal">Pédicure Royal</option>
                  <option value="pack-mariee">Pack Mariée</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
              >
                Réserver Maintenant
              </button>
            </>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Reservation;
