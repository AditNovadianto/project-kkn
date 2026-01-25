import { Hammer, PawPrint, Wheat } from "lucide-react"

const Potensi = () => {
    return (
        <div id="Potensi_Desa" className="px-5 pt-20 pb-5">
            <h2 className="text-5xl font-bold text-center mb-4">
                Potensi Desa
            </h2>

            <div className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Pengrajin Batu */}
                <div className="cursor-pointer hover:scale-105 group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:bg-[#E1D9BC] transition-all">
                        <Hammer className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Pengrajin Batu
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Potensi batu gunung yang dikelola masyarakat sebagai bahan
                        bangunan dan konstruksi lokal.
                    </p>

                    <span className="text-sm font-semibold text-[#30364F]">
                        Lihat Detail →
                    </span>
                </div>

                {/* Pertanian */}
                <div className="cursor-pointer hover:scale-105 group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:bg-[#E1D9BC] transition-all">
                        <Wheat className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Pertanian
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Komoditas utama padi sawah dengan luas lahan ±340 Ha yang
                        didukung sistem irigasi teknis.
                    </p>

                    <span className="text-sm font-semibold text-[#30364F]">
                        Lihat Detail →
                    </span>
                </div>

                {/* Peternakan */}
                <div className="cursor-pointer hover:scale-105 group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:bg-[#E1D9BC] transition-all">
                        <PawPrint className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Peternakan
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Peternakan ayam kampung, broiler, bebek, sapi, dan kambing
                        skala rumah tangga dan kelompok.
                    </p>

                    <span className="text-sm font-semibold text-[#30364F]">
                        Lihat Detail →
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Potensi