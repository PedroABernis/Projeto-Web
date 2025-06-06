import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import FunctionCard from "../components/FunctionCard";
import "../styles/header.css";
import "../styles/utility.css";
import Close from "../assets/icons/close.svg";
import Menu from "../assets/icons/hamburguer.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Porçao from "../assets/icons/Porções.svg";
import Drink from "../assets/icons/Drinks.svg";
import AoVivo from "../assets/icons/Show ao vivo.svg";
import Caipirinha from "../assets/icons/Caipirinha em Dobro.svg";
import "../styles/hero.css";
import ProfileImageOne from "../assets/icons/Profile Icon.svg";
import ProfileTwo from "../assets/icons/Profile Two.svg";
import ProfileThree from "../assets/icons/Profile Three.svg";
import CarouselCard from "../components/CarouselCard";


export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img
            src={Logo}
            alt="Logo Galpão"
            width={220}
            height={80}
            style={{ position: "relative", zIndex: 2 }}
          />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#foryou">Para Você</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#hero"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#foryou"
                      >
                        Para Você
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#testimonials"
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#pricing"
                      >
                        Preços
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                    style={{ position: "absolute", top: 24, right: 40 }}
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
                style={{ position: "absolute", top: 24, right: 24 }}
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <span></span>
          <p className="desktop-only" style={{ color: "white" }}>
            {" "}
            Olá !
          </p>
          <h1 className="text-shadow">
            Espetinhos que ardem <br></br>e cervejas que gelam!
          </h1>
          <p>
            O sabor da brasa e a refrescância que você merece, é só pedir e
            aproveitar!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="foryou">
        <header>
          <span>
            <h2 className="heading-gap">Para Você</h2>
            <span className="desktop-only">
              <h2>Sob medida pra sua experiência no Galpão</h2>
            </span>
          </span>
          <p>
            Aqui no <strong>Galpão</strong>, a gente combina sabor, música boa e
            aquele clima que faz você se sentir em casa. Dá uma olhada no que
            preparamos pra deixar o seu rolê ainda mais completo:
          </p>
        </header>
        <section className="even-columns">
            <FunctionCard
              icon={Porçao}
              title="Porções e Espetos"
              description="Nossas porções são generosas e os espetos saem direto da brasa, sempre no ponto certo. Perfeitos pra dividir com a galera ou encarar sozinho."
            />
            <FunctionCard
              icon={Drink}
              title="Bebidas pra Todos os Gostos"
              description="Do chopp gelado às caipirinhas e drinks variados, a gente tem de tudo pra acompanhar seu rolê com estilo e sabor."
            />
            <FunctionCard
              icon={AoVivo}
              title="Música Ao Vivo & Clima de Galera"
              description="Aqui tem som bom direto do palco, ambiente acolhedor e aquela vibe perfeita pra curtir com os amigos — do início ao fim."
            />
            <FunctionCard
              icon={Caipirinha}
              title="Sexta da Caipirinha em Dobro"
              description="Sexta no Galpão é assim: prosa boa e caipirinha em dobro pra esquentar o coração e refrescar a alma!"
            />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
            aquela ideia de que comida congelada tem de ser algo sem gosto,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
          <CarouselCard
              testimony="O Galpão é o lugar perfeito pra quem ama comida boa e um clima descontraído. Os espetos são de dar água na boca e as porções são generosas. Recomendo!"
              profileImg={ProfileImageOne}
              rating={5}
              name="Fábio D'alecio "
              position="Prefeito de Ubiratã"
            />
            <CarouselCard
              testimony="Trabalho todos os dias para garantir um ambiente acolhedor, comida de qualidade e atendimento que faz você se sentir em casa. Nosso maior prazer é ver nossos clientes satisfeitos e felizes a cada visita."
              profileImg={ProfileTwo}
              rating={5}
              name="Leandro H. Santiago "
              position=" Proprietário do Galpão"
            />
            <CarouselCard
              testimony="Tocar aqui é sempre uma experiência incrível! A energia do público e o clima do lugar são únicos, criando a vibe perfeita para a festa. Adoro fazer parte dessa história e animar a galera com som de qualidade"
              profileImg={ProfileThree}
              rating={4}
              name="André Gabiroba"
              position="DJ e Músico"
            />
            <CarouselCard
              testimony="O Galpão é o lugar perfeito pra quem ama comida boa e um clima descontraído. Os espetos são de dar água na boca e as porções são generosas. Recomendo!"
              profileImg={ProfileImageOne}
              rating={5}
              name="Fábio D'alecio "
              position="Prefeito de Ubiratã"
            />
            <CarouselCard
              testimony="Trabalho todos os dias para garantir um ambiente acolhedor, comida de qualidade e atendimento que faz você se sentir em casa. Nosso maior prazer é ver nossos clientes satisfeitos e felizes a cada visita."
              profileImg={ProfileTwo}
              rating={5}
              name="Leandro H. Santiago "
              position=" Proprietário do Galpão"
            />
            <CarouselCard
              testimony="Tocar aqui é sempre uma experiência incrível! A energia do público e o clima do lugar são únicos, criando a vibe perfeita para a festa. Adoro fazer parte dessa história e animar a galera com som de qualidade"
              profileImg={ProfileThree}
              rating={4}
              name="André Gabiroba"
              position="DJ e Músico"
            />
            <CarouselCard
              testimony="O Galpão é o lugar perfeito pra quem ama comida boa e um clima descontraído. Os espetos são de dar água na boca e as porções são generosas. Recomendo!"
              profileImg={ProfileImageOne}
              rating={5}
              name="Fábio D'alecio "
              position="Prefeito de Ubiratã"
            />
          
          </div>
        </section>
      </section>
    </>
  );
}
