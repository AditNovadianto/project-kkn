import saranaSekolah from "../images/sarana-sekolah.webp"
import saranaKesehatan from "../images/sarana-kesehatan.jfif"
import saranaIbadah from "../images/sarana-ibadah.jfif"
import saranaInfrastruktur from "../images/sarana-infrastruktur.jpg"

const SaranaPrasarana = () => {
    return (
        <div id="Sarana_dan_Prasarana_Desa" className="px-5 pt-20 pb-5">
            <h2 className="text-5xl font-bold text-center mb-4">
                Sarana dan Prasarana Desa
            </h2>

            <div className="w-32 h-2 rounded-full bg-linear-to-r from-[#30364F] to-[#ACBAC4] mx-auto mb-12"></div>

            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Desa Allakuang didukung oleh berbagai sarana dan prasarana
                untuk menunjang pelayanan publik dan kesejahteraan masyarakat.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
                {/* Pendidikan */}
                <div className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <img
                        src={saranaSekolah}
                        alt="Sarana Pendidikan"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Pendidikan
                        </h3>
                        <p className="text-gray-700">
                            Tersedia TK, SD, SMP, SMA, serta Perpustakaan Desa
                            untuk mendukung pendidikan masyarakat.
                        </p>
                    </div>
                </div>

                {/* Kesehatan */}
                <div className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <img
                        src={saranaKesehatan}
                        alt="Sarana Kesehatan"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Kesehatan
                        </h3>
                        <p className="text-gray-700">
                            Fasilitas kesehatan berupa Puskesmas Pembantu,
                            Poliklinik, dan Posyandu.
                        </p>
                    </div>
                </div>

                {/* Ibadah */}
                <div className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <img
                        src={saranaIbadah}
                        alt="Sarana Ibadah"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Sarana Ibadah
                        </h3>
                        <p className="text-gray-700">
                            Terdapat 7 masjid dan 1 musholla yang aktif digunakan
                            oleh masyarakat desa.
                        </p>
                    </div>
                </div>

                {/* Infrastruktur */}
                <div className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <img
                        src={saranaInfrastruktur}
                        alt="Infrastruktur Jalan Desa"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                            Infrastruktur
                        </h3>
                        <p className="text-gray-700">
                            Jalan desa telah dilengkapi aspal dan beton untuk
                            menunjang mobilitas masyarakat.
                        </p>
                    </div>
                </div>
            </div>

            {/* Closing text */}
            <div className="mt-14 text-center">
                <p className="text-lg font-semibold text-gray-800">
                    Fasilitas desa terus dikembangkan untuk meningkatkan
                    kualitas pelayanan dan kesejahteraan masyarakat.
                </p>
            </div>
        </div>
    )
}

export default SaranaPrasarana