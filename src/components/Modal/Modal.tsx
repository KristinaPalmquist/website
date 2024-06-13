import styles from "./Modal.module.css";
import {FC, KeyboardEvent, useEffect, useRef, useState} from "react";
import {Course} from "../../pages/Courses/Courses.tsx";
import CloseIcon from "../CloseIcon/CloseIcon.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: Course;
  className?: string;
}

const Modal: FC<ModalProps> = ({isOpen, onClose, children}: ModalProps) => {
  const course: Course = children;
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    setModalOpen(isOpen);
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen, isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  }
  if (!isModalOpen) return null;
  return (
    <dialog className={styles.modal} ref={modalRef} onKeyDown={handleKeyDown}>
      <button className={styles.closeButton} onClick={handleCloseModal}>
        <CloseIcon></CloseIcon>
      </button>
      <div className={styles.content}>
        <h2>{course.name}</h2>
        <h4>Course content</h4>
        <p>{course.courseContent}</p>
        <h4>Course Assignment</h4>
        <p>{course.courseAssignments}</p>
      </div>

    </dialog>
  );
}

export default Modal;