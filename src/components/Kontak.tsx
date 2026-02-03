import { motion } from "framer-motion"
import { Facebook, Instagram } from "lucide-react"

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
                            Senin - Jumat<br />
                            08.00 - 16.00 WITA
                        </li>
                    </ul>

                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-[#30364F] mb-3">
                            Media Sosial Resmi
                        </h4>

                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/share/1AnXZtW2XC/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:scale-110 transition"
                            >
                                <Facebook />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/allakuangdesaku?igsh=azhnYnFzOWZybDRj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition"
                            >
                                <Instagram />
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://www.tiktok.com/@allakuang.desaku?_r=1&_t=ZS-93VMn9WAtMI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:scale-110 transition"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 fill-white"
                                >
                                    <title>TikTok</title>
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                        </div>
                    </div>
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

                <p className="text-lg font-semibold text-[#F0F0DB] mt-5">KKN-T UNHAS GEL.115</p>
            </motion.div>
        </div>
    )
}

export default Kontak
