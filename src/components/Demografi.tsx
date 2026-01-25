import { Mars, UsersRound, Venus } from "lucide-react"

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
        </div>
    )
}

export default Demografi