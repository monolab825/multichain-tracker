import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import TokenList from "./components/TokenList"
import Footer from "./components/Footer"
function App() {

  const [accountAddress, setAccountAddress] = useState('')
  const [showAssets, setShowAssets] = useState(false)
  const [invalidAddress, setInvalidAddress] = useState(false)

  const handleSearch = () => {
    const inputValue = (document.getElementById('accountAddress') as HTMLInputElement).value
    if (inputValue.trim() !== "") {
      let regex = new RegExp(/^(0x)?[0-9a-fA-F]{40}$/);
      if (regex.test(inputValue) == true) {
        setAccountAddress(inputValue);
        setShowAssets(true);
        setInvalidAddress(false);
      } else {
        setInvalidAddress(true)
      }
    }
  }
  
  return (
    <>
    <div className="m-3">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {invalidAddress && (<div role="alert" className="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>Warning: Invalid account address!</span>
        </div>)
      }
      <main className="flex-grow min-h-12">
        {showAssets && <TokenList accountAddress={accountAddress}/>}
      </main>
      <Footer />
    </div>  
    </>
  )
}

export default App
