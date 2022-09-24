import { useRef } from 'react';
import SlideDown from '../SlideDown';
import { useOnScreen } from '../../../hooks/useOnScreen';

export default function ScrollSlideDown({ children }) {
  const el = useRef();
  const onScreen = useOnScreen(el, '2.5%');
  return (
    <div ref={el}>
      <SlideDown show={onScreen}>{children}</SlideDown>
    </div>
  );
}
