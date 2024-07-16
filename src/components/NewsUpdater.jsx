import { useState, useEffect } from "react"

function NewsUpdater(){
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)//flag

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);

            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
                const data = await response.json();
                setNews(data.slice(0, 5))
            }catch(error){
                console.error("Deu erro", error)
            }

            setIsLoading(false)
        }

        fetchNews()
        const interval = setInterval(fetchNews, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return(
        <div>
            <h1>Ultimas noticias</h1>
            {isLoading ? (
                <p>Carregando noticias</p>
            ) : (
                <ul>
                    {
                        news.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default NewsUpdater