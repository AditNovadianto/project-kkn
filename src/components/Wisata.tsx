import wisataAlam from "../images/wisata-alam.jpg"
import situsSejarah from "../images/situs-sejarah.jpeg"
import kawasanWisata from "../images/kawasan-wisata.jpg"

const Wisata = () => {
    return (
        <div id="Wisata_Desa" className="px-5 pt-20 pb-5">
            <h2 className="text-5xl font-bold text-center mb-4">
                Wisata Desa
            </h2>

            <div className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-12"></div>

            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Desa Allakuang memiliki potensi wisata alam, situs sejarah, dan kawasan
                wisata desa yang masih alami serta mudah diakses.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Wisata 1 */}
                <div className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={wisataAlam}
                        alt="Wisata Alam Allakuang"
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold">
                            Wisata Alam Allakuang
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                            Kawasan wisata alam dengan pemandangan asri dan udara sejuk.
                        </p>
                    </div>
                </div>

                {/* Wisata 2 */}
                <div className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={situsSejarah}
                        alt="Situs Sejarah Desa"
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold">
                            Situs Sejarah Desa
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                            Peninggalan sejarah yang menjadi identitas budaya desa.
                        </p>
                    </div>
                </div>

                {/* Wisata 3 */}
                <div className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={kawasanWisata}
                        alt="Wisata Desa"
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold">
                            Kawasan Wisata Desa
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                            Destinasi wisata desa yang ramah keluarga dan masyarakat.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <button className="cursor-pointer px-6 py-3 bg-[#30364F] text-white rounded-lg hover:bg-[#1f2436] transition">
                    Lihat Semua Wisata
                </button>
            </div>
        </div>
    )
}

export default Wisata