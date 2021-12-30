import React, { useState, useEffect } from "react";
import { useRequest } from "../context/requestContainer";

const useApiResult = (request) => {
  const [url, options] = request;

  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requester = useRequest();

  useEffect(() => {
    const getdata = async () => {
      setResults(null);
      setLoading(true);

      try {
        const response = await requester(url, options);
        if (response.ok) {
          setResults(await response.json());
          setError(null);
        } else {
          setError(await response.text());
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getdata();
  }, [request, requester]);

  return [results, error, loading];
};

export default useApiResult;
