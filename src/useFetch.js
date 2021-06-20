import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setData(data)
            })
            .catch(err => console.log(err.message))
    }, [url])
    return { data, isLoading }
}

export default useFetch
