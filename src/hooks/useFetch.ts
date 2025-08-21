import { useState, useEffect } from 'react';

export const useFetch = (url: string, fakeData: {} = {}) => {

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(fakeData);


  useEffect(() => {

    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal, })
      .then(res => {
        if (res.status === 404) {
          console.error(res);
          window.location.href = "/notfound";
        }
        if (!res.ok) {
          throw Error("Could not connect to the server");
        }
        return res.json();
      }).then((data) => {
        setData(data);
        setIsPending(false);
      }).catch(err => {
        if (err.name === "AbortError") {
          setError(err.message);
          console.error("Fetch Aborted.");
          throw Error("Fetch Aborted.");
        } else {
          setError(err.message);
          throw Error("An error occurred while trying to fetch from the remote server.");
        }
      });

    return () => abortCont.abort();
  }, [url,]);

  return { isPending, error, data, };
};
