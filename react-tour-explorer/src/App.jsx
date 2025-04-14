import { useState, useEffect } from 'react'


//useState to store tours, pass loading, and error
function App() {
  const [tours, setTours] = useState([])      
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)   
 


//Fetch tours from API using useEffect
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project')
      .then((res) => res.json())
      .then((data) => {
        setTours(data)
        setLoading(false)
      })


      .catch(() => {
        setError('Error detected')
        setLoading(false)
      })
  }, [])


  return (
    <div>
      <h1>Available Tours</h1>
      {loading && <p>Loading tours...</p>}
      {error && <p>{error}</p>}
      {!loading && <p>{tours.length} tours available.</p>}


    </div>
  )
}

export default App
