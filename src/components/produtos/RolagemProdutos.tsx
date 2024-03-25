import { useRef, useState } from "react";
import { iconArrowLeft, iconArrowRight, iconArrowRightAndLeft } from "../icons";
import { fontePrincipal } from "@/Auxiliares/fontes";

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
  const itemsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current!.getBoundingClientRect().left);
    setScrollLeft(itemsRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setHoveredItemId(null);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isMouseDown || !itemsRef.current) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleItemMouseEnter = (itemId: number) => {
    setHoveredItemId(itemId);
  };

  const scrollLeftHandler = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft -= 308;
    }
  };

  const scrollRightHandler = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollLeft += 308;
    }
  };

  return (
    <section className={`py-10 ${props.customClass}`}>
      <h1 className={`text-[26px] smLess:text-[32px] sm:text-[40px] font-semibold text-center ${fontePrincipal}`}>{props.nome}</h1>
      <div className="relative flex justify-center items-center">
        <div className="flex flex-col items-center justify-center my-4">
          <button onClick={scrollLeftHandler}>
            <div className="w-6 h-6 smLess:w-8 smLess:h-8 sm:w-10 sm:h-10">
              {iconArrowLeft}
            </div>
          </button>
        </div>
        <div
          className="chooseBrand flex gap-2 items-center overflow-x-hidden scrollbar-hide relative cursor-grab"
          ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {props.items.map((brand) => (
            <div
              className={`brand flex flex-col items-center  ${hoveredItemId === brand.id ? 'hovered' : ''
                }`}
              key={brand.id}
              onMouseEnter={() => handleItemMouseEnter(brand.id)}
            >
              <div className="w-[250px] h-[200px] smLess:w-[300px] smLess:h-[250px] sm:w-[350px] sm:h-[300px] overflow-hidden relative">
                <img
                  src={brand.linkImg}
                  alt={brand.nome}
                  className={`w-full h-full object-cover transition-transform ${hoveredItemId === brand.id ? 'brightness-50' : 'brightness-100'
                    }`}
                  style={{
                    transform: hoveredItemId === brand.id ? 'scale(1.2)' : 'scale(1)',
                  }}
                />
                <div
                  className={`text-base font-semibold text-white absolute inset-0 flex justify-center items-center transition-opacity ${hoveredItemId === brand.id ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {brand.nome}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-4">
          <button onClick={scrollRightHandler}>
            <div className="w-6 h-6 smLess:w-8 smLess:h-8 sm:w-10 sm:h-10">
              {iconArrowRight}
            </div>
          </button>
        </div>
        <div className="absolute bottom-0 text-center">
          <button className="p-1 sm:p-2 m-2 rounded-[10px] bg-opacity-gray hover:bg-second-blue font-semibold text-white">
            <a href={props.url} className="text-xs sm:text-base" >
              Visualizar <span className="lowercase">{props.nome}</span>
            </a>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-4 h-4 smLess:w-5 smLess:h-5 sm:w-6 sm:h-6">
          {iconArrowRightAndLeft}
        </div>
        <span className="text-xs">Deslize para visualizar mais produtos</span>
      </div>
    </section>
  );


}
