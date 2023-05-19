import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionsType, TransactionsTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export default function NewTransactionModel() {
  return (
    <Dialog.Portal>
        <Overlay />

        <Content>
            <Dialog.Title> Nova Transação </Dialog.Title>

            <CloseButton>
                <X size={24} />
            </CloseButton>

            <form action="">
                <input type="text" placeholder="Descrição" required />
                <input type="number" placeholder="Preço" required />
                <input type="text" placeholder="Categoria" required />

                <TransactionsType>
                    <TransactionsTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TransactionsTypeButton>

                    <TransactionsTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24} />
                        Saida
                    </TransactionsTypeButton>
                </TransactionsType>

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </Content>
    </Dialog.Portal>
  )
}
