import logo from "../images/logo.png"
import { ChevronDown, Menu, X } from "lucide-react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [section, setSection] = useState("Beranda")
    const [isScrolled, setIsScrolled] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const [openProfil, setOpenProfil] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="z-100 fixed top-0 left-0 right-0 flex items-center justify-between pr-5 py-2 bg-[#F0F0DB] shadow-md">
            <a href="#">
                <img className={`${isScrolled ? "w-64 md:w-80" : "w-72 md:w-100"} transition-all`} src={logo} alt="" />
            </a>

            <div className="hidden xl:flex items-center gap-10 font-semibold">
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
                                    href="#Batas_Desa"
                                    onClick={() => setSection("Batas Desa")}
                                >
                                    Batas Desa
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

                                <NavigationMenuLink
                                    className="cursor-pointer px-3 py-2 rounded-md transition-all duration-150  hover:bg-gray-100 hover:text-gray-900"
                                    href="#Sejarah_Desa"
                                    onClick={() => setSection("Sejarah Desa")}
                                >
                                    Sejarah Desa
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

            <button onClick={() => setShowNavbar(!showNavbar)} className="block xl:hidden"><Menu size={30} /></button>

            <AnimatePresence>
                {showNavbar && (
                    <motion.div
                        className="fixed inset-0 z-50 xl:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setShowNavbar(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="absolute right-0 top-0 h-full w-72 bg-[#F0F0DB] p-6 shadow-xl"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-bold text-lg">Menu</span>
                                <button onClick={() => setShowNavbar(false)}>
                                    <X />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 font-semibold text-[#30364F]">
                                {/* Beranda */}
                                <a
                                    href="#Beranda"
                                    onClick={() => setShowNavbar(false)}
                                    className="px-3 py-2 rounded-md hover:bg-[#E1D9BC] transition"
                                >
                                    Beranda
                                </a>

                                {/* Profil Desa */}
                                <button
                                    onClick={() => setOpenProfil(!openProfil)}
                                    className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#E1D9BC] transition"
                                >
                                    Profil Desa
                                    <motion.span animate={{ rotate: openProfil ? 180 : 0 }}>
                                        <ChevronDown />
                                    </motion.span>
                                </button>

                                <AnimatePresence>
                                    {openProfil && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="ml-3 mt-1 flex flex-col gap-2 overflow-hidden border-l-2 border-[#ACBAC4] pl-3"
                                        >
                                            {[
                                                ["Profil Desa", "#Beranda"],
                                                ["Demografi Desa", "#Demografi_Desa"],
                                                ["Batas Desa", "#Batas_Desa"],
                                                ["Pemerintahan Desa", "#Pemerintahan_Desa"],
                                                ["Potensi Desa", "#Potensi_Desa"],
                                                ["Sejarah Desa", "#Sejarah_Desa"],
                                            ].map(([label, href]) => (
                                                <a
                                                    key={label}
                                                    href={href}
                                                    onClick={() => setShowNavbar(false)}
                                                    className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-[#E1D9BC] transition"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Other Menu */}
                                {[
                                    ["Wisata Desa", "#Wisata_Desa"],
                                    ["Sarana & Prasarana", "#Sarana_dan_Prasarana_Desa"],
                                    ["Galeri Desa", "#Galeri_Desa"],
                                    ["Kontak", "#Kontak"],
                                ].map(([label, href]) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={() => setShowNavbar(false)}
                                        className="px-3 py-2 rounded-md hover:bg-[#E1D9BC] transition"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar