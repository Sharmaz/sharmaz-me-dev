import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [dev, setDev] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setDev(data);
        setloading(false);
      });
  }, [url]);

  return { dev, loading, error };
};

export default useFetch;
