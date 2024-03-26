import { IconeEdit, IconeTrash } from "./Icones";
import Produto from "../../core/Produto";
import Image from "next/image";
import { useState } from "react";

interface TabelaProps {
  produtos?: Produto[];
  produtoSelecionado?: (produto: Produto) => void;
  produtoExcluido?: (produto: Produto) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.produtoExcluido || props.produtoSelecionado;
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState(false);
  const [produtoExcluindo, setProdutoExcluindo] = useState<Produto | null>(null);

  function abrirConfirmacaoExclusao(produto: Produto) {
    setProdutoExcluindo(produto);
    setConfirmacaoExclusao(true);
  }

  function confirmarExclusao() {
    if (produtoExcluindo) {
      props.produtoExcluido?.(produtoExcluindo);
      setProdutoExcluindo(null);
      setConfirmacaoExclusao(false);
    }
  }

  function cancelarExclusao() {
    setProdutoExcluindo(null);
    setConfirmacaoExclusao(false);
  }

  function renderizarCabecalho() {
    const thClass = "text-left p-2 smLess:p-3 sm:p-4 text-white";

    return (
      <tr>
        <th className={thClass}>Nome</th>
        <th className={`${thClass} truncate max-w-[100px] smLess:max-w-[200px] sm:max-w-[250px]`}>Tipo de pedra</th>
        <th className={`${thClass} truncate max-w-[50px] smLess:max-w-[75px] sm:max-w-[100px]`}>Imagem</th>
        {exibirAcoes && <th className="p-2 sm:p-4 text-white">Ações</th>}
      </tr>
    );
  }

  function renderizarDados() {
    return props.produtos?.map((produto, i) => {
      const tdClass = "truncate max-w-[50px] smLess:max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px]";
      return (
        <tr key={produto.id} className={`${i % 2 === 0 ? 'bg-fifth-neutral' : 'bg-primary-neutral'}`}>
          <td className={`${tdClass} text-left sm:p-4`}>{produto.nome}</td>
          <td className={`${tdClass} text-center sm:text-left sm:p-4`}>{produto.pedra}</td>
          <td className={`${tdClass} flex justify-center items-center`}><div className="h-[42px] w-[42px] smLess:h-[48px] smLess:w-[48px] sm:h-[52px] sm:w-[52px]"><Image src={produto.linkImg} alt="" width={52} height={52} /></div></td>
          {exibirAcoes && <td>{renderizarAcoes(produto)}</td>}
        </tr>
      );
    });
  }

  function renderizarAcoes(produto: Produto) {
    const style = `
      flex justify-center- items-center
      rounded-full p-1 sm:p-2 m-1
      bg-white hover:bg-gray-100`;

    return (
      <div className={`flex justify-center`}>
        {props.produtoSelecionado && (
          <button onClick={() => props.produtoSelecionado?.(produto)} className={`text-green-600 ${style}`}>
            {IconeEdit}
          </button>
        )}
        {props.produtoExcluido && (
          <button onClick={() => abrirConfirmacaoExclusao(produto)} className={`text-red-500 ${style}`}>
            {IconeTrash}
          </button>
        )}
        <ModalConfirmacaoExclusao
          abrir={confirmacaoExclusao}
          produto={produtoExcluindo}
          onConfirmar={confirmarExclusao}
          onCancel={cancelarExclusao}
        />
      </div>
    );
  }

  return (
    <table className="w-full lg:rounded-xl overflow-hidden">
      <thead>{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}

function ModalConfirmacaoExclusao(props: {
  abrir: boolean;
  produto: Produto | null;
  onConfirmar: () => void;
  onCancel: () => void;
}) {
  if (!props.abrir || !props.produto) return null;

  function handleClickForaModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target === event.currentTarget) {
      props.onCancel();
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-[0.01]" onClick={handleClickForaModal}>
      <div className="bg-white p-4 rounded shadow-md">
        <p>Tem certeza que deseja excluir o produto {props.produto.nome}?</p>
        <div className="flex justify-center mt-4">
          <button onClick={props.onConfirmar} className="bg-green-500 hover:bg-green-800 hover:text-white px-4 py-2 mr-4 rounded">Confirmar</button>
          <button onClick={props.onCancel} className="bg-red-500 hover:bg-red-800 hover:text-white px-4 py-2 rounded">Cancelar</button>
        </div>
      </div>
    </div>
  );
}
