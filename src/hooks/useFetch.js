import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                if (data.length === 0) {
                    setIsEmpty(true)
                }
                setData(data)
            })
            .catch(err => console.log(err.message))
    }, [url])
    return { data, isLoading, isEmpty }
}

export default useFetch
