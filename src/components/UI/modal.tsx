function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div
      data-testid="modal-component"
      className="modal"
      onClick={() => onClose()}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Modal;
