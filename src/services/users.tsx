import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Users } from 'src/models/Users';

const DataFetcher = () => {
  const [data, setData] = useState<Users[]>([]);

  useEffect(() => {
    axios
      .get<Users[]>('http://localhost/api/api.php')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data &&
          data.map((item, index) => (
            <li key={index}>
              <div>{item.id}</div>
              <div>{item.firstname}</div>
              <div>{item.lastname}</div>
              <div>{item.Description}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
