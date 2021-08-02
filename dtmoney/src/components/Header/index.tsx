import logoImg from '../../assets/logo.svg';

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
      <img src={logoImg} alt="dt money" />

      <S.Button type="button">
        Nova transação
      </S.Button>
      </S.Content>
    </S.Container>
  )
}
