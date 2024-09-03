import { useState } from "react";
import Navbar from "./Components/Navbar";
import Newscontainer from "./Components/Newscontainer";


function App() {
  // filter category wise so we create useSate
  const[category,setCategory] = useState('general')
  // filter Country wise so we create useSate
  const [country,setCountry] = useState('us')
  // set pagelength so we create useSate
  const[page,setPage]=useState(1)
  // Pass Query so we create useSate
  const[query,setQuery]=useState('')
  

  return (
   <>
   {/* send props to navbar for setCategory setCountry and setQuery */}
   <Navbar setCategory={setCategory} setCountry={setCountry} setQuery={setQuery} query={query} />
   {/* send props category,country,setPage function,and query */}
   <Newscontainer category={category} country={country} page={page} setPage={setPage} query={query}/>
   </>
  );
}

export default App;
