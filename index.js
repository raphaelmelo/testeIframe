import Head from "next/head"; 
import Script from "next/script";
const EfiJs = require('payment-token-efi');
import { useEffect, useState } from 'react';

export default function Home() {
  const [state, setState] = useState({
    identificadorAccount: '6ecb42e5bbd4fc89de83fbb987047fe9',
    environment: 'sandbox',
    brandCard: '',
    numCartao: '',
    cvv: '',
    expirationMonth: '',
    expirationYear: '',
    reuse: false
  });
 
  const checkBrand = () => {

    try {
        EfiJs.CreditCard
            .setCardNumber(state.numCartao)
            .verifyCardBrand()
            .then(brand => {
                setState({ ...state, brandCard: brand });
                console.log('brand: ', brand);
            }).catch(err => {
              console.log('erro ao checkBrand: ', err);
            });
    } catch (error) {
      console.log('erro ao checkBrand: ', error);
    }
}
 const handleSubmit = async (event) => {
  event.preventDefault();

  await checkBrand(); 
  try {
    EfiJs.CreditCard
    .setAccount(state.identificadorAccount)
    .setEnvironment(state.environment) // 'production' or 'sandbox'
    .setCreditCardData({
        brand: state.brandCard,
        number: state.numCartao,
        cvv: state.cvv,
        expirationMonth: state.expirationMonth,
        expirationYear: state.expirationYear,
        reuse: state.reuse
    })
    .getPaymentToken()
    .then(data => {

        const payment_token = data.payment_token;
        const card_mask = data.card_mask;

        document.getElementById("paymentToken").innerHTML = payment_token;
        document.getElementById("cardMask").innerHTML = card_mask;

        console.log('payment_token', payment_token);
        console.log('card_mask', card_mask);
    })
    .catch(err => {
        console.log('Código: ', err.code);
        console.log('Nome: ', err.error);
        console.log('Mensagem: ', err.error_description);
    })

  } catch (err) {
    console.log('Código: ', err.code);
    console.log('Nome: ', err.error);
    console.log('Mensagem: ', err.error_description);
  }

}



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
 
      </Head>
      <Script src="https://cdn.jsdelivr.net/gh/efipay/js-payment-token-efi/dist/payment-token-efi.min.js" />

      <main  >
        {/* Criar form com os inputs e botão enviar para API */}
        <form>
          <input
            type="text"
            placeholder="Num Cartao"
            name="numCartao"
            onChange={event => setState({ ...state, numCartao: event.target.value })}
          />
          <input
            type="text"
            placeholder="CVV"
            name="cvv"
            onChange={event => setState({ ...state, cvv: event.target.value })}
          />
          <input
            type="text"
            placeholder="Expiration Month"
            name="expirationMonth"
            onChange={event => setState({ ...state, expirationMonth: event.target.value })}
          />
          <input
            type="text"
            placeholder="Expiration Year"
            name="expirationYear"
            onChange={event => setState({ ...state, expirationYear: event.target.value })}
          />
          <input
            type="text"
            placeholder="Reuse"
            name="reuse"
            onChange={event => setState({ ...state, reuse: event.target.value })}
          />
          <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
      </main>
    </>
  );
}
