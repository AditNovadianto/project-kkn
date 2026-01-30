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

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/6281344393457"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:scale-110 transition"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 fill-white"
                                >
                                    <title>WhatsApp</title>
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
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
            </motion.div>
        </div>
    )
}

export default Kontak
