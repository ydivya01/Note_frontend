import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateNotes() {
    const {id} = useParams()
    const navigate = useNavigate()
  const baseURL = `http://localhost:8000/api/notes/${id}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);

        // setIsLoading(false);
      } catch (error) {
        // setError("Error Fetching data, Please try later");
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);



  const updateNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        // setTitle("");
        // setDescription("");
        setSubmitted(true);
        navigate('/home')
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log("Failed to submit data ...noooooooooo!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeNote = async (e)=>{
    e.preventDefault()
    try{
        const response = await fetch(baseURL, {
            method:'DELETE'
        })
        if(response.ok){
          alert('Note Deleted')
          
            navigate('/home')
        }
    }catch(error){

    }
  }

  return (
    <div>
        
     
      <div className="breadcrump-nav">
            {/* <Link to='/' className="back-button"></Link>  */}
            <button  onClick={removeNote} className="back-button">Delete Note</button>
            <Link to="/home">
        <button className="back-button">Back</button>
        
        
      </Link>

        </div>
      <form onSubmit={updateNote}>
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
          value={submitted ? "Updating note...." : "Update Note"}
          disabled={submitted}
        ></input>
        <p className="text-center">
          {submitted && (
            <div className="success-message">Notes has been addedd</div>
          )}
        </p>
      </form>
    </div>
  );
}
