import { useRef } from 'react';
import SlideLeft from '../SlideLeft';
import { useOnScreen } from '../../../hooks/useOnScreen';

export default function ScrollSlideLeft({ children }) {
  const el = useRef();
  const onScreen = useOnScreen(el, '2.5%');
  return (
    <div ref={el}>
      <SlideLeft show={onScreen}>{children}</SlideLeft>
    </div>
  );
}
