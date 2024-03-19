export const formatarTelefone = (valor: any) => {
  const numeroApenasDigitos = valor.replace(/\D/g, '');
  const numeroFormatado = numeroApenasDigitos.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

  return numeroFormatado;
};

export function whatsAppSubmit(mensagem: string) {
  const numeroLoja = process.env.NEXT_PUBLIC_PHONE_NUMBER
  var url = "https://wa.me/" + numeroLoja + "?text="
    + mensagem

  window.open(url, '_blank');
}

export function whatsAppSubmitForm(nome: string, telefone: string, email: string, descricao: string) {
  const numeroLoja = process.env.NEXT_PUBLIC_PHONE_NUMBER

  var url = "https://wa.me/" + numeroLoja + "?text="
    + "*Nome :* " + nome + "%0a"
    + "*Número:* " + telefone + "%0a"
    + "*Email :* " + email + "%0a"
    + "*Descrição do orçamento :* " + descricao
    + "%0a%0a"
    + "This is an example of send HTML form data to WhatsApp";

  window.open(url, '_blank');
}

export const ordenarProdutos = (produtos: any) => {
  return produtos.sort((a: any, b: any) => {
    const pedraA = typeof a.pedra === 'string' ? a.pedra : '';
    const pedraB = typeof b.pedra === 'string' ? b.pedra : '';

    // Ordenar pela pedra em ordem decrescente
    const comparacaoPedra = pedraB.localeCompare(pedraA);
    if (comparacaoPedra !== 0) {
      return comparacaoPedra;
    }
    // Se as pedras forem iguais, ordenar pelo nome em ordem alfabética
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();
    return nomeA.localeCompare(nomeB);
  });
};

export async function consultarArquivoJSON() {
  try {
    const response = await fetch('/api/consultarProdutos');

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.error('Erro ao consultar o arquivo JSON:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao consultar o arquivo JSON:', error);
  }
}