import useFetch from "./useFetch"
import { Link } from "react-router-dom"
const Home = () => {

    const { data: notes, isLoading } = useFetch('http://localhost:8000/notes')
    return (
        <div>
            <h2 className="title">All notes</h2>
            {isLoading && (<div> Loading... </div>)}
            {notes && (notes.map(note => (
                <Link to={`/notes/${note.id}`} key={note.id}>
                    <div className="note-preview"  >
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                    </div>
                </Link>
            )))
            }

        </div >
    )
}

export default Home
