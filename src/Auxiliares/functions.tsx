export const formatarTelefone = (valor: any) => {
  const numeroApenasDigitos = valor.replace(/\D/g, '');
  const numeroFormatado = numeroApenasDigitos.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

  return numeroFormatado;
};

export function whatsAppSubmit(mensagem: string) {
  const numeroLoja = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const tipoDeCelular = verificarTipoDispositivo();
  if (tipoDeCelular == 'computador') {
    mensagem = `https://web.whatsapp.com/send?phone=${numeroLoja}&text=${mensagem}`;
  } else {
    mensagem = `https://wa.me/${numeroLoja}?text=${mensagem}`;
  }


  window.open(mensagem, '_blank');
}

export function whatsAppSubmitForm(nome: string, telefone: string, email: string, descricao: string) {
  const numeroLoja = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const tipoDeCelular = verificarTipoDispositivo();
  let mensagem = `Olá! Gostaria de solicitar um orçamento para um projeto.%0a`;
  mensagem += `*Nome:* ${nome}%0a`;
  mensagem += `*E-mail:* ${email}%0a`;

  if (telefone) {
    mensagem += `*Número:* ${telefone}%0a`;
  }

  mensagem += `*Descrição do orçamento:* ${descricao}%0a`;

  if (tipoDeCelular == 'computador') {
    mensagem = `https://web.whatsapp.com/send?phone=${numeroLoja}&text=${mensagem}`;
  } else {
    mensagem = `https://wa.me/${numeroLoja}?text=${mensagem}`;
  }
  window.open(mensagem, '_blank');
}

export const ordenarProdutos = (produtos: any) => {
  return produtos.sort((a: any, b: any) => {
    const pedraA = typeof a.pedra === 'string' ? a.pedra : '';
    const pedraB = typeof b.pedra === 'string' ? b.pedra : '';

    const comparacaoPedra = pedraB.localeCompare(pedraA);
    if (comparacaoPedra !== 0) {
      return comparacaoPedra;
    }
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

function verificarTipoDispositivo() {
  var larguraJanela = window.innerWidth;
  var limiteLarguraCelular = 768;

  if (larguraJanela < limiteLarguraCelular) {
    return 'celular';
  } else {
    return 'computador';
  }
}
