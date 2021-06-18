import { useEffect, useState } from 'react'
const Home = () => {
    const [notes, setNotes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setNotes(data)
            })
    }, [])
    return (
        <div>
            <h2 className="title">All notes</h2>
            {isLoading && (<div> Loading... </div>)}
            {notes && notes.map((note) => {
                return (
                    <div className="note-preview" key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
