// LoadingScreen.jsx
import React, { useState } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return loading ? <div>Loading...</div> : <div>Loaded!</div>;
};

export default LoadingScreen;