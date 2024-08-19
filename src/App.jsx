import Api from './components/Api'
import { useFetch } from './useFetch'
import { fetchData } from './fetchData'
import { Suspense } from 'react'

const apiData = fetchData('https://jsonplaceholder.typicode.com/users')

function App() {
  // const { data, loading, error, handleCancelRequest } = useFetch(
  //   'https://jsonplaceholder.typicode.com/users'
  // )
  const data = apiData.read()

  return (
    <>
      <h1>Add an API</h1>
      <div className="Api">
        <Api />
      </div>
      <br />
      <h2>Fetch Like a PRO</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
      {/* <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className="Api">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div> */}
    </>
  )
}

export default App
