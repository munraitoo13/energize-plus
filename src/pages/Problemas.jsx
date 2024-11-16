import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Energia from "../images/Energia.jpeg";
import { Link } from "react-router-dom";

export default function Problemas() {
  return (
    <>
      <Navbar />

      <Header
        title="O Desafio do Consumo Energético"
        description="Como o desperdício de energia impacta financeiramente e ambientalmente."
      />

      <article className="mt-32 flex flex-col gap-5 p-5">
        <p>
          O desperdício de energia no Brasil é significativo. Entre 2015 e 2017,
          o país perdeu cerca de R$ 61,7 bilhões devido ao uso ineficiente de
          energia, valor que poderia construir 240 hospitais. Esse desperdício
          impacta diretamente as finanças pessoais, resultando em contas de luz
          mais altas para os consumidores.
        </p>

        <img src={Energia} alt="Energia" className="mx-auto rounded-xl" />

        <p>
          Além disso, a produção de energia adicional para compensar perdas
          aumenta a emissão de gases de efeito estufa, contribuindo para as
          mudanças climáticas e prejudicando o meio ambiente. A adoção de
          práticas de eficiência energética pode reduzir custos e minimizar
          impactos ambientais. Por exemplo, a substituição de lâmpadas
          tradicionais por LEDs em municípios brasileiros economizou 70 GWh por
          ano.
        </p>

        <p>
          Dito isso, a conscientização sobre o consumo energético e a
          implementação de medidas para reduzir o desperdício são fundamentais
          para garantir a sustentabilidade do setor elétrico e a preservação do
          meio ambiente para as futuras gerações. A tecnologia pode ser uma
          grande aliada nesse processo, permitindo o monitoramento e controle do
          consumo de energia de forma inteligente e eficiente.
        </p>

        <div className="divider"></div>

        <p className="mt-16">
          Você já considerou implementar medidas de eficiência energética em sua
          residência ou empresa? Veja como o Energize+ pode te ajudar!
        </p>

        <Link to="/funcionalidades" className="button-primary mx-auto">
          Funcionalidades
        </Link>
      </article>
    </>
  );
}
