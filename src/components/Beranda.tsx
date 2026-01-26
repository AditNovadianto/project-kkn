import desaAllakuang from "../images/desa-allakuang.jpg"
import { motion } from "framer-motion"

const Beranda = () => {
    return (
        <div id="Beranda" className="min-h-screen px-5 w-full flex items-center justify-center">
            <motion.div
                className="flex flex-col lg:flex-row mt-32 items-center gap-5 justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {/* Image */}
                <motion.img
                    src={desaAllakuang}
                    alt="Desa Allakuang"
                    className="w-full h-auto rounded-lg"
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Text */}
                <motion.div>
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Desa Allakuang
                    </motion.h1>

                    <motion.div
                        className="w-30 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3"
                        variants={{
                            hidden: { opacity: 0, scaleX: 0 },
                            visible: { opacity: 1, scaleX: 1 },
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ originX: 0 }}
                    />

                    <motion.p
                        className="text-xl font-semibold text-gray-700 mb-2"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        Kecamatan Maritengngae, Kabupaten Sidenreng Rappang
                    </motion.p>

                    <motion.p
                        className="italic text-lg text-gray-600 mb-6"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        “Religius, Berkarakter, Cerdas, Sehat, dan Sejahtera”
                    </motion.p>

                    <motion.p
                        className="text-gray-700 text-lg mb-8"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Desa Allakuang merupakan salah satu desa di Kecamatan Maritengngae,
                        Kabupaten Sidenreng Rappang, Provinsi Sulawesi Selatan. Terletak
                        sekitar ±5 km dari pusat pemerintahan kabupaten, desa ini memiliki
                        potensi unggulan di sektor pertanian, peternakan, pengrajin batu,
                        serta wisata alam dan budaya.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Beranda