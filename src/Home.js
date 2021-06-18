import { useState } from "react"

const Home = () => {
    // const [notes, setNotes] = useState([
    //     { title: "First note", id: 1, body: "Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat." },
    //     { title: "Second note", id: 2, body: "" },
    //     { title: "Third note", id: 3, body: "Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat." }

    // ])
    return (
        <div>
            <h2 className="title">All notes</h2>
            {/* {notes && notes.map((note) => {
                return (
                    <div className="note-preview" key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Home
