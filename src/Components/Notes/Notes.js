import React, { useState, useEffect } from "react";
import { Link  } from "react-router-dom";

export default function Notes() {
 
  
  const baseURL = "http://localhost:8000/api/notes";

  //console.log(process.env.SERVER_URL_BACKEND)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError("Error Fetching data, Please try later");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  


  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="notes">
          <li className="'add-note-button">
            <Link to={`/add-note`}>+</Link>
          </li>
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/notes/${item._id}`}>
                <h3>{item.title}</h3>
                <p>
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>

              </Link>
            </li>
            
          

          ))}
        </ul>
        
        
      )}
      
    </div>
  );
}
