import { motion } from "framer-motion"

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const fromTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
}

const fromBottom = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const fromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
}

const fromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
}

const Batas = () => {
    return (
        <div id="Batas_Desa" className="px-5 pt-20 pb-10">
            {/* ================= HEADER ================= */}
            <motion.h2
                className="text-5xl font-bold text-center mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Batas Wilayah Desa
            </motion.h2>

            <motion.div
                className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-12"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ originX: 0 }}
            />

            <motion.p
                className="text-gray-700 text-center max-w-3xl mx-auto mb-16"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Desa Allakuang memiliki batas wilayah administratif yang jelas
                dengan desa dan kelurahan di sekitarnya sebagai berikut:
            </motion.p>

            {/* ================= DESKTOP (KOMPAS) ================= */}
            <div className="relative max-w-4xl mx-auto h-105 hidden md:block">
                {/* Tengah */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#30364F] text-[#F0F0DB] px-8 py-6 rounded-2xl shadow-xl text-center">
                        <h3 className="text-xl font-bold">Desa Allakuang</h3>
                        <p className="text-sm mt-1">Kecamatan Maritengngae</p>
                    </div>
                </div>

                {/* Utara */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    variants={fromTop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Utara</p>

                        <p className="text-base font-semibold">Desa Tanete</p>
                    </div>
                </motion.div>

                {/* Selatan */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    variants={fromBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Selatan</p>

                        <p className="text-base font-semibold">Kel. To'dang Pulu</p>

                        <p className="text-sm text-gray-600">Kec. Tallu Limpoe</p>
                    </div>
                </motion.div>

                {/* Barat */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                    variants={fromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Barat</p>

                        <p className="text-base font-semibold">Desa Takkalasi</p>
                    </div>
                </motion.div>

                {/* Timur */}
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Timur</p>

                        <p className="text-base font-semibold">Kel. Arateng</p>

                        <p className="text-sm text-gray-600">Kec. Tallu Limpoe</p>
                    </div>
                </motion.div>
            </div>

            {/* ================= MOBILE (STACK) ================= */}
            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto md:hidden">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Utara</p>

                        <p className="text-base font-semibold">Desa Tanete</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Timur</p>

                        <p className="text-base font-semibold">Kel. Arateng</p>

                        <p className="text-sm text-gray-600">Kec. Tallu Limpoe</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Selatan</p>

                        <p className="text-base font-semibold">Kel. To'dang Pulu</p>

                        <p className="text-sm text-gray-600">Kec. Tallu Limpoe</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-gray-500">Barat</p>

                        <p className="text-base font-semibold">Desa Takkalasi</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Batas
