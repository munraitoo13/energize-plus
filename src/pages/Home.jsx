import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Bruno from "../images/Bruno.png";
import Augusto from "../images/Augusto.png";
import Hermann from "../images/Hermann.png";
import Solar1 from "../images/Solar1.jpeg";
import Solar2 from "../images/Solar2.jpeg";
import Solar3 from "../images/Solar3.jpeg";
import Wind1 from "../images/Wind1.jpeg";
import Wind2 from "../images/Wind2.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* header */}
        <div className="flex flex-col items-center gap-5">
          <Header
            title="Energize+"
            description="Controle inteligente de consumo energético. Um super app para você controlar o consumo de energia da sua casa."
          />

          <div className="flex gap-3">
            <Link to="/problema" className="button-primary">
              Nosso Projeto
            </Link>

            <Link to="/sobre" className="button-secondary">
              Sobre Nós
            </Link>
          </div>
        </div>

        {/* section imagens */}
        <section className="mt-32 columns-2 gap-3 space-y-3 p-3 md:columns-3">
          <img src={Solar2} alt="Solar2" className="rounded-lg" />
          <img src={Solar1} alt="Solar1" className="rounded-lg" />
          <img src={Wind1} alt="Wind1" className="rounded-lg" />
          <img src={Wind2} alt="Wind2" className="rounded-lg" />
          <img src={Solar3} alt="Solar3" className="rounded-lg" />
        </section>

        {/* section resumo */}
        <section className="mx-auto mt-32 p-5 text-center">
          <h2 className="text-center text-2xl font-bold">O que é Energize+</h2>

          <p className="text-neutral-500">
            O Energize+ é um aplicativo inteligente que ajuda você a monitorar e
            controlar o consumo de energia da sua casa. Com ele, você acompanha
            o gasto energético de cada aparelho, calcula os custos em tempo real
            e recebe dicas personalizadas para economizar. Integrado à
            tecnologia IoT, o Energize+ conecta-se aos seus dispositivos,
            otimizando o consumo de energia de forma prática e eficiente. Agora,
            um pouco dos nossos criadores:
          </p>

          <div className="divider"></div>

          {/* criadores */}
          <div className="mt-16 flex flex-col justify-evenly gap-10 md:flex-row">
            <div className="flex flex-col items-center">
              <img src={Bruno} alt="Bruno" className="h-20 w-20 rounded-full" />
              <h3 className="text-lg font-bold">Bruno Raniere</h3>
              <p className="text-neutral-500">Apresentador</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={Augusto}
                alt="Augusto"
                className="h-20 w-20 rounded-full"
              />
              <h3 className="text-lg font-bold">Augusto Mendes</h3>
              <p className="text-neutral-500">Desenvolvedor</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={Hermann}
                alt="Hermann"
                className="h-20 w-20 rounded-full"
              />
              <h3 className="text-lg font-bold">Hermann Marinho</h3>
              <p className="text-neutral-500">Brainstorm</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* section pitch */}
        <section className="mx-auto mt-16 p-5 text-center">
          <h2 className="text-center text-2xl font-bold">
            Assista nosso video pitch
          </h2>

          <p className="text-neutral-500">
            Confira nosso vídeo pitch e descubra como podemos transformar seu
            dia. Clique e assista!
          </p>

          <iframe
            src="https://www.youtube.com/embed/6NcFJQvizP8"
            title="Global Solution 2 - Energize+"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="mt-10 h-96 w-full rounded-xl"
          ></iframe>
        </section>

        <div className="divider"></div>

        {/* section contato */}
        <section className="mx-auto mt-16 p-5 text-center">
          <h2 className="text-center text-2xl font-bold">
            Fale conosco e tire suas dúvidas
          </h2>

          <p className="text-neutral-500">
            Entre em contato conosco para tirar suas dúvidas, dar sugestões ou
            apenas bater um papo. Estamos ansiosos para ouvir você!
          </p>

          <form className="mx-auto mt-10 flex flex-col gap-2">
            <input type="text" placeholder="Nome" className="input" />

            <input type="email" placeholder="E-mail" className="input" />

            <textarea
              placeholder="Mensagem"
              className="input h-96 resize-none"
            ></textarea>

            <button type="submit" className="button-primary mx-auto mt-5">
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
