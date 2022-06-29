import { useEffect, useState } from 'react';

import GridLoader from 'react-spinners/GridLoader';
import { useRouter } from 'next/router';

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <div className="w-screen h-screen bg-primary-blue flex flex-row items-center">
        <div className="flex flex-col justify-items-center w-fit h-fit mx-auto">
          <GridLoader color="#fff" loading={loading} />
        </div>
      </div>
    )
  );
}

export default Loading;
