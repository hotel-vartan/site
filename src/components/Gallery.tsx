import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/6d9f9a7f-7597-4d5c-a342-a33ac0cae7ef.jpg',
      title: 'Гостевой дом',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/46bd7a41-57ef-450c-b569-a5a9aade5432.jpg',
      title: 'Панорамные окна в номере',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/2d21337a-442f-42c9-b484-8a563e3455ff.jpg',
      title: 'Уличная кухня',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/dac3849f-9440-4af8-93e0-9ffb148599c8.jpg',
      title: 'Бассейн на территории',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/58d7f238-1049-425c-ab34-f821e16d3c6b.jpg',
      title: 'Уютный номер',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/6a61d3af-07d3-4ba8-afef-3b87f287703d.jpg',
      title: 'Уютный номер',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/8617dceb-5817-450f-84fd-2f20ac25bcdf.jpg',
      title: 'Уборная',
      category: ''
    },
    {
      src: 'https://raw.githubusercontent.com/hotel-vartan/site/refs/heads/main/img/fae57783-51b3-4561-8b20-4e4e32417851.jpg',
      title: 'Терраса',
      category: ''
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Галерея</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Погрузитесь в атмосферу нашего отеля через фотографии
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <div className="p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-4xl max-h-[90vh] mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="text-center mt-4 text-white">
                  <h3 className="text-xl font-semibold">{images[selectedImage].title}</h3>
                  <p className="text-gray-300">{images[selectedImage].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
