import logo from "../images/logo.png"
import { ChevronDown } from "lucide-react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [section, setSection] = useState("Beranda")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="z-100 fixed top-0 left-0 right-0 flex items-center justify-between pr-5 py-2 bg-[#F0F0DB] shadow-md">
            <img className={`${isScrolled ? "w-80" : "w-100"} transition-all`} src={logo} alt="" />

            <div className="flex items-center gap-10 font-semibold">
                <a href="#Beranda" onClick={() => setSection("Beranda")} className={`${section === "Beranda" ? "bg-[#30364F] text-white hover:bg-[#4d5268]" : "bg-[#F0F0DB] hover:bg-[#E1D9BC]"} transition-all text-center px-3 py-2 rounded-lg`}>Beranda</a>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => setSection("Profil Desa")}
                                className={`${section === "Profil Desa" || section === "Demografi Desa" || section === "Pemerintah Desa" || section === "Potensi Desa" ? "bg-[#30364F] text-white hover:bg-[#4d5268]" : "bg-[#F0F0DB] hover:bg-[#E1D9BC] data-[state=open]:bg-[#E1D9BC]"} group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200`}
                            >
                                Profil Desa

                                <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </NavigationMenuTrigger>

                            <NavigationMenuContent
                                className="absolute mt-2 min-w-50  bg-white border border-gray-200 rounded-lg shadow-xl p-2 flex flex-col gap-1"
                            >
                                <NavigationMenuLink
                                    className="cursor-pointer px-3 py-2 rounded-md transition-all duration-150 hover:bg-gray-100 hover:text-gray-900"
                                    href="#Beranda"
                                >
                                    Profil Desa
                                </NavigationMenuLink>

                                <NavigationMenuLink
                                    className="cursor-pointer px-3 py-2 rounded-md transition-all duration-150  hover:bg-gray-100 hover:text-gray-900"
                                    href="#Demografi_Desa"
                                    onClick={() => setSection("Demografi Desa")}
                                >
                                    Demografi Desa
                                </NavigationMenuLink>

                                <NavigationMenuLink
                                    className="cursor-pointer px-3 py-2 rounded-md transition-all duration-150  hover:bg-gray-100 hover:text-gray-900"
                                    href="#Pemerintahan_Desa"
                                    onClick={() => setSection("Pemerintahan Desa")}
                                >
                                    Pemerintahan Desa
                                </NavigationMenuLink>

                                <NavigationMenuLink
                                    className="cursor-pointer px-3 py-2 rounded-md transition-all duration-150  hover:bg-gray-100 hover:text-gray-900"
                                    href="#Potensi_Desa"
                                    onClick={() => setSection("Potensi Desa")}
                                >
                                    Potensi Desa
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <a href="#Wisata_Desa" onClick={() => setSection("Wisata Desa")} className={`${section === "Wisata Desa" ? "bg-[#30364F] text-white hover:bg-[#4d5268]" : "bg-[#F0F0DB] hover:bg-[#E1D9BC]"} transition-all text-center px-3 py-2 rounded-lg`}>Wisata Desa</a>

                <a href="#Sarana_dan_Prasarana_Desa" onClick={() => setSection("Sarana dan Prasarana Desa")} className={`${section === "Sarana dan Prasarana Desa" ? "bg-[#30364F] text-white hover:bg-[#4d5268]" : "bg-[#F0F0DB] hover:bg-[#E1D9BC]"} transition-all text-center px-3 py-2 rounded-lg`}>Sarana dan Prasarana Desa</a>

                <a href="#Galeri_Desa" onClick={() => setSection("Galeri Desa")} className={`${section === "Galeri Desa" ? "bg-[#30364F] text-white hover:bg-[#4d5268]" : "bg-[#F0F0DB] hover:bg-[#E1D9BC]"} transition-all text-center px-3 py-2 rounded-lg`}>Galeri Desa</a>

                <a href="#Kontak" onClick={() => setSection("Kontak")} className={`${section === "Kontak" ? "bg-[#30364F] text-white hover:bg-[#4d5268]" : "bg-[#F0F0DB] hover:bg-[#E1D9BC]"} transition-all text-center px-3 py-2 rounded-lg`}>Kontak</a>
            </div>
        </div>
    )
}

export default Navbar