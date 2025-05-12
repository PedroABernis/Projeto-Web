import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import "../styles/header.css";
import "../styles/utility.css";
import Close from "../assets/icons/close.svg";
import Menu from "../assets/icons/hamburguer.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Porçao from "../assets/icons/Porções.svg";
import Drink from "../assets/icons/Drinks.svg";
import AoVivo from "../assets/icons/Show ao vivo.svg";
import "../styles/hero.css";
import "../styles/foryou.css";
import ProfileImageOne from "../assets/icons/Profile Icon.svg";
import Star from "../assets/icons/StarRate.svg";
import StarOuter from "../assets/icons/Star.svg";
import "../styles/testimonials.css";

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
          <div className="card">
            <Card
              icon={Porçao}
              title="Porções e Espetos"
              description="Nossas porções são generosas e os espetos saem direto da brasa, sempre no ponto certo. Perfeitos pra dividir com a galera ou encarar sozinho."
            />
          </div>
          <div className="card">
            <Card
              icon={Drink}
              title="Bebidas pra Todos os Gostos"
              description="Do chopp gelado às caipirinhas e drinks variados, a gente tem de tudo pra acompanhar seu rolê com estilo e sabor."
            />
          </div>
          <div className="card">
            <Card
              icon={AoVivo}
              title="Música Ao Vivo & Clima de Galera"
              description="Aqui tem som bom direto do palco, ambiente acolhedor e aquela vibe perfeita pra curtir com os amigos — do início ao fim."
            />
          </div>
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
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa comida
                  DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="ícone estrela sem fundo"
                  width={22}
                  height={20}
                />
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa comida
                  DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="ícone estrela sem fundo"
                  width={22}
                  height={20}
                />
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa comida
                  DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="ícone estrela sem fundo"
                  width={22}
                  height={20}
                />
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa comida
                  DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="ícone estrela sem fundo"
                  width={22}
                  height={20}
                />
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa comida
                  DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={StarOuter} alt="ícone estrela sem fundo" width={22} height={20}/>
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa comida
                  DonaFrost no almoço.
                </p>
              </span>
              <span className="rating">
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={Star} alt="ícone estrela" width={22} height={20} />
                <img src={StarOuter} alt="ícone estrela sem fundo" width={22} height={20}/>
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>
        </div>
        </section>
      </section>
    </>
  );
}
