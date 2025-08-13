"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar_mobile.css"; 
import menu_bar from '../img/menu.png';
import sair from '../img/x.png';
import img_git from '../img/github.png';
import img_insta from '../img/instagram.png';
import img_linkedin from '../img/linkedin.png';

export default function NavbarMobile() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div>
      <button className="botao_menu" onClick={() => setMenuAberto(!menuAberto)}>
        <Image src={menu_bar} alt="menu bar" className="menu_bar"  onClick={() => setMenuAberto(true)}/>
      </button>

      {menuAberto && (
        <>
        <button className="botao_menu" onClick={() => setMenuAberto(!menuAberto)}>
        <Image src={sair} alt="menu bar" className="sair_bar"  onClick={() => setMenuAberto(false)}/>
        </button>
        <nav className="menu_mobile">
            <Link className="link2" href="/" onClick={() => setMenuAberto(false)}>Sobre</Link>
            <Link className="link2" href="/Projetos" onClick={() => setMenuAberto(false)}>Projetos</Link>
            <Link className="link2" href="/Contato" onClick={() => setMenuAberto(false)}>Contato</Link>

        <div className="div_social">
            <a href="https://github.com/paulo-azul" target="_blank"><Image src={img_git} alt="Imagem redireciona github" title="Meu Github" className="icone_social"/></a>
            <a href="https://www.instagram.com/paulotelesserra/" target="_blank"><Image src={img_insta} alt="Imagem rediciona instagram" title="Meu Instagram" className="icone_social"/></a>
            <a href="https://www.linkedin.com/in/paulo-teles-serra-azul-1265b3351/" target="_blank"> <Image src={img_linkedin} alt="Imagem redireciona linkedin" title="Meu linkedin" className="icone_social"/></a>
        </div>
        </nav>
        </>
      )}
    </div>
  );
}