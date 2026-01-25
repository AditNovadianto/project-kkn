import desaAllakuang from "../images/desa-allakuang.jpg"

const Beranda = () => {
    return (
        <div id="Beranda" className="min-h-screen px-5 w-full flex items-center justify-center">
            <div className="flex items-center gap-5 justify-center">
                <img src={desaAllakuang} alt="Desa Allakuang" className="w-full h-auto rounded-lg" />

                <div>
                    <h1 className="text-5xl font-bold mb-4">
                        Desa Allakuang
                    </h1>

                    <div className="w-30 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] my-3"></div>

                    <p className="text-xl font-semibold text-gray-700 mb-2">
                        Kecamatan Maritengngae, Kabupaten Sidenreng Rappang
                    </p>

                    <p className="italic text-lg text-gray-600 mb-6">
                        “Religius, Berkarakter, Cerdas, Sehat, dan Sejahtera”
                    </p>

                    <p className="text-gray-700 text-lg mb-8">
                        Desa Allakuang merupakan salah satu desa di Kecamatan Maritengngae,
                        Kabupaten Sidenreng Rappang, Provinsi Sulawesi Selatan. Terletak
                        sekitar ±5 km dari pusat pemerintahan kabupaten, desa ini memiliki
                        potensi unggulan di sektor pertanian, peternakan, pengrajin batu,
                        serta wisata alam dan budaya.
                    </p>
                </div>
            </div>

            {/* <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
                    Profil Desa
                </button>
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
                    Potensi Desa
                </button>
            </div> */}
        </div>
    )
}

export default Beranda