import { HeaderContainer, HeaderContent,NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoImg} alt=""></img>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  )
}