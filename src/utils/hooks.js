import { useEffect } from 'react';

export const useScript = (url, otherParams = {}, refInsert) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    Object.keys(otherParams).forEach(item => {
        script[item] = otherParams[item]
    })

    if(refInsert){
        refInsert.current.appendChild(script)
    } else {
        document.body.appendChild(script);
    }

    return () => {
    //   document.body.removeChild(script);
    }
  }, [url]);
};

