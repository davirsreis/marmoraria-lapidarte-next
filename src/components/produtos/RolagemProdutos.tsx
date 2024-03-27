import { useEffect, useState } from "react";
import { fontePrincipal } from "@/Auxiliares/fontes";
import Slider from "react-slick";
import { useWindowSize } from "@/hooks/useWindowSize";

interface Item {
  id: number;
  nome: string;
  linkImg: string;
}

interface RolagemProdutosProps {
  items: Item[]
  nome: string
  url: string
  customClass?: string
}

export function RolagemProdutos(props: RolagemProdutosProps) {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(2.5);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 376) {
      setSlidesToShow(1.05);
      setSlidesToScroll(1.05);
    } else if (windowSize.width < 475) {
      setSlidesToShow(1.05);
      setSlidesToScroll(1.05);
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

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };
  const handleItemMouseEnter = (itemId: number) => {
    setHoveredItemId(itemId);
  };

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className={`py-1 smLess:py-3 sm:py-5 bg-fourth-neutral`}>
      <h1 className={`text-[26px] smLess:text-[32px] sm:text-[40px] font-semibold text-center  ${fontePrincipal}`}>
        <a href={props.url} className="hover:text-second-blue">{props.nome}</a>
      </h1>
      <div className="flex justify-center px-10 py-1 smLess:py-3 sm:py-5">
        <div className="w-full">
          <Slider {...settings}>
            {props.items.map((produto: any) => (
              <div key={produto.id} onMouseLeave={handleMouseLeave} onMouseEnter={() => handleItemMouseEnter(produto.id)} className="flex justify-center items-center gap-4">
                <div className={`cursor-grab brand flex flex-col items-center  ${hoveredItemId === produto.id ? 'hovered' : ''}`} style={{ display: 'flex', flexDirection: 'row' }}>
                  <div className="w-[250px] h-[200px] smLess:w-[300px] smLess:h-[250px] sm:w-[350px] sm:h-[300px] overflow-hidden relative">
                    <img
                      src={produto.linkImg}
                      alt={produto.nome}
                      className={`w-full h-full object-cover transition-transform ${hoveredItemId === produto.id ? 'brightness-50' : 'brightness-100'}`}
                      style={{
                        transform: hoveredItemId === produto.id ? 'scale(1.2)' : 'scale(1)'
                      }} />
                    <div
                      className={`text-base font-semibold text-white absolute inset-0 flex justify-center items-center transition-opacity ${hoveredItemId === produto.id ? 'opacity-100' : 'opacity-0'}`}>
                      {produto.nome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex flex-col items-center justify-center pt-8">
            <span className="text-xs">Deslize para visualizar mais produtos</span>
          </div>
        </div>

      </div>
    </section>
  );


}
