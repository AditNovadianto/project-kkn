import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
}

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
}

const Kontak = () => {
    return (
        <div id="Kontak" className="overflow-hidden bg-[#30364F] px-5 pt-20 pb-10">
            {/* ================= HEADER ================= */}
            <motion.h2
                className="text-5xl text-[#F0F0DB] font-bold text-center mb-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Kontak Desa
            </motion.h2>

            <motion.div
                className="w-32 h-2 rounded-full bg-linear-to-r from-[#E1D9BC] to-[#ACBAC4] mx-auto mb-12"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ originX: 0 }}
            />

            <motion.p
                className="text-gray-200 text-center max-w-3xl mx-auto mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Informasi dan layanan resmi Pemerintah Desa Allakuang
                untuk masyarakat dan pengunjung.
            </motion.p>

            {/* ================= CONTENT ================= */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Informasi Kontak */}
                <motion.div
                    className="bg-[#F0F0DB] rounded-xl shadow-lg p-6"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-[#30364F]">
                        Informasi Kontak
                    </h3>

                    <ul className="space-y-4 text-gray-700">
                        <li>
                            <b>Alamat Kantor Desa:</b><br />
                            Desa Allakuang, Kecamatan Maritengngae,<br />
                            Kabupaten Sidenreng Rappang,<br />
                            Provinsi Sulawesi Selatan
                        </li>

                        <li>
                            <b>Jam Pelayanan:</b><br />
                            Senin – Jumat<br />
                            08.00 – 16.00 WITA
                        </li>
                    </ul>
                </motion.div>

                {/* Lokasi Desa */}
                <motion.div
                    className="bg-[#F0F0DB] rounded-xl shadow-lg p-6"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-[#30364F]">
                        Lokasi Desa
                    </h3>

                    <div className="w-full h-64 rounded-lg overflow-hidden">
                        <iframe
                            title="Lokasi Desa Allakuang"
                            src="https://www.google.com/maps?q=Desa%20Allakuang%20Maritengngae%20Sidenreng%20Rappang&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>
            </div>

            {/* ================= CLOSING ================= */}
            <motion.div
                className="text-center mt-14"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-lg font-semibold text-[#F0F0DB]">
                    Pemerintah Desa Allakuang siap melayani masyarakat
                    dengan terbuka, transparan, dan profesional.
                </p>
            </motion.div>
        </div>
    )
}

export default Kontak
