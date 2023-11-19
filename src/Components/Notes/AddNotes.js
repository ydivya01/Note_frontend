import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddNotes() {
  const baseURL = "http://localhost:8000/api/notes";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        setTitle("");
        setDescription("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
        navigate('/home')
      } else {
        console.log("Failed to submit data ...noooooooooo!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Link to="/home" className="back-button">
        Back
      </Link>
      <form onSubmit={addNote}>
        <div className="" single-note>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="title"
            ></input>
          </div>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows="4"
              cols="50"
              className="description"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          value={submitted ? "Saving note...." : "Save Note"}
          disabled={submitted}
        ></input>
        <p className="text-center">
          {submitted && (
            <div className="success-message">Notes has been addedd </div>
          )}
        </p>
      </form>
    </div>
  );
}
