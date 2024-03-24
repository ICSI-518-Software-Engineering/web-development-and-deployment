import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="container pl-2">
        <div className="mt-3">
            <h3 className='font-bold text-blue-700 pb-2'>Data Fetching Using React</h3>
            <table className='table'>
                <thead className='bg-blue-700 text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td className='pr-3 pb-1'>{user.id}</td>
                            <td className='pr-3 pb-1'>{user.name}</td>
                            <td className='pr-3 pb-1'>{user.username}</td>
                            <td className='pr-3 pb-1'>{user.email}</td>
                            <td className='pr-3 pb-1'>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FetchData