import { CardContato } from "./CardContato";

export function SectionContato() {
  return (
    <section className="w-full h-[700px] bg-img_bg_fundo_contato bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <div className="sm:flex justify-evenly mx-4 gap-32">
        <div className="w-[400px]">
          <CardContato>
            <h1 className="text-3xl font-semibold mb-4 text-center">Fale com nossos consultores</h1>
            <p className="text-lg text-white leading-relaxed">Nossa equipe está pronta para te atender. Fale conosco utilizando um dos contatos abaixo ou utilize nosso formulário para enviar os detalhes do seu projeto e receber seu orçamento.</p>
            <div className="flex justify-center items-center mt-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Solicitar Orçamento
              </button>
            </div>
          </CardContato>
        </div>
        <div className="w-[400px] flex flex-col justify-center">
          <CardContato>
            <div className="flex flex-col justify-evenly items-center h-full">
              <p className="text-2xl text-white font-semibold mb-2 text-center p-4 rounded-md bg-opacity-gray">(61) 99999-9999</p>
              <p className="text-2xl text-white font-semibold text-center p-4 rounded-md bg-opacity-gray">vendas@marmorarialapidarte.com</p>
            </div>
          </CardContato>
        </div>
      </div>
    </section>
  )
}
