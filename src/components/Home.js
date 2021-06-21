import useFetchGet from "../hooks/useFetchGet"
import { Link } from "react-router-dom"
import emptyBox from '../assets/empty-box.png'
const Home = () => {
    const { data: notes, isLoading, isEmpty } = useFetchGet('http://localhost:8000/notes')
    console.log(notes);
    return (
        <div>
            <h2 className="title">All notes</h2>
            {isLoading && (<div> Loading... </div>)}

            {isEmpty && (<div className="no-notes">
                <h2>You don't have any notes</h2>
                <img src={emptyBox} alt="" />
                <button className="button"><Link to="/create">Add a note</Link></button>
            </div>)
            }
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
