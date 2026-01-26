import strukturOrganisasi from "../images/struktur-organisasi.png"
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

const Pemerintahan = () => {
    return (
        <div
            id="Pemerintahan_Desa"
            className="px-5 pb-20 pt-20"
        >
            {/* Header */}
            <motion.h2
                className="text-5xl text-center font-bold mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Pemerintahan Desa
            </motion.h2>

            <motion.div
                className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
            />

            {/* Pimpinan Desa */}
            <motion.div
                className="flex flex-col md:flex-row justify-center gap-6 mb-14 mt-10"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {[
                    ["Kepala Desa", "Zainuddin, SE"],
                    ["Sekretaris Desa", "Suarni Suparman, S.IPust"],
                ].map(([jabatan, nama]) => (
                    <motion.div
                        key={jabatan}
                        className="bg-[#E1D9BC] hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-xl w-full md:w-72 text-center"
                        variants={fadeScale}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="text-sm uppercase tracking-wide text-gray-600">
                            {jabatan}
                        </p>
                        <h3 className="text-xl font-bold mt-2">
                            {nama}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>

            {/* Struktur & Lembaga */}
            <motion.div
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {[
                    {
                        title: "Struktur Wilayah",
                        text: "Desa Allakuang terdiri dari 5 dusun yang masing-masing dipimpin oleh Kepala Dusun dan berperan aktif dalam pelayanan masyarakat.",
                    },
                    {
                        title: "Perangkat Desa",
                        text: "Pemerintahan desa didukung oleh perangkat desa yang terdiri dari Kasi, Kaur, dan staf administrasi untuk menunjang pelayanan publik.",
                    },
                    {
                        title: "Lembaga Desa",
                        text: "Lembaga desa yang aktif antara lain BPD, PKK, Karang Taruna, dan BUMDes sebagai mitra pemerintah desa.",
                    },
                ].map((item) => (
                    <motion.div
                        key={item.title}
                        className="bg-white hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-lg"
                        variants={fadeUp}
                        transition={{ duration: 0.4 }}
                    >
                        <h4 className="font-bold text-lg mb-2">
                            {item.title}
                        </h4>
                        <p className="text-gray-700">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Struktur Organisasi */}
            <motion.img
                src={strukturOrganisasi}
                alt="Struktur Organisasi Desa"
                className="w-full max-w-4xl mx-auto mt-10"
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            />
        </div>
    );
};

export default Pemerintahan;
