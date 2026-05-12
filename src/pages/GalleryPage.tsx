import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Calendar, MapPin, ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", title: "Certification Ceremony", category: "Events", date: "April 2024" },
  { id: 2, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", title: "Internal Training", category: "Campus", date: "March 2024" },
  { id: 3, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", title: "Student Workshop", category: "Workshops", date: "February 2024" },
  { id: 4, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800", title: "Lab Sessions", category: "Campus", date: "January 2024" },
  { id: 5, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800", title: "Group Discussion", category: "Workshops", date: "May 2024" },
  { id: 6, src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800", title: "Award Night", category: "Events", date: "December 2023" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? IMAGES : IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-40 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            <ImageIcon size={16} />
            Visual Journey
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-primary mb-8 tracking-tighter">Our Campus.</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">Step inside Ayan Academy and explore where the next generation of accountants is being made.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {["All", "Events", "Campus", "Workshops"].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-10 py-4 rounded-2xl text-sm font-black transition-all",
                filter === cat 
                  ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-105" 
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div 
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl border border-outline-variant cursor-pointer"
                onClick={() => setSelected(img)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end">
                   <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="bg-secondary-container text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full w-fit mb-4">
                            {img.category}
                        </div>
                        <h3 className="text-white text-2xl font-black mb-2">{img.title}</h3>
                        <div className="flex items-center gap-3 text-white/60 text-xs font-bold">
                            <Calendar size={14} />
                            {img.date}
                        </div>
                   </div>
                   <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                        <ZoomIn size={24} />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 bg-primary/95 backdrop-blur-xl"
            >
                <button 
                    onClick={() => setSelected(null)}
                    className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"
                >
                    <X size={40} />
                </button>
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative w-full max-w-6xl max-h-screen"
                >
                    <img src={selected.src} alt={selected.title} className="w-full h-full object-contain rounded-[2rem] shadow-huge" />
                    <div className="absolute bottom-[-60px] left-0 w-full flex justify-between items-center text-white">
                        <div>
                            <h2 className="text-3xl font-black">{selected.title}</h2>
                            <p className="font-bold text-white/50">{selected.category} • {selected.date}</p>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 font-black italic">
                            <MapPin size={20} />
                            Main Campus, Ahmedabad
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
