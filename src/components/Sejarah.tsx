import { motion } from "framer-motion"

const timeline = [
    {
        title: "Awal Terbentuknya Desa Allakuang",
        year: "Sebelum 1948",
        content: (
            <>
                <p>
                    Desa Allakuang awalnya merupakan sebuah <b>distrik</b> yang terdiri
                    dari <b>7 kampung</b>:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Kampung Allakuang Timoreng</li>
                    <li>Kampung Allakuang Wattang</li>
                    <li>Kampung Tanete</li>
                    <li>Kampung Benteng Lewo</li>
                    <li>Kampung Lautang Pittu</li>
                    <li>Kampung Takkalasi</li>
                    <li>Kampung Cempalagiang</li>
                </ul>
                <p className="mt-2">
                    Masing-masing kampung dipimpin oleh seorang <b>Kepala Kampung</b>.
                    Distrik Allakuang dipimpin oleh seorang Kepala Distrik
                    yang disebut <b>Matowa</b>.
                </p>
            </>
        ),
    },
    {
        title: "Masa Pemerintahan Distrik Allakuang",
        year: "1948 - 1961",
        content: (
            <>
                <p>Beberapa Matowa yang pernah memimpin Distrik Allakuang:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>H. Abd. Azis (hingga 1948)</li>
                    <li>H. Muh. Abd. Pabbaja (1948 - 1950)</li>
                    <li>H. Muh. Saiyad (1950 - 1953)</li>
                    <li>Abd. Samad (1953 - 1956)</li>
                    <li>Ismail (1956 - 1961)</li>
                </ul>
            </>
        ),
    },
    {
        title: "Perubahan Administratif Wilayah",
        year: "1959 - 1961",
        content: (
            <>
                <p>
                    Berdasarkan <b>Undang-Undang Nomor 18 Tahun 1959</b> tentang
                    pembentukan Kabupaten Dati II Sidenreng Rappang,
                    Distrik Allakuang mengalami perubahan administratif.
                </p>
                <p className="mt-2">
                    Pada tahun <b>1961</b>, Distrik Allakuang digabung
                    ke dalam Distrik Maritengngae bersama Distrik Guru
                    dan Distrik Watang Sidenreng.
                </p>
            </>
        ),
    },
    {
        title: "Pemekaran Menjadi Dua Desa",
        year: "1961",
        content: (
            <>
                <p>
                    Wilayah Distrik Allakuang kemudian dibagi menjadi <b>dua desa</b>:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Desa Allakuang</li>
                    <li>Desa Tanete Riase</li>
                </ul>
            </>
        ),
    },
    {
        title: "Pemerintahan Desa Awal",
        year: "1961 - 1965",
        content: (
            <>
                <p><b>Desa Allakuang</b> dipimpin oleh:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Husain Amir (1961 - 1963)</li>
                    <li>Lamba Laombang (1963 - 1965)</li>
                </ul>

                <p className="mt-4"><b>Desa Tanete Riase</b> dipimpin oleh:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Abd. Karim Jamal (1961 - 1963)</li>
                    <li>Mustafa Lainting (1963 - 1965)</li>
                </ul>
            </>
        ),
    },
]

const Sejarah = () => {
    return (
        <div id="Sejarah_Desa" className="px-5 pt-20 pb-10">
            {/* HEADER */}
            <motion.h2
                className="text-5xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Sejarah Desa
            </motion.h2>

            <motion.div
                className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-16"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ originX: 0 }}
            />

            {/* TIMELINE */}
            <div className="relative max-w-5xl mx-auto">
                {/* Garis Tengah */}
                <motion.div
                    className="absolute left-1/2 top-0 h-full w-1 bg-[#ACBAC4]"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ originY: 0 }}
                />

                <div className="space-y-20">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } items-center`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Card */}
                            <div className="w-full bg-white shadow-xl rounded-xl p-6 md:w-5/12">
                                <span className="text-sm font-semibold text-[#30364F]">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-bold mt-2 mb-3">
                                    {item.title}
                                </h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {item.content}
                                </div>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#30364F] border-4 border-[#E1D9BC]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sejarah
