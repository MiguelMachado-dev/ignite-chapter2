import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

interface IHeaderProps {
  onOpenNewTransactonModal: () => void;
}

export function Header({ onOpenNewTransactonModal }: IHeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />

        <S.Button type="button" onClick={onOpenNewTransactonModal}>
          Nova transação
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
