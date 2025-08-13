"use client"
import Link from "next/link";
import './Page.css';
import img_git from './img/github.png';
import img_insta from './img/instagram.png';
import img_linkedin from './img/linkedin.png';
import imgEU from './img/fotoEU.jpg';
import Image from "next/image";
import check_img from './img/ok_img.png';
import useTela from './componentes/Tela.jsx';
import NavbarMobile from './componentes/Navbar_mobile.jsx';

export default function Home() {

  const largura = useTela();
  const isMobile = largura < 768;

  return (
    <div>
      <header className="header_sobre">

        <div className="boi">
          <div className="div_inheader">
            <h1>Paulo Teles</h1>
             {!isMobile && (
            <h1>|</h1>
            )}
          </div>
          {!isMobile && (
            <>
            <h1 className="pagina_atual">Sobre</h1>
            <Link  href={"./Projetos"}>Projetos</Link>
            <Link  href={"./Contato"}>Contato</Link>
            </>
          )}
        </div>
        {!isMobile && (
        <div className="div_social">
          <a href="https://github.com/paulo-azul" target="_blank"><Image src={img_git} alt="Imagem redireciona github" title="Meu Github" className="icone_social"/></a>
          <a href="https://www.instagram.com/paulotelesserra/" target="_blank"><Image src={img_insta} alt="Imagem rediciona instagram" title="Meu Instagram" className="icone_social"/></a>
          <a href="https://www.linkedin.com/in/paulo-teles-serra-azul-1265b3351/" target="_blank"> <Image src={img_linkedin} alt="Imagem redireciona linkedin" title="Meu linkedin" className="icone_social"/></a>
        </div>
         )}
        
      </header>

      <div className="div_apresentação">
        <div className="cabecalho_apresentação">
          {isMobile && (
            <>
              <NavbarMobile />
            </>
          )}
          <Image src={imgEU} className="imgEU" alt="Foto Paulo Teles"/>
          {!isMobile && (
          <h1 className="apresentação_txt"> | </h1>
          )}
          <h1 className="apresentação_txt">Apresentação</h1>
          {isMobile && (
            <hr className="linha_horizontal" />
          )}
        </div>
        <div className="div_txt_apresentação">
          <p className="txt_apresentação1">Desde pequeno, sempre fui muito interessado por tecnologia e sempre gostei muito das matérias da área de exatas. Atualmente, estou cursando engenharia de computação na UFBA, onde estou tendo contato com toda a base das engenharias e aprendendo diversas coisas no setor da computação. </p>
          <p className="txt_apresentação2">Minhas experiências incluem: </p>
          <ul className="lista">
            <li> <b>GruPro (Grupo de Programação Competitiva da UFBA):</b> Nesse grupo participo do avançado e do intermidiário e tenho aulas de progamação em C++ com foco em progamação competitiva, também fazemos diversos exercícios no jude (plataforma de progamação da UFBA) e maratonas.</li>
            <li> <b>Cursos de Capacitação (Tomorrow/Positivo):</b> A Tomorrow oferece vários cursos livres que estão me ajudando a desenvolver minhas habilidades em diversas tecnologias. Atualmente já fiz um curso de Frontend com React e aprendi a usar CSS, HTML, React e Next.js e estou fazendo um curso de redes de computadores.</li>
            <li> <b>Godot (Engine de jogos): </b> Sempre gostei muito de jogar videogame e sempre sonhei em fazer um jogo por isso decidi começar a desenvolver um jogo com tudo que mais gosto: um MMO RPG. Embora, devido as grandes demandas, seja um projeto de longo prazo, estou aprendendo diversas coisas no processo. </li>
          </ul>
        </div>
      </div>

      <div className="div_check">
        <Image src={check_img} alt="imagem check" title="Faça contato!" className="check_img"/>
        <p>Estou disponível para trabalho - <Link href={"./Contato"} className="link_check">Faça contato!</Link></p>
      </div>


    </div>
    
  );
}
