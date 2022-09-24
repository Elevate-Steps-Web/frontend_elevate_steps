import { useRef } from 'react';
import SlideRight from '../SlideRight';
import { useOnScreen } from '../../../hooks/useOnScreen';

export default function ScrollSlideRight({ children }) {
  const el = useRef();
  const onScreen = useOnScreen(el, '2.5%');
  return (
    <div ref={el}>
      <SlideRight show={onScreen}>{children}</SlideRight>
    </div>
  );
}
