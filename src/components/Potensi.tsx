import { Hammer, PawPrint, Wheat } from "lucide-react"
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

const Potensi = () => {
    return (
        <div id="Potensi_Desa" className="px-5 pt-20 pb-5">
            {/* Header */}
            <motion.h2
                className="text-5xl font-bold text-center mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Potensi Desa
            </motion.h2>

            <motion.div
                className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto mb-10"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
            />

            {/* Cards */}
            <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Pengrajin Batu */}
                <motion.div
                    className="cursor-pointer hover:scale-105 group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:bg-[#E1D9BC] transition-all">
                        <Hammer className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Pengrajin Batu
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Potensi batu gunung yang dikelola masyarakat sebagai bahan
                        bangunan dan konstruksi lokal.
                    </p>

                    <span className="text-sm font-semibold text-[#30364F]">
                        Lihat Detail →
                    </span>
                </motion.div>

                {/* Pertanian */}
                <motion.div
                    className="cursor-pointer hover:scale-105 group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:bg-[#E1D9BC] transition-all">
                        <Wheat className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Pertanian
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Komoditas utama padi sawah dengan luas lahan ±340 Ha yang
                        didukung sistem irigasi teknis.
                    </p>

                    <span className="text-sm font-semibold text-[#30364F]">
                        Lihat Detail →
                    </span>
                </motion.div>

                {/* Peternakan */}
                <motion.div
                    className="cursor-pointer hover:scale-105 group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:bg-[#E1D9BC] transition-all">
                        <PawPrint className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Peternakan
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Peternakan ayam kampung, broiler, bebek, sapi, dan kambing
                        skala rumah tangga dan kelompok.
                    </p>

                    <span className="text-sm font-semibold text-[#30364F]">
                        Lihat Detail →
                    </span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Potensi