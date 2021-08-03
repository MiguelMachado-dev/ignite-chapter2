import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import * as S from "./styles";
interface INewTransactonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactonModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container>
        <S.FormTitle>Cadastrar Transação</S.FormTitle>

        <S.Input placeholder="Título" type="text" />
        <S.Input placeholder="Valor" type="number" />
        <S.Input placeholder="Categoria" type="text" />

        <S.Submit type="submit">Cadastrar</S.Submit>
      </S.Container>
    </Modal>
  );
}
