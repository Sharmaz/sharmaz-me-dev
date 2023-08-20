import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [dev, setDev] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     seterror(data.error);
    //     setDev(data);
    //     setloading(false);
    //   });
    if (!url) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const json = await response.json();
        setDev(json);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { dev, loading, error };
};

export default useFetch;
