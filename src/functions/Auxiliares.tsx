import { ref } from "firebase/storage";
import Link from "next/link"
import { redirect } from "next/navigation";

export const formatarTelefone = (valor: any) => {
  // Remove qualquer caractere que não seja número
  const numeroApenasDigitos = valor.replace(/\D/g, '');
  
  // Formata o número no formato (99) 9999-9999
  const numeroFormatado = numeroApenasDigitos.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  
  return numeroFormatado;
};

export function whatsAppSubmit(nome: string, telefone: string, email: string, descricao: string, arquivo?: any) {
  const numeroLoja = process.env.NEXT_PUBLIC_PHONE_NUMBER

  var url = "https://wa.me/" + numeroLoja + "?text="
  +"*Nome :* "+nome+"%0a"
  +"*Número:* "+telefone+"%0a"
  +"*Email :* "+email+"%0a"
  +"*Descrição do orçamento :* "+descricao
  +"%0a%0a"
  +"This is an example of send HTML form data to WhatsApp";
  
  window.open(url, '_blank');
}

