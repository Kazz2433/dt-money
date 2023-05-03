import { ArrowCircleUp } from "phosphor-react";
import { SummaryContainer } from "./styles";

export default function Summary() {
  return (
    <SummaryContainer>
        <div>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp/>
            </header>
        </div>
    </SummaryContainer>
  )
}
