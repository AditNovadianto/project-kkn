import saranaSekolah from "../images/sarana-sekolah.webp"
import saranaKesehatan from "../images/sarana-kesehatan.jfif"
import saranaIbadah from "../images/sarana-ibadah.jfif"
import saranaInfrastruktur from "../images/sarana-infrastruktur.jpeg"
import saranaPasar from "../images/sarana-pasar.webp"
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

const SaranaPrasarana = () => {
    return (
        <div id="Sarana_dan_Prasarana_Desa" className="px-5 pt-20 pb-5">
            {/* Header */}
            <motion.h2
                className="text-5xl font-bold text-center mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Sarana dan Prasarana Desa
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
                Desa Allakuang didukung oleh berbagai sarana dan prasarana
                untuk menunjang pelayanan publik dan kesejahteraan masyarakat.
            </motion.p>

            {/* Cards */}
            <motion.div
                className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Pendidikan */}
                <motion.div
                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={saranaSekolah}
                        alt="Sarana Pendidikan"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Pendidikan
                        </h3>
                        <p className="text-gray-700">
                            Tersedia TK, SD, SMP, SMA, serta Perpustakaan Desa
                            untuk mendukung pendidikan masyarakat.
                        </p>
                    </div>
                </motion.div>

                {/* Kesehatan */}
                <motion.div
                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={saranaKesehatan}
                        alt="Sarana Kesehatan"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Kesehatan
                        </h3>
                        <p className="text-gray-700">
                            Fasilitas kesehatan berupa Puskesmas Pembantu,
                            Poliklinik, dan Pustu.
                        </p>
                    </div>
                </motion.div>

                {/* Ibadah */}
                <motion.div
                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={saranaIbadah}
                        alt="Sarana Ibadah"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Sarana Ibadah
                        </h3>
                        <p className="text-gray-700">
                            Terdapat 7 masjid dan 1 musholla yang aktif digunakan
                            oleh masyarakat desa.
                        </p>
                    </div>
                </motion.div>

                {/* Infrastruktur */}
                <motion.div
                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={saranaInfrastruktur}
                        alt="Infrastruktur Jalan Desa"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Infrastruktur
                        </h3>
                        <p className="text-gray-700">
                            Jalan desa telah dilengkapi aspal dan beton untuk
                            menunjang mobilitas masyarakat.
                        </p>
                    </div>
                </motion.div>

                {/* Pasar */}
                <motion.div
                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    variants={fadeScale}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={saranaPasar}
                        alt="Pasar Desa Allakuang"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Pasar
                        </h3>
                        <p className="text-gray-700">
                            Pasar tradisional yang menyediakan berbagai kebutuhan, yang buka selama 2 kali dalam seminggu dari hari Senin dan Jumat di jam 06:00 - 11:00 WITA.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Closing Text */}
            <motion.div
                className="mt-14 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-lg font-semibold text-gray-800">
                    Fasilitas desa terus dikembangkan untuk meningkatkan
                    kualitas pelayanan dan kesejahteraan masyarakat.
                </p>
            </motion.div>
        </div>
    )
}

export default SaranaPrasarana