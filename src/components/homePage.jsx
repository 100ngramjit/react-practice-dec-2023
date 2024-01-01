import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [inpVal, setInpVal] = useState("");
  const [inpErr, setInpErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Array of promises representing multiple API calls
        const promises = [
          axios.get("https://jsonplaceholder.typicode.com/posts"),
          axios.get("https://jsonplaceholder.typicode.com/albums"),
        ];

        // Use Promise.all to wait for all promises to resolve
        const [response1, response2] = await Promise.all(promises);
        console.log("promises", promises);
        setIsFetched(true);
        // Update state with data
        setData1(response1.data);
        setData2(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const numberRegex = /^[1-9][0-9]?$|^100$/;
          if (numberRegex.test(inpVal)) {
            navigate(`/details/${inpVal}`);
          } else {
            setInpErr("error");
          }
        }}
      >
        {inpErr && (
          <div style={{ color: "red" }}> Enter a Valid ID from 1-100 !</div>
        )}
        <input
          type="text"
          value={inpVal}
          placeholder="Enter a Id "
          onChange={(e) => {
            setInpVal(e.target.value);
            setInpErr("");
          }}
        />
        <button type="submit">goto link</button>
      </form>
      {isFetched ? (
        <div>
          <h1>Data from API 1</h1>
          <pre>{JSON.stringify(data1, null, 2)}</pre>

          <h1>Data from API 2</h1>
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
      ) : (
        <ClipLoader color="green" size={200} />
      )}
    </div>
  );
}

export default HomePage;
