import React from 'react';
import { MapPin, Car, Plane, Train, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
  const transportOptions = [
    {
      icon: Plane,
      title: 'Самолётом',
      description: 'Аэропорт Сухума - 15 минут на такси',
      time: '15 мин',
      color: 'bg-blue-500'
    },
    {
      icon: Car,
      title: 'На автомобиле',
      description: 'Парковка бесплатная для гостей',
      time: 'В центре',
      color: 'bg-green-500'
    },
    {
      icon: Train,
      title: 'Поездом',
      description: 'Ж/д вокзал Сухума - 20 минут пешком',
      time: '20 мин',
      color: 'bg-purple-500'
    }
  ];

  const nearbyAttractions = [
    { name: 'Пляж', distance: '15 мин пешком' },
    { name: 'Национальный дельфинарий', distance: '11 мин пешком' },
    { name: 'Гагрский рынок', distance: '14 мин пешком' },
    { name: 'Аквапарк ', distance: '18 мин пешком' },
    { name: 'Парк Славы', distance: '20 мин пешком' },
    { name: 'Колесо обозрения «Малибу»', distance: '24 мин пешком' }
  ];

  return (
    <section id="location" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Расположение</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Идеальное местоположение в самом сердце Гагры
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg h-96 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.0701970313257!2d40.273567012254766!3d43.2709051710024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f58af11de9e9f7%3A0x509e8988d9f2f9a4!2s153%20Adygaa%20St%2C%20Gagra!5e0!3m2!1sru!2sus!4v1750159214547!5m2!1sru!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения отеля"
              ></iframe>
            </div>
          </motion.div>


          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            
            {/* Nearby Attractions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Рядом с отелем</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {nearbyAttractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-shadow"
                  >
                    <span className="text-gray-800 dark:text-white font-medium text-sm">{attraction.name}</span>
                    <span className="text-primary-500 dark:text-primary-400 text-xs font-medium">{attraction.distance}</span>
                  </motion.div>
                ))}
              </div>
            </div>

                      {/* Address */}
            <div className="p-6 bg-primary-50 dark:bg-gray-700 rounded-xl">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary-500 dark:text-primary-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Наш адрес</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ул. Адыгаа, 153<br />
                    г. Гагра, Абхазия<br />
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
