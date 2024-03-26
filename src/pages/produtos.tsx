import { ProdutoContext } from "@/components/context/ProdutoContext";
import { useState, useEffect, useContext } from "react";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { Slash } from "@/components/Slash";
import Link from "next/link";
import { RolagemProdutos } from "@/components/produtos/RolagemProdutos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { iconArrowRight, iconArrowRightAndLeft } from "@/components/icons";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Produtos() {
  const [dadosProdutos, setDadosProdutos] = useState<any[]>([]);
  const [produtosFiltradosMarmore, setProdutosFiltradosMarmore] = useState<any[]>([]);
  const [produtosFiltradosGranito, setProdutosFiltradosGranito] = useState<any[]>([]);
  const [produtosFiltradosQuartzo, setProdutosFiltradosQuartzo] = useState<any[]>([]);
  const [produtosFiltradosNobileStone, setProdutosFiltradosNobileStone] = useState<any[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const dados = useContext(ProdutoContext);

  useEffect(() => {
    if (dados !== undefined) {
      setDadosProdutos(dados);
    }
  }, [dados]);

  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(2.5);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 376) {
      setSlidesToShow(1.05);
      setSlidesToScroll(1);
    } else if (windowSize.width < 475) {
      setSlidesToShow(1.05);
      setSlidesToScroll(1);
    } else if (windowSize.width < 540) {
      setSlidesToShow(1.3);
      setSlidesToScroll(1.3);
    } else if (windowSize.width < 640) {
      setSlidesToShow(1.5);
      setSlidesToScroll(1.5);
    } else if (windowSize.width < 810) {
      setSlidesToShow(1.5);
      setSlidesToScroll(1.5);
    } else if (windowSize.width < 970) {
      setSlidesToShow(2.1);
      setSlidesToScroll(2.5);
    } else if (windowSize.width < 1170) {
      setSlidesToShow(2.5);
      setSlidesToScroll(2.5);
    } else if (windowSize.width < 1320) {
      setSlidesToShow(3.1);
      setSlidesToScroll(2.5);
    } else if (windowSize.width < 1520) {
      setSlidesToShow(3.5);
      setSlidesToScroll(3);
    } else if (windowSize.width < 1680) {
      setSlidesToShow(4.1);
      setSlidesToScroll(3);
    } else if (windowSize.width < 1880) {
      setSlidesToShow(4.5);
      setSlidesToScroll(3);
    } else {
      setSlidesToShow(5.1);
      setSlidesToScroll(3);
    }
  }, [windowSize]);

  useEffect(() => {
    if (dadosProdutos.length > 0) {
      const produtosFiltradosMarmore = dadosProdutos.filter(produto => produto.pedra === 'Marmore');
      setProdutosFiltradosMarmore(produtosFiltradosMarmore);
      console.log(produtosFiltradosMarmore);

      const produtosFiltradosGranito = dadosProdutos.filter(produto => produto.pedra === 'Granito');
      setProdutosFiltradosGranito(produtosFiltradosGranito);

      const produtosFiltradosQuartzo = dadosProdutos.filter(produto => produto.pedra === 'Quartzo');
      setProdutosFiltradosQuartzo(produtosFiltradosQuartzo);

      const produtosFiltradosNobileStone = dadosProdutos.filter(produto => produto.pedra === 'NobileStone');
      setProdutosFiltradosNobileStone(produtosFiltradosNobileStone);
    }
  }, [dadosProdutos]);

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };
  const handleItemMouseEnter = (itemId: number) => {
    setHoveredItemId(itemId);
  };

  return (
    <>
      {!dados ? (
        <Slash />
      ) : (
        <>
          <section className="flex flex-col w-full bg-third-neutral">
            <h2 className={`text-[20px] smLess:text-[24px] sm:text-[44px] font-semibold text-center pt-[80px] smLess:pt-[100px] sm:pt-[120px] ${fontePrincipal}`}>CONHEÇA NOSSOS PRODUTOS!</h2>
            <ul className={`flex text-xs smLess:text-[14px] sm:text-xl py-5 smLess:py-10 sm:py-20 gap-1 smLess:gap-2 sm:gap-4 text-center justify-center text-second-blue font-semibold tracking-[0.05em] smLess:tracking-[0.05em] sm:tracking-[0.1em] ${fontePrincipal}`}>
              <li><nav className="hover:text-primary-blue"><Link href={'/marmores'} passHref>Mármores</Link></nav></li>
              <span>|</span>
              <li><nav className="hover:text-primary-blue"><Link href={'/granitos'} passHref>Granitos</Link></nav></li>
              <span>|</span>
              <li><nav className="hover:text-primary-blue"><Link href={'/quartzos'} passHref>Quartzos</Link></nav></li>
              <span>|</span>
              <li><nav className="hover:text-primary-blue"><Link href={'/nobilestone'} passHref>NobileStone</Link></nav></li>
            </ul>
          </section>

          {(produtosFiltradosMarmore.length == 0)
            ? null
            : <RolagemProdutos nome="Mármores" url="/marmores" items={produtosFiltradosMarmore} customClass={'bg-fourth-neutral'} />}

          {(produtosFiltradosGranito.length == 0)
            ? null
            : <RolagemProdutos nome="Granitos" url="/granitos" items={produtosFiltradosGranito} customClass={'bg-fourth-neutral'} />}

          {(produtosFiltradosQuartzo.length == 0)
            ? null
            : <RolagemProdutos nome="Quartzos" url="/quartzos" items={produtosFiltradosQuartzo} customClass={'bg-fourth-neutral'} />}

          {(produtosFiltradosNobileStone.length == 0)
            ? null
            : <RolagemProdutos nome="NobileStone" url="/nobilestone" items={produtosFiltradosNobileStone} customClass={'bg-fourth-neutral'} />}
        </>
      )
      }
    </>
  );
}
