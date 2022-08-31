import { useSwiper } from 'swiper/react';

export default function BouncingArrow({ direction, parentHandle }) {
  let swiper = useSwiper();
  if (typeof parentHandle !== 'undefined') {
    console.log(parentHandle);
    swiper = parentHandle;
  }

  function renderArrow(dir) {
    switch (dir) {
      case 'up':
        return (
          <div className="bounce-up my-6">
            <i className="bi bi-arrow-up text-white text-5xl" />
          </div>
        );
      case 'down':
        return (
          <div className="bounce-down my-6">
            <i className="bi bi-arrow-down text-white text-5xl" />
          </div>
        );
      case 'left':
        return (
          <div className="bounce-left my-6">
            <i className="bi bi-arrow-left text-white text-5xl" />
          </div>
        );
      case 'right':
        return (
          <div className="bounce-right my-6">
            <i className="bi bi-arrow-right text-white text-5xl" />
          </div>
        );
      default:
        return <i className="bi bi-bug" />;
    }
  }
  return (
    <button type="button" onClick={() => swiper.slideNext()}>
      {renderArrow(direction)}
    </button>
  );
}
