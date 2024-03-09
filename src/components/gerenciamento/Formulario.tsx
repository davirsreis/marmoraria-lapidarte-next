import { useState } from "react";
import Entrada from "./Entrada";
import Produto from "../../core/Produto";
import { Botao } from "../Botao";

interface FormularioProps {
  produto: Produto
  produtoMudou?: (produto: Produto) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.produto?.id ?? null
  const [nome, setNome] = useState(props.produto?.nome ?? '')
  const [pedra, setPedra] = useState(props.produto?.pedra ?? '')
  const [linkImg, setLinkImg] = useState(props.produto?.linkImg ?? '')

  const pedras = ['Marmore', 'Granito', 'Quartzo']

  return (
    <>
      <div className="w-[500px] bg-primary-blue mt-[52px] flex justify-center items-center rounded-t-lg">
        <span className="p-4 text-white font-bold">Registrando ou editando um produto</span>
      </div>
      <div className="flex flex-col w-[500px] bg-primary-neutral p-10 rounded-b-lg border border-opacity-gray">
        {id ? (
          <Entrada somenteLeitura disabled texto="Código" valor={id} className="mb-5" />
        ) : false}
        <Entrada texto="Nome" placeHolder="Digite o nome" valor={nome} valorMudou={setNome} className="mb-5" />
        {/* <Entrada texto="Pedra" placeHolder="Digite o tipo de pedra" valor={pedra} valorMudou={setPedra} className="mb-5" /> */}
        <Entrada texto="Pedra" isSelection selections={pedras} placeHolder="Digite o tipo de pedra" valor={pedra} valorMudou={setPedra} className="mb-5" />
        <Entrada texto="LinkImg" placeHolder="Digite o link da imagem" valor={linkImg} valorMudou={setLinkImg} />
        <div className=" flex justify-end mt-5 gap-2">
          <Botao cor="verde" customClass="w-[100px]"
            onClick={() => props.produtoMudou?.(new Produto(nome, pedra, linkImg, id))}>
            {id ? 'Alterar' : 'Salvar'}
          </Botao>
          <Botao cor="vermelho" onClick={props.cancelado} customClass="w-[100px]">
            Cancelar
          </Botao>
        </div>
      </div>
    </>
  )
}