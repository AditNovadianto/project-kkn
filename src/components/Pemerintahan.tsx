import strukturOrganisasi from "../images/struktur-organisasi.png"

const Pemerintahan = () => {
    return (
        <div
            id="Pemerintahan_Desa"
            className="px-5 pb-20 pt-20"
        >
            <h2 className="text-5xl text-center font-bold mb-4">
                Pemerintahan Desa
            </h2>

            <div className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-12"></div>

            {/* Pimpinan Desa */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-14">
                <div className="bg-[#E1D9BC] hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-xl w-full md:w-72 text-center">
                    <p className="text-sm uppercase tracking-wide text-gray-600">
                        Kepala Desa
                    </p>
                    <h3 className="text-xl font-bold mt-2">
                        Zainuddin, SE
                    </h3>
                </div>

                <div className="bg-[#E1D9BC] hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-xl w-full md:w-72 text-center">
                    <p className="text-sm uppercase tracking-wide text-gray-600">
                        Sekretaris Desa
                    </p>
                    <h3 className="text-xl font-bold mt-2">
                        Suarni Suparman, S.IPust
                    </h3>
                </div>
            </div>

            {/* Struktur & Lembaga */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-lg mb-2">
                        Struktur Wilayah
                    </h4>
                    <p className="text-gray-700">
                        Desa Allakuang terdiri dari <b>5 dusun</b> yang masing-masing dipimpin
                        oleh Kepala Dusun dan berperan aktif dalam pelayanan masyarakat.
                    </p>
                </div>

                <div className="bg-white hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-lg mb-2">
                        Perangkat Desa
                    </h4>
                    <p className="text-gray-700">
                        Pemerintahan desa didukung oleh perangkat desa yang terdiri dari
                        Kasi, Kaur, dan staf administrasi untuk menunjang pelayanan publik.
                    </p>
                </div>

                <div className="bg-white hover:scale-105 transition-all cursor-pointer p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-lg mb-2">
                        Lembaga Desa
                    </h4>
                    <p className="text-gray-700">
                        Lembaga desa yang aktif antara lain <b>BPD</b>, <b>PKK</b>,
                        <b> Karang Taruna</b>, dan <b>BUMDes</b> sebagai mitra pemerintah desa.
                    </p>
                </div>
            </div>

            <img src={strukturOrganisasi} alt="Struktur Organisasi Desa" className="w-full max-w-4xl mx-auto mt-10" />
        </div>
    );
};

export default Pemerintahan;
