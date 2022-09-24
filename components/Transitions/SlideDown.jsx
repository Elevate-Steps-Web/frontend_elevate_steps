import { Transition } from '@headlessui/react';

export default function SlideDown({ show = true, children }) {
  return (
    <Transition
      show={show}
      enter="transform transition ease-in-out duration-750"
      enterFrom="opacity-0 -translate-y-12"
      enterTo="opacity-100 -translate-y-0"
      leave="transform transition ease-in-out duration-500"
      leaveFrom="opacity-100 -translate-y-0"
      leaveTo="opacity-0 -translate-y-12"
    >
      {children}
    </Transition>
  );
}
