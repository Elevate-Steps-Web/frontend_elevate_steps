import { useSwiper } from 'swiper/react';

export default function BouncingArrow({ direction, changeParentSlide }) {
  const swiper = useSwiper();

  function handleClick() {
    if (changeParentSlide) {
      changeParentSlide();
    } else {
      swiper.slideNext();
    }
  }

  function renderArrow(dir) {
    switch (dir) {
      case 'up':
        return (
          <div className="bounce-up lg:my-6 my-3">
            <i className="bi bi-arrow-up text-white text-5xl" />
          </div>
        );
      case 'down':
        return (
          <div className="bounce-down lg:my-6 my-3">
            <i className="bi bi-arrow-down text-white text-5xl" />
          </div>
        );
      case 'left':
        return (
          <div className="bounce-left lg:my-6 my-3">
            <i className="bi bi-arrow-left text-white text-5xl" />
          </div>
        );
      case 'right':
        return (
          <div className="bounce-right lg:my-6 my-3">
            <i className="bi bi-arrow-right text-white text-5xl" />
          </div>
        );
      default:
        return <i className="bi bi-bug" />;
    }
  }
  return (
    <button type="button" onClick={handleClick}>
      {renderArrow(direction)}
    </button>
  );
}
