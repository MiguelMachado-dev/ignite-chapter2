import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
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
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<string>("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log({
      title, value, category, type
    })
  }

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

      <S.Container onSubmit={handleCreateNewTransaction}>
        <S.FormTitle>Cadastrar Transação</S.FormTitle>

        <S.Input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <S.Input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <S.Input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <S.Submit type="submit">Cadastrar</S.Submit>
      </S.Container>
    </Modal>
  );
}
