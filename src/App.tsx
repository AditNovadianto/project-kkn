import Beranda from "./components/Beranda"
import Demografi from "./components/Demografi"
import Navbar from "./components/Navbar"
import Pemerintahan from "./components/Pemerintahan"
import Potensi from "./components/Potensi"
import SaranaPrasarana from "./components/SaranaPrasarana"
import Wisata from "./components/Wisata"

const App = () => {
  return (
    <div>
      <Navbar />

      <Beranda />

      <Demografi />

      <Pemerintahan />

      <Potensi />

      <Wisata />

      <SaranaPrasarana />
    </div>
  )
}

export default App