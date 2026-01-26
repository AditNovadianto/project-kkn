import { useState } from "react"
import { motion } from "framer-motion"

import g1 from "../images/galery/images1.jpeg"
import g2 from "../images/galery/images2.jpeg"
import g3 from "../images/galery/images3.jpeg"
import g4 from "../images/galery/images4.jpeg"
import g5 from "../images/galery/images5.jpeg"
import g6 from "../images/galery/images6.jpeg"
import g7 from "../images/galery/images7.jpeg"
import g8 from "../images/galery/images8.jpeg"
import g9 from "../images/galery/images9.jpeg"
import g10 from "../images/galery/images10.jpeg"
import g11 from "../images/galery/images11.jpeg"
import g12 from "../images/galery/images12.jpeg"
import g13 from "../images/galery/images13.jpeg"
import g14 from "../images/galery/images14.jpeg"
import g15 from "../images/galery/images15.jpeg"
import g16 from "../images/galery/images16.jpeg"
import g17 from "../images/galery/images17.jpeg"

const images = [
    g1, g2, g3, g4, g5,
    g6, g7, g8, g9, g10,
    g11, g12, g13, g14, g15,
    g16, g17,
]

const Galeri = () => {
    const [visible, setVisible] = useState(12)

    return (
        <div id="Galeri_Desa" className="px-5 pt-20 pb-10">
            {/* ================= HEADER ================= */}
            <motion.h2
                className="text-5xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Galeri Desa
            </motion.h2>

            <motion.div
                className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-12"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
            />

            {/* ================= GRID GALERI ================= */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.slice(0, visible).map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src={img}
                            alt={`Galeri ${i + 1}`}
                            className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                        />
                    </motion.div>
                ))}
            </div>

            {/* ================= LOAD MORE ================= */}
            {visible < images.length && (
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <button
                        onClick={() => setVisible((prev) => prev + 4)}
                        className="cursor-pointer px-6 py-3 bg-[#30364F] text-white rounded-lg hover:bg-[#1f2436] transition-all"
                    >
                        Tampilkan Lebih Banyak
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default Galeri
