import Navbar from "../components/Navbar";
import CelularCama from "../images/CelularCama.jpeg";
import Bulb from "../images/Bulb.jpg";
import Graph from "../images/Graph.jpeg";
import Comemorando from "../images/Comemorando.jpg";
import Header from "../components/Header";
import Celular from "../images/Celular.jpg";
import { Link } from "react-router-dom";

export default function Funcionalidades() {
  return (
    <>
      <Navbar />

      <Header
        title="Como o Energize+ Funciona"
        description="Conheça as funcionalidades do Energize+ e veja como ele pode te ajudar a economizar energia."
      />

      <article className="mt-32 flex flex-col gap-5 p-5 text-center">
        {/* monitoramento */}
        <div>
          <h2 className="text-xl font-bold">Monitoramento em Tempo Real</h2>

          <p>
            Acompanhe o consumo de energia em tempo real com um painel intuitivo
            e detalhado. Saiba quanto cada aparelho consome e identifique os que
            mais gastam.
          </p>

          <img
            src={Celular}
            alt="Conferindo o consumo de energia"
            className="mx-auto mt-10 w-full rounded-xl"
          />
        </div>

        <div className="divider"></div>

        {/* controle */}
        <div className="mt-16">
          <h2 className="text-xl font-bold">Controle Remoto</h2>

          <p>
            Ligue e desligue aparelhos eletrônicos de qualquer lugar, evitando o
            consumo em stand-by e economizando energia. Programe horários de
            funcionamento e crie cenários personalizados.
          </p>

          <img
            src={CelularCama}
            alt="Controlando aparelhos remotamente direto da cama"
            className="mx-auto mt-10 w-full rounded-xl"
          />
        </div>

        <div className="divider"></div>

        {/* relatorio */}
        <div className="mt-16">
          <h2 className="text-xl font-bold">Relatórios Detalhados</h2>

          <p>
            Receba relatórios mensais com economia gerada e comparativos de
            consumo. Acompanhe a evolução do seu consumo e identifique
            oportunidades de economia.
          </p>

          <img
            src={Graph}
            alt="Grafico subindo"
            className="mx-auto mt-10 w-full rounded-xl"
          />
        </div>

        <div className="divider"></div>

        {/* dicas */}
        <div className="mt-16">
          <h2 className="text-xl font-bold">Dicas Personalizadas</h2>

          <p>
            Receba dicas personalizadas para economizar energia e reduzir sua
            conta de luz. Aprenda a utilizar seus aparelhos de forma mais
            eficiente e sustentável.
          </p>

          <img
            src={Bulb}
            alt="Lâmpada de ideia"
            className="mx-auto mt-10 w-full rounded-xl"
          />
        </div>

        <div className="divider"></div>

        {/* gamificacao */}
        <div className="mt-16">
          <h2 className="text-xl font-bold">Gamificação</h2>

          <p>
            Participe de desafios e competições com amigos e familiares para
            economizar energia. Acumule pontos e conquiste prêmios ao atingir
            metas de economia. Divirta-se enquanto economiza!
          </p>

          <img
            src={Comemorando}
            alt="Comemorando economia de energia"
            className="mx-auto mt-10 w-full rounded-xl"
          />
        </div>

        <div className="divider"></div>

        <p className="mt-16">
          Afinal, quais os benefícios do Energize+ para você? Descubra como o
          app pode te ajudar a economizar energia e dinheiro.
        </p>

        <Link to="/beneficios" className="button-primary mx-auto">
          Benefícios
        </Link>
      </article>
    </>
  );
}
