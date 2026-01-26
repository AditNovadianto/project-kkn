import { Mars, UsersRound, Venus } from "lucide-react"
import petaDesa from "../images/peta-desa.png"

const Demografi = () => {
    return (
        <div id="Demografi_Desa" className="px-5 pb-5 pt-20">
            <h2 className="text-5xl font-bold text-center">Demografi Desa</h2>

            <div className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"></div>

            <div className="grid md:grid-cols-4 gap-6 text-center mt-10">
                <div className="p-5 rounded-lg shadow-lg bg-[#30364F] cursor-pointer hover:scale-105 border-3 border-transparent hover:border-[#ACBAC4] transition-all text-white">
                    <div className="p-5 bg-linear-to-br from-[#ACBAC4] to-[#E1D9BC] text-black w-max rounded-lg m-auto flex items-center justify-center">
                        <UsersRound />
                    </div>

                    <p className="text-3xl font-bold mt-5">3.206</p>
                    <p className="text-[#E1D9BC] text-xl mt-2">Jumlah Penduduk</p>
                </div>

                <div className="p-5 rounded-lg shadow-lg bg-[#30364F] cursor-pointer hover:scale-105 border-3 border-transparent hover:border-[#ACBAC4] transition-all text-white">
                    <div className="p-5 bg-linear-to-br from-[#ACBAC4] to-[#E1D9BC] text-blue-500 w-max rounded-lg m-auto flex items-center justify-center">
                        <Mars />
                    </div>

                    <p className="text-3xl font-bold mt-5">1.597</p>
                    <p className="text-[#E1D9BC] text-xl mt-2">Laki-laki</p>
                </div>

                <div className="p-5 rounded-lg shadow-lg bg-[#30364F] cursor-pointer hover:scale-105 border-3 border-transparent hover:border-[#ACBAC4] transition-all text-white">
                    <div className="p-5 bg-linear-to-br from-[#ACBAC4] to-[#E1D9BC] text-pink-500 w-max rounded-lg m-auto flex items-center justify-center">
                        <Venus />
                    </div>

                    <p className="text-3xl font-bold mt-5">1.609</p>
                    <p className="text-[#E1D9BC] text-xl mt-2">Perempuan</p>
                </div>

                <div className="p-5 rounded-lg shadow-lg bg-[#30364F] cursor-pointer hover:scale-105 border-3 border-transparent hover:border-[#ACBAC4] transition-all text-white">
                    <div className="p-5 bg-linear-to-br from-[#ACBAC4] to-[#E1D9BC] text-black w-max rounded-lg m-auto flex items-center justify-center">
                        <UsersRound />
                    </div>

                    <p className="text-3xl font-bold mt-5">901</p>
                    <p className="text-[#E1D9BC] text-xl mt-2">Kepala Keluarga</p>
                </div>
            </div>

            <h2 className="text-5xl font-bold text-center mt-20">Peta Wilayah Desa</h2>

            <div className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"></div>

            <div className="flex items-center gap-5 mt-10">
                <img src={petaDesa} alt="Peta Wilayah Desa" className="w-full max-w-4xl mx-auto" />

                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto border-2 border-[#30364F] rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">
                            Informasi Geografis
                        </h2>

                        <ul className="space-y-4 text-gray-700">
                            <li>
                                <b>Luas Wilayah:</b> ±458 hektar
                            </li>

                            <li>
                                <b>Pola Permukiman:</b> Terkonsentrasi di wilayah tengah desa
                            </li>

                            <li>
                                <b>Jaringan Jalan:</b> Jalan utama dan jalan lingkungan
                            </li>

                            <li>
                                <b>Kondisi Wilayah:</b> Permukiman, lahan pertanian, dan kawasan non-permukiman
                            </li>

                            <li>
                                <b>Skala Peta:</b> 1 : 9.000
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-5 pt-20 pb-5">
                {/* Header */}
                <h1 className="text-5xl font-bold text-center mb-4">
                    Visi dan Misi Desa
                </h1>

                <div className="w-30 h-2 rounded-full mt-5 bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3 m-auto"></div>

                {/* VISI */}
                <div className="mb-20 mt-10">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        Visi Desa Allakuang
                    </h2>

                    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto text-center border">
                        <p className="text-xl font-semibold leading-relaxed">
                            “Menjadikan Masyarakat Desa Allakuang yang <span className="text-[#30364F]">Religius</span>,
                            <span className="text-[#30364F]"> Berkarakter</span>,
                            <span className="text-[#30364F]"> Cerdas</span>,
                            <span className="text-[#30364F]"> Sehat</span>,
                            dan <span className="text-[#30364F]">Sejahtera</span>.”
                        </p>
                    </div>
                </div>

                {/* MISI */}
                <div>
                    <h2 className="text-2xl font-semibold text-center mb-10">
                        Misi Desa Allakuang
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
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
                            <div
                                key={index}
                                className="cursor-pointer bg-white rounded-xl shadow-lg p-6 flex gap-4 hover:shadow-2xl transition"
                            >
                                {/* Nomor */}
                                <div className="shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-[#30364F] text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-gray-700 leading-relaxed">
                                    {misi}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demografi