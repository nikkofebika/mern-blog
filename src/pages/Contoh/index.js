import React, { useEffect, useState } from 'react'

const Contoh = () => {
    const [name, setName] = useState('nikko')
    let [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log('sinkronisasi ke local storage');
        document.title = name;
        return (() => {
            document.title = 'MERN - Blog'
        })
    }, [name])
    return (
        <div className="mt-5">
            <input type="text" placeholder="input apa aja dah serah" className="w-full p-3 border rounded border-gray-500" onChange={(e) => setName(e.target.value)} />
            <h1>{name}</h1>
        </div>
    )
}

export default Contoh
