import { useEffect, useState } from 'react'

const useFetchGet = (url) => {
    const [data, setData] = useState(null)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url)
                let data = await res.json()
                setIsLoading(false);
                if (data.length === 0) {
                    setIsEmpty(true)
                }
                setData(data)
            } catch (err) {

                console.error(err.message);
            }
        }
        getData();
    }, [url])
    return { data, isLoading, isEmpty }
}

export default useFetchGet
