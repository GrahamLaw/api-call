import React, { useEffect, useState } from 'react';
import { fetchDataFromService1 } from '../services/apiService1'; // Import the first service API call


const SingleApiCall = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      // Function to fetch data from the service
      const fetchData = async () => {
        try {
          const result = await fetchDataFromService1();
          setData(result); // Set data from the service
        } catch (err: unknown) {
          setError((err as Error).message); // Simplified error handling
        } finally {
          setLoading(false); // Set loading to false once the request is complete
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div>
        <h1>Data from Service 1:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  
  export default SingleApiCall;
  