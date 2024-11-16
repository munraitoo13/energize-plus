import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Bruno from "../images/Bruno.png";
import Augusto from "../images/Augusto.png";
import Hermann from "../images/Hermann.png";

export default function Sobre() {
  return (
    <>
      <Navbar />

      <Header
        title="Quem Somos?"
        description="Conheça um pouco mais sobre nós e nossa empresa. Saiba como tudo começou e como chegamos até aqui."
      />

      <article className="mt-32 flex flex-col gap-5 p-5">
        <p>
          A Energize+ é uma empresa que nasceu do sonho de três amigos de
          infância: Bruno, Augusto e Hermann. Juntos, eles sempre tiveram o
          desejo de criar algo que pudesse impactar positivamente a vida das
          pessoas. Foi assim que surgiu a ideia de desenvolver um aplicativo
          para monitorar o consumo de energia de forma inteligente.
        </p>

        <div className="divider"></div>

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

        <div className="divider"></div>

        <p className="mt-16">
          O Energize+ é um aplicativo inteligente que ajuda você a monitorar e
          controlar o consumo de energia da sua casa. Com ele, você acompanha o
          gasto energético de cada aparelho, calcula os custos em tempo real e
          recebe dicas personalizadas para economizar. Integrado à tecnologia
          IoT, o Energize+ conecta-se aos seus dispositivos, otimizando o
          consumo de energia de forma prática e eficiente.
        </p>

        <p>
          Acreditamos que a tecnologia pode ser uma grande aliada na busca por
          um mundo mais sustentável. Por isso, estamos empenhados em desenvolver
          soluções inovadoras que contribuam para a preservação do meio ambiente
          e o uso consciente dos recursos naturais.
        </p>

        <p>
          Nosso objetivo é levar informação e conhecimento para as pessoas,
          ajudando-as a tomar decisões mais conscientes e responsáveis em
          relação ao consumo de energia. Queremos que todos possam fazer a sua
          parte para construir um futuro melhor para as próximas gerações e para
          o planeta como um todo.
        </p>

        <div className="divider"></div>

        <p className="mt-16">
          Obrigado por fazer parte dessa jornada conosco. Juntos, podemos fazer
          a diferença e transformar o mundo em um lugar melhor para todos.
          Contamos com você para nos ajudar a construir um futuro mais
          sustentável e consciente.
        </p>

        <div className="mx-auto mt-16 w-fit">
          <h3 className="text-5xl font-black">
            Energize<span className="text-green-500">+</span>
          </h3>
          <p>Consumo inteligente. </p>
        </div>
      </article>
    </>
  );
}
