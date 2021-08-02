import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

import * as S from "./styles"

export function Summary(){
  return(
    <S.Container>
      <S.Card>
        <S.CardTitle>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.CardTitle>
        <S.BoldText>R$1000,00</S.BoldText>
      </S.Card>
      <S.Card>
        <S.CardTitle>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </S.CardTitle>
        <S.BoldText>- R$400,00</S.BoldText>
      </S.Card>
      <S.Card className="highlight-background">
        <S.CardTitle>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.CardTitle>
        <S.BoldText>R$600,00</S.BoldText>
      </S.Card>
    </S.Container>
  )
}
