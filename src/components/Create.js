import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const history = useHistory()
    const postNote = async () => {
        await fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body })
        })
        history.push("/")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postNote()
    }
    return (
        <div className="create">
            <h2>Create a new Note</h2>
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Note title" />
                <h3>Body</h3>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Note body" />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default Create
