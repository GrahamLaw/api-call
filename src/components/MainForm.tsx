import React, { useEffect, useState } from 'react';
import { fetchDataFromService1 } from '../services/apiService1'; // Import the first service API call
import { fetchDataFromService2 } from '../services/apiService2'; // Import the second service API call

const YourComponent = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch data from both services
    const fetchData = async () => {
      try {
        const [result1, result2] = await Promise.all([
          fetchDataFromService1(),
          fetchDataFromService2(),
        ]);
        setData1(result1); // Set data from the first service
        setData2(result2); // Set data from the second service
      } catch (err: unknown) {
        setError((err as Error).message); // Simplified error handling
      } finally {
        setLoading(false); // Set loading to false once both requests are complete
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Data from Service 1:</h1>
      <pre>{JSON.stringify(data1, null, 2)}</pre>

      <h1>Data from Service 2:</h1>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </div>
  );
};

export default YourComponent;
