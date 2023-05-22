import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionsType, TransactionsTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContexts";


const newTransactionFormSchema = z.object({
    description: z.string(),
    price:z.number(),
    category: z.string(),
    type:z.enum(['income','outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransactionModel() {

    const {createTransaction} = useContext(TransactionsContext)

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState:{isSubmitting}} = useForm<NewTransactionFormInputs>({
        resolver:zodResolver(newTransactionFormSchema)
    })
  
    async function handleCreateNewTransaction(data:NewTransactionFormInputs){
        const {description, price,category,type} = data


        await createTransaction({
            description,
            category,
            price,
            type,
        })
    
        reset()
    }
  
    return (
    <Dialog.Portal>
        <Overlay />

        <Content>
            <Dialog.Title> Nova Transação </Dialog.Title>

            <CloseButton>
                <X size={24} />
            </CloseButton>

            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input type="text" placeholder="Descrição" required {...register('description')} />
                <input type="number" placeholder="Preço" required {...register('price', {valueAsNumber:true})} />
                <input type="text" placeholder="Categoria" required {...register('category')} />

                <Controller 
                    control={control}
                    name="type"
                    render={({field}) => {
                        console.log(field)
                        return(
                        <TransactionsType onValueChange={field.onChange} value={field.value}>
                            <TransactionsTypeButton variant="income" value="income">
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionsTypeButton>

                            <TransactionsTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24} />
                                Saida
                            </TransactionsTypeButton>
                        </TransactionsType>
                        )
                    }}
                />
                <button type="submit" disabled={isSubmitting}>
                    Cadastrar
                </button>
            </form>
        </Content>
    </Dialog.Portal>
  )
}
