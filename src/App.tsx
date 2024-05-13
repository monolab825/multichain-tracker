import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import TokenList from "./components/TokenList"
import Footer from "./components/Footer"
function App() {

  const [accountAddress, setAccountAddress] = useState('')
  const [showAssets, setShowAssets] = useState(false)
  
  const handleSearch = () => {
    setAccountAddress(document.getElementById("accountAddress").value);
    setShowAssets(true);
  }
  
  return (
    <>
    <div className="m-3">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <main className="flex-grow min-h-12">
        {showAssets && <TokenList accountAddress={accountAddress}/>}
      </main>
      <Footer />
    </div>  
    </>
  )
}

export default App
