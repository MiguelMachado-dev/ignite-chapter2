import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import * as S from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <S.Container>
      <S.Card>
        <S.CardTitle>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.CardTitle>
        <S.BoldText>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </S.BoldText>
      </S.Card>
      <S.Card>
        <S.CardTitle>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </S.CardTitle>
        <S.BoldText>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </S.BoldText>
      </S.Card>
      <S.Card className="highlight-background">
        <S.CardTitle>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.CardTitle>
        <S.BoldText>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </S.BoldText>
      </S.Card>
    </S.Container>
  );
}
