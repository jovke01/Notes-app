import useFetch from "./useFetch";
import { useParams } from "react-router"
const Note = () => {
    const { id } = useParams();
    const { data: note, isLoading } = useFetch('http://localhost:8000/notes/' + id)
    return (
        <div>

            {isLoading && (<div> Loading... </div>)}
            {note && (<div className="note-details" key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
            </div>)}

        </div>
    )

}
export default Note
