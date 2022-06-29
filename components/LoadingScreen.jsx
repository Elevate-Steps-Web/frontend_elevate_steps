import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

import GridLoader from 'react-spinners/GridLoader';
import { fadeOut } from 'react-animations';
import { useRouter } from 'next/router';

const fadeOutAnimation = keyframes`${fadeOut}`;
const FadeOutDiv = styled.div`
  animation: ${fadeOutAnimation} 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

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
      <FadeOutDiv>
        <div className="w-screen h-screen bg-primary-blue flex flex-row items-center">
          <div className="flex flex-col justify-items-center w-fit h-fit mx-auto">
            <GridLoader
              color="#fff"
              loading={loading}
              className="transition-opacity"
            />
          </div>
        </div>
      </FadeOutDiv>
    )
  );
}

export default Loading;
