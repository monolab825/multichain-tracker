import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import TokenList from "./components/TokenList"
import Footer from "./components/Footer"
function App() {

  //const [accountAddress, setAccountAddress] = useState(false)
  const [showAssets, setShowAssets] = useState(false)
  
  const handleSearch =  (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //setAccountAddress(document.getElementById("accountAddress").value);
    setShowAssets(true);
    console.log(e);  
  }
  
  return (
    <>
    <div className="m-3">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <main className="flex-grow min-h-12">
        {showAssets && <TokenList />}
      </main>
      <Footer />
    </div>  
    </>
  )
}

export default App
