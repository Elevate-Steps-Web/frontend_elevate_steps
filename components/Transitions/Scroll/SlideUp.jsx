import { useRef } from 'react';
import SlideUp from '../SlideUp';
import { useOnScreen } from '../../../hooks/useOnScreen';

export default function ScrollSlideRight({ children }) {
  const el = useRef();
  const onScreen = useOnScreen(el, '2.5%');
  return (
    <div ref={el}>
      <SlideUp show={onScreen}>{children}</SlideUp>
    </div>
  );
}
