
import { useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/utility.css";
import Close from "../assets/icons/close.svg";
import Menu from "../assets/icons/hamburguer.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";

export default function Home() {
const [showMobileMenu, setShowMobileMenu] = useState(false);
return (
    <>
    <header className="container py-sm">
        <nav className="flex items-center justify-between">
            <img src={Logo} alt="Logo Galpão" width={220} height={80} />
                <div className="desktop-only">
                <ul className="flex gap-1">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                           <a href="#solution">Soluções</a>
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
         <a className="reverse-color ml-lg" href="">Login</a>
            <Button text="Cadastre-se" />
        </div>
</div>

<div className="mobile-menu">
    {showMobileMenu ?
        <div className="mobile-menu-content">
            <div className="container flex">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#solution">Soluções</a>
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
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">    
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                </span>
            </div>
        </div>
        :
            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                <img src={Menu} alt="ícone menu" width={24} height={24} /> 
            </span>
    }
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
<p className="desktop-only" style={{ color: "white" }}> Olá !</p>
    <h1>Espetinhos que ardem <br></br>e cervejas que gelam!</h1>
    <p>O sabor da brasa e a refrescância que você merece, é só pedir e aproveitar!</p>
    <div className="flex gap-1">
        <span><Button text="Cadastre-se" /></span>
        <span className="desktop-only">
            <Button text="Veja mais" secondary />
        </span>
    </div>
</div>
</section>
         </>
    )
}