import { Mars, UsersRound, Venus } from "lucide-react"
import petaDesa from "../images/peta-desa.png"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
}

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
}

const Demografi = () => {
    return (
        <div id="Demografi_Desa" className="px-5 pb-5 pt-20">
            {/* ================= DEMOGRAFI ================= */}
            <motion.h2
                className="text-5xl font-bold text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Demografi Desa
            </motion.h2>

            <motion.div
                className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
            />

            <motion.div
                className="grid md:grid-cols-4 gap-6 text-center mt-10"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {[
                    { icon: <UsersRound />, value: "3.206", label: "Jumlah Penduduk" },
                    { icon: <Mars />, value: "1.597", label: "Laki-laki" },
                    { icon: <Venus />, value: "1.609", label: "Perempuan" },
                    { icon: <UsersRound />, value: "901", label: "Kepala Keluarga" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="p-5 rounded-lg shadow-lg bg-[#30364F] cursor-pointer hover:scale-105 border-3 border-transparent hover:border-[#ACBAC4] transition-all text-white"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-5 bg-linear-to-br from-[#ACBAC4] to-[#E1D9BC] text-black w-max rounded-lg m-auto flex items-center justify-center">
                            {item.icon}
                        </div>

                        <p className="text-3xl font-bold mt-5">{item.value}</p>
                        <p className="text-[#E1D9BC] text-xl mt-2">{item.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* ================= PETA ================= */}
            <motion.h2
                className="text-5xl font-bold text-center mt-20"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Peta Wilayah Desa
            </motion.h2>

            <motion.div
                className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
            />

            <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
                <motion.img
                    src={petaDesa}
                    alt="Peta Wilayah Desa"
                    className="w-full max-w-4xl mx-auto"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                />

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="max-w-3xl mx-auto border-2 border-[#30364F] rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Informasi Geografis</h2>

                        <ul className="space-y-4 text-gray-700">
                            <li><b>Luas Wilayah:</b> ±458 hektar</li>
                            <li><b>Pola Permukiman:</b> Terkonsentrasi di wilayah tengah desa</li>
                            <li><b>Jaringan Jalan:</b> Jalan utama dan jalan lingkungan</li>
                            <li><b>Kondisi Wilayah:</b> Permukiman, lahan pertanian, dan kawasan non-permukiman</li>
                            <li><b>Skala Peta:</b> 1 : 9.000</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* ================= VISI MISI ================= */}
            <motion.h1
                className="text-5xl font-bold text-center mb-4 pt-20"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Visi dan Misi Desa
            </motion.h1>

            <motion.div
                className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
            />

            <motion.div
                className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto text-center border mt-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <p className="text-xl font-semibold leading-relaxed">
                    “Menjadikan Masyarakat Desa Allakuang yang Religius, Berkarakter,
                    Cerdas, Sehat, dan Sejahtera.”
                </p>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 gap-8 mt-16"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {[
                    "Mengaktifkan kegiatan keagamaan sebagai sumber pengetahuan dan inspirasi masyarakat.",
                    "Meningkatkan pengetahuan dan keterampilan perangkat desa dalam memberikan pelayanan prima.",
                    "Mengefektifkan komunikasi dengan seluruh komponen masyarakat desa.",
                    "Mengoptimalkan pelayanan perangkat desa kepada masyarakat secara prima.",
                    "Meningkatkan pemberdayaan masyarakat dalam sektor ekonomi, sosial, budaya, pertahanan, dan keamanan.",
                    "Meningkatkan pelayanan kesehatan melalui gerakan hidup bersih dan tanggap terhadap gangguan kesehatan.",
                    "Meningkatkan kecerdasan masyarakat melalui pendidikan dan pelatihan keterampilan.",
                    "Mengembangkan potensi pertanian, peternakan, dan industri pengrajin batu.",
                    "Menjadikan BUMDes Allakuang lebih mandiri dan mampu berkolaborasi lintas sektor.",
                    "Meningkatkan pembangunan desa melalui perbaikan sarana dan prasarana umum.",
                ].map((misi, index) => (
                    <motion.div
                        key={index}
                        className="cursor-pointer bg-white rounded-xl shadow-lg p-6 flex gap-4 hover:shadow-2xl transition"
                        variants={fadeUp}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#30364F] text-white flex items-center justify-center font-bold">
                                {index + 1}
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            {misi}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Demografi