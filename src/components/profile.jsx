import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function ProfilePage() {
  // Get the userId param from the URL.
  let { Id } = useParams();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Array of promises representing multiple API calls
        const promises = [
          axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`),
          axios.get(`https://jsonplaceholder.typicode.com/albums/${Id}`),
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
      <h1>ID : {Id}</h1>
      {isFetched ? (
        <div>
          <h2>Data from API 1 (posts)</h2>
          <pre>{JSON.stringify(data1, null, 2)}</pre>

          <h2>Data from API 2 (albums)</h2>
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
      ) : (
        <ClipLoader color="green" size={200} />
      )}
    </div>
  );
}
