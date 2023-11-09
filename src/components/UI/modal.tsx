function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal" onClick={() => onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Modal;
