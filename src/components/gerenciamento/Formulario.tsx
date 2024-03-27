import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import { storage } from "@/firebase/config";
import { Botao } from "../Botao";
import Produto from "../../core/Produto";
import Entrada from "./Entrada";
import Image from "next/image";

interface FormularioProps {
  produto: Produto
  produtoMudou?: (produto: Produto) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.produto?.id ?? null
  const [nome, setNome] = useState('')
  const [pedra, setPedra] = useState<string>('')
  const [imgURL, setImgURL] = useState('');
  const [progressPorcent, setPorgessPorcent] = useState(0);
  const [alterandoImagem, setAlterandoImagem] = useState(true);

  const pedras = ['Marmore', 'Granito', 'Quartzito', 'NobileStone']

  useEffect(() => {
    if (props.produto) {
      setNome(props.produto.nome);
      setPedra(props.produto.pedra);
      setImgURL(props.produto.linkImg);
    }
  }, [props.produto]);


  const handleAlterandoImagem = (event: any) => {
    event.preventDefault();
    setAlterandoImagem(false)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!id || !alterandoImagem) {
      var aux = 3;
      if (!id) { aux = 2 }
      const file = event.target[aux]?.files[0];
      if (!file) return;

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
            props.produtoMudou?.(new Produto(nome, pedra, downloadURL, id))
          });
        }
      );
    } else {
      props.produtoMudou?.(new Produto(nome, pedra, imgURL, id));
    }
  };

  return (
    <>
      <div className="w-full sm:min-w-[500px] sm:w-[500px] bg-primary-blue flex justify-center items-center sm:rounded-t-lg">
        <span className="p-4 text-white font-bold">Registrando ou editando um produto</span>
      </div>
      <form onSubmit={handleSubmit} className=" w-full sm:min-w-[500px] sm:w-[500px]">
        <div className="flex flex-col bg-primary-neutral p-10 rounded-b-lg border border-opacity-gray">
          <span className="flex justify-center items-center text-sm">Todos os elementos são obrigatórios</span>
          <Entrada texto="Nome" placeHolder="Digite o nome" valor={nome} valorMudou={setNome} className="mb-5" />
          <Entrada texto="Pedra" isSelection selections={pedras} placeHolder="Digite o tipo de pedra" valor={pedra} valorMudou={setPedra} className="mb-5" />
          {id && imgURL
            ? <div className="flex flex-col justify-center items-center">
              <span className="font-bold py-2">Imagem</span>
              <div className="flex justify-center items-center h-[200px] w-[200px]">
                <div className="w-full pt-[100%] relative">
                  <Image src={imgURL} alt={nome} width={200} height={200} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <button className="p-2 underline" onClick={handleAlterandoImagem}>Dejesa alterar a imagem?</button>
              {alterandoImagem
                ? null
                : <Entrada accept={".jpg, .jpeg, .png"} tipo="file" disabled={alterandoImagem} />
              }

            </div>
            : <Entrada accept={".jpg, .jpeg, .png"} tipo="file" />}
          {!imgURL && <p>{progressPorcent}%</p>}
          <div className=" flex justify-end mt-5 gap-2">
            <Botao cor="verde" customClass="w-[100px] p-2 sm:p-4">
              {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao cor="vermelho" onClick={props.cancelado} customClass="w-[100px] p-2 sm:p-4">
              Cancelar
            </Botao>
          </div>
        </div>
      </form>
    </>
  )
}
