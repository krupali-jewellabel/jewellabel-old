import { useMemo } from "react";

/**
 * Splits an array into chunks based on number of columns
 * @param {Array} data - The array to be chunked
 * @param {number} columns - Number of columns or chunks desired
 * @returns {Array[]} - Chunked data
 */

const useChunkedData = (data, columns = 1) => {
  return useMemo(() => {
    if (!Array.isArray(data) || columns <= 0) return [];

    const chunkSize = Math.ceil(data.length / columns);
    const result = [];

    for (let i = 0; i < data.length; i += chunkSize) {
      result.push(data.slice(i, i + chunkSize));
    }

    return result;
  }, [data, columns]);
};

export default useChunkedData;
