import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CelularNatureza from "../images/CelularNatureza.jpg";
import Projecting from "../images/Projecting.jpg";
import { Link } from "react-router-dom";

export default function Beneficios() {
  return (
    <>
      <Navbar />

      <Header
        title="Por que Escolher o Energize+?"
        description="Conheça os benefícios de escolher o Energize+ para a sua casa ou empresa. Economia, sustentabilidade e muito mais!"
      />

      <article className="mt-32 flex flex-col gap-5 p-5">
        <p>
          É inegável que o desperdício de energia no Brasil é significativo.
          Entretanto, o Energize+ está aqui para te ajudar a economizar e
          reduzir o impacto ambiental.
        </p>

        <img
          src={CelularNatureza}
          alt="Celular e natureza"
          className="mx-auto w-full rounded-xl"
        />

        <p>
          Com economias relatadas de até 30% na conta de luz, o Energize+ é uma
          ótima opção para quem deseja economizar. Além disso, a redução do
          consumo de energia também contribui para a preservação do meio
          ambiente, ajudando a reduzir a emissão de gases de efeito estufa.
        </p>

        <p>
          Outro benefício do Energize+ é a possibilidade de monitorar o consumo
          de energia em tempo real, permitindo que você identifique quais
          aparelhos estão consumindo mais energia e tome medidas para reduzir o
          consumo. Com o Energize+, você pode ter mais controle sobre o seu
          consumo de energia e evitar surpresas na conta de luz.
        </p>

        <p>
          Enfim, com a conscientização sobre o consumo de energia e a adoção de
          práticas de eficiência energética, o Energize+ é uma ferramenta
          essencial para aqueles que querem fazer sua parte no mundo.
          Experimente o Energize+ e veja os benefícios na prática!
        </p>

        <img
          src={Projecting}
          alt="Projetando ideias"
          className="mx-auto w-full rounded-xl"
        />

        <p>
          A facilidade de uso do Energize+ também é um ponto a se destacar. Com
          uma interface intuitiva e funcionalidades simples de entender, o
          Energize+ é uma solução acessível para quem deseja economizar energia.
        </p>

        <div className="divider"></div>

        <p className="mt-16">
          Já que agora você sabe o quão bom é o Energize+, que tal dar uma
          olhada no por que ele foi criado e também ver um pouco mais sobre os
          seus desenvolvedores? Clique no botão abaixo para saber mais!
        </p>

        <Link to="/sobre" className="button-primary mx-auto">
          Sobre
        </Link>
      </article>
    </>
  );
}
