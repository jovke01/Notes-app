import useFetchGet from "../hooks/useFetchGet";
import { useParams } from "react-router"
import { useHistory } from "react-router-dom";
const Note = () => {
    const history = useHistory()
    const { id } = useParams();
    const { data: note, isLoading } = useFetchGet(`http://localhost:8000/notes/${id}`)
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:8000/notes/${id}`, {
                method: 'DELETE'
            })
            history.push('/')
        } catch (err) {
            console.error(JSON.stringify(err.message));
        }
    }
    return (
        <div>

            {isLoading && (<div> Loading... </div>)}
            {note && (<div className="note-details" key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
                <button className="button" onClick={handleDelete}>Delete note</button>
            </div>)}

        </div>
    )

}
export default Note
