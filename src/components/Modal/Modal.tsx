import styles from "./Modal.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Course } from "../../pages/Courses.tsx";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: Course;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }: ModalProps) => {
    const course: Course = children;
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        setModalOpen(isOpen);
        const modalElement = modalRef.current;
        if(modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if(onClose) {
            onClose();
        }
        setModalOpen(false);
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if(event.key === "Escape") {
            handleCloseModal();
        }
    }
    if (!isModalOpen) return null;
    return (
        <dialog className={styles.modal} ref={modalRef} onKeyDown={handleKeyDown}>
            <button className={styles.closeButton} onClick={handleCloseModal}>X</button>
            <div className={styles.content}>{course.name}</div>
        </dialog>
    );
}

export default Modal;