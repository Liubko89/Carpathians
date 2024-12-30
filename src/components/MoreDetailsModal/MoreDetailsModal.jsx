import css from "./MoreDetailsModal.module.css";
import CloseButton from "../CloseButton/CloseButton";

const MoreDetailsModal = ({ children, closeModal }) => {
  return (
    <div className={css.modal}>
      <CloseButton closeModal={closeModal} color="iconLight" />
      {children}
    </div>
  );
};

export default MoreDetailsModal;
