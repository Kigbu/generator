import React from 'react';

const useScript = (url: string) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.type = 'text/babel';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;