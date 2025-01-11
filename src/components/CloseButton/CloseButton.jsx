import clsx from "clsx";
import icons from "../../assets/icons.svg";

const CloseButton = ({ closeModal, color, className1 }) => {
  return (
    <button
      className={clsx(className1, "closeBtn")}
      onClick={closeModal}
      type="button"
      aria-label="Close window"
    >
      <svg className={color} width="40" height="40">
        <use href={`${icons}#icon-close`}></use>
      </svg>
    </button>
  );
};

export default CloseButton;
