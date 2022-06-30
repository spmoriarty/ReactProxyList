import React from 'react';
import { useState, useEffect } from 'react';
import { getYelp } from './services/fetch-utils';


export default function YelpSearch() {
  
  const [yelps, setYelp] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('Portland');
  
  async function grabAndStoreYelp() {

    const data = await getYelp(yelpQuery);
    setYelp(data.businesses);
    
    
  }
  
  useEffect(() => {
    grabAndStoreYelp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getYelp(yelpQuery);

    setYelp(data.businesses);
    setYelpQuery('');
  
  }
  
  
  return (
    <><div className="yelp" />
      <form onSubmit={handleSubmit}>
        <input onChange={e => setYelpQuery(e.target.value)} />
        <button>Search yelp</button>
      </form>
      {
        yelps.length &&
        yelps.map((yelp, i) => <div key={yelp.name + i} className='yelp'>
          <h3>{yelp.name}</h3>
        </div>)
      };
    </>
  
      
  );
}