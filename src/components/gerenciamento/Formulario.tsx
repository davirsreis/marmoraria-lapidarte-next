import { useState, useEffect } from "react";
import Entrada from "./Entrada";
import Produto from "../../core/Produto";
import { Botao } from "../Botao";
import { storage } from "@/firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

interface FormularioProps {
  produto: Produto
  produtoMudou?: (produto: Produto) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.produto?.id ?? null
  const [nome, setNome] = useState('')
  const [pedra, setPedra] = useState<string[]>([])
  const [linkImg, setLinkImg] = useState('')
  const [imgURL, setImgURL] = useState('');
  const [progressPorcent, setPorgessPorcent] = useState(0);

  const pedras = ['Marmore', 'Granito', 'Quartzo']

  // Definindo os valores iniciais do formulário com base nas propriedades do produto
  useEffect(() => {
    if (props.produto) {
      setNome(props.produto.nome);
      setPedra(props.produto.pedra);
      setLinkImg(props.produto.linkImg);
      setImgURL(props.produto.linkImg);
    }
  }, [props.produto]);


  const handleSubmit = (event: any) => {
    event.preventDefault();
    const file = event.target[2]?.files[0];
    if (!file) return;

    const pedraSelecionada = pedra.length > 0 ? pedra : ['Marmore'];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
          props.produtoMudou?.(new Produto(nome, pedraSelecionada, downloadURL, id))
        });
      }
    );
  };

  return (
    <>
      <div className="w-[500px] bg-primary-blue mt-[52px] flex justify-center items-center rounded-t-lg">
        <span className="p-4 text-white font-bold">Registrando ou editando um produto</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[500px] bg-primary-neutral p-10 rounded-b-lg border border-opacity-gray">
          {/* {id ? (
            <Entrada somenteLeitura disabled texto="Código" valor={id} className="mb-5" />
          ) : false} */}
          <Entrada texto="Nome" placeHolder="Digite o nome" valor={nome} valorMudou={setNome} className="mb-5" />
          <Entrada texto="Pedra" isSelection selections={pedras} placeHolder="Digite o tipo de pedra" valor={pedra} valorMudou={setPedra} className="mb-5" />
          <Entrada tipo="file" />
          {!imgURL && <p>{progressPorcent}%</p>}
          {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
          <div className=" flex justify-end mt-5 gap-2">
            <Botao cor="verde" customClass="w-[100px]">
              {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao cor="vermelho" onClick={props.cancelado} customClass="w-[100px]">
              Cancelar
            </Botao>
          </div>
        </div>
      </form>
    </>
  )
}
