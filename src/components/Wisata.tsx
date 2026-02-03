import wisataAlam from "../images/wisata-alam.jpg"
import situsSejarah from "../images/situs-sejarah.jpeg"
import kawasanWisata from "../images/kawasan-wisata.jpg"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
}

const Wisata = () => {
    return (
        <div id="Wisata_Desa" className="px-5 pt-20 pb-5">
            {/* Header */}
            <motion.h2
                className="text-5xl font-bold text-center mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Wisata Desa
            </motion.h2>

            <motion.div
                className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto mb-10"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
            />

            <motion.p
                className="text-gray-700 text-center max-w-3xl mx-auto mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Desa Allakuang memiliki potensi wisata alam, situs sejarah, dan kawasan
                wisata desa yang masih alami serta mudah diakses.
            </motion.p>

            {/* Cards */}
            <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Wisata 1 */}
                <motion.div
                    className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={wisataAlam}
                        alt="Wisata Alam Allakuang"
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold">
                            Wisata Alam Allakuang
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                            Kawasan wisata alam dengan pemandangan asri dan udara sejuk.
                        </p>
                    </div>
                </motion.div>

                {/* Wisata 2 */}
                <motion.div
                    className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={situsSejarah}
                        alt="Situs Sejarah Desa"
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold">
                            Situs Sejarah Desa
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                            Peninggalan sejarah yang menjadi identitas budaya desa.
                        </p>
                    </div>
                </motion.div>

                {/* Wisata 3 */}
                <motion.div
                    className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={kawasanWisata}
                        alt="Wisata Desa"
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold">
                            Kawasan Wisata Desa
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                            Destinasi wisata desa yang ramah keluarga dan masyarakat.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="text-center mt-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <a href="https://sites.google.com/view/wisatadesaallakuang" target="_blank" className="cursor-pointer px-6 py-4 bg-[#30364F] text-white rounded-lg hover:bg-[#1f2436] transition">
                    Lihat Semua Wisata
                </a>
            </motion.div>
        </div >
    )
}

export default Wisata