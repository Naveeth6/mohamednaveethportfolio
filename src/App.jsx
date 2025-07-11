import {MainPage} from "./Page/MainPage.jsx";
import Loadernew from "./Loader/Loadernew.jsx";
import {useEffect, useState} from "react";


function App(){
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },6000)
  }, [])
  return(<>

        {loading ? <Loadernew/> : <MainPage/>}
      </>
  )
}
export default App
