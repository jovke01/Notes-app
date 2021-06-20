
import { useParams } from "react-router"
const Note = ({ note }) => {
    const { id } = useParams()
    console.log(id);
    return (
        <div className="note-preview" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
        </div>
    )
}

export default Note
