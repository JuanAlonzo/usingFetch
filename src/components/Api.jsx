import { useState, useEffect } from 'react'

const Api = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://spapi.dev/api/characters')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data)
      })
      .catch((error) => {
        console.error('Error al tratar de obtener los datos', error)
      })
  }, [])

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          <p>{item.sex}</p>
        </div>
      ))}
    </>
  )
}

export default Api
