"use client";

import Link from "next/link";
import './Page.css';
import img_git from '../img/github.png';
import img_insta from '../img/instagram.png';
import img_linkedin from '../img/linkedin.png';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import astro from '../img/astro.png';
import poke from '../img/poke.png';
import godot from '../img/jogo.png';
import SvgMask from '../componentes/SvgMask';


export default function Projetos() {
  return (
    <div className="PROJETO_PAGE">
      <header className="header_sobre">

        <div className="boi">
          <div className="div_inheader">
            <h1>Paulo Teles</h1>
            <h1>|</h1>
          </div>

          <Link  href={"./"}>Sobre</Link>
          <h1 className="pagina_atual">Projetos</h1>
          <Link  href={"./Contato"}>Contato</Link>
          
        </div>

        <div className="div_social">
          <a href="https://github.com/paulo-azul" target="_blank"><Image src={img_git} alt="Imagem redireciona github" title="Meu Github" className="icone_social"/></a>
          <a href="https://www.instagram.com/paulotelesserra/" target="_blank"><Image src={img_insta} alt="Imagem rediciona instagram" title="Meu Instagram" className="icone_social"/></a>
          <a href="https://www.linkedin.com/in/paulo-teles-serra-azul-1265b3351/" target="_blank"> <Image src={img_linkedin} alt="Imagem redireciona linkedin" title="Meu linkedin" className="icone_social"/></a>
        </div>
      </header>
      <div className="uepa">
        <h1 className="tit_proj">Sites</h1>
      </div>
      <div className="projects">
        <div className="itsME">
          <Swiper modules={[Pagination]} 
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide> 
              <div className="div_slide">
                <SvgMask />
                <Image src={astro} alt="imagem site astro" className="slide-de-projeto"/>  
                <div className="texto_slide"> 
                  <h1 className="tit_slide">Astroproject</h1>
                  <p className="tit_txt">Criei esse site durante o curso de Frontend com React da Tomorrow para aprender a utilizar o regex na validação do formulário. Além disso, a tarefa exigia um header e um footer e campos de validação de diversos tipos (texto, número, caixa de seleção...) e tinha como tema um formulário de inscrição para um projeto espacial. </p>
                  <p className="tit_txt">Além dos pré-requisitos do projeto, também resolvi utilizar o app-routes para criar páginas separadas e deixar a atividade mais próxima de um site real. </p>
                  <a className="tit_button" href="https://astroproject-nkdqi4peh-paulo-azuls-projects.vercel.app/" target="_blank">Acesse o site!</a>
                </div>
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
               <div className="div_slide">
                <SvgMask />
                <Image src={poke} alt="imagem site pokedex" className="slide-de-projeto"/>  
                <div className="texto_slide"> 
                  <h1 className="tit_slide">Pokedex</h1>
                  <p className="tit_txt">Esse site também foi criado durante o curso de Frontend com React da Tomorrow, mas, diferentemente do anterior, ele foi criado para aprender a utilizar integrações com APIs, que nesse caso foi a PokeApi. </p>
                  <p className="tit_txt">O objetivo era fazer a integração com a API, mas além disso resolvi fazer uma barra de pesquisa que filtra tudo que foi mostrado baseado no que foi digitado na pesquisa (vale ressaltar que ela uiliza os dados da PokeApi que está em inglês) filtrando por tipo ou nome. </p>
                  <a className="tit_button" href="https://pokedex-2nbk2sr3f-paulo-azuls-projects.vercel.app/" target="_blank">Acesse o site!</a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="uepa">
        <h1 className="tit_proj">Jogos</h1>
        </div>
        <div className="itsME">
          <Swiper modules={[Pagination]} 
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide> 
              <div className="div_slide">
                <SvgMask />
                <Image src={godot} alt="imagem site astro" className="slide-de-projeto"/>  
                <div className="texto_slide2"> 
                  <h1 className="tit_slide">RPG MMO</h1>
                  <p className="tit_txt">Como sempre sonhei em criar meu jogo dos sonhos quando aprendi a programar resolvi começar a desenvolver meu próprio MMO RPG, o jogo é pixelado em 2.5d, está sendo feito na godot e está sendo um grande desafio! </p>
                  <p className="tit_txt">Esse projeto tem me feito ter contato com diversas questões e problemas, como a velocidade do jogo em diferentes telas, todo o mecanismo que faz os jogadores se conectarem no jogo e interagirem, o desenvolvimento dos sprites e mundo (modelagem 2d e 3d) e outros. </p>
                  <p className="tit_txt">Tudo isso tem me feito aprender muito e embora o projeto ainda esteja longe de ser finalizado o processo tem sido bem interessante pra mim! </p>
                </div>
              </div>
              
            </SwiperSlide>
          </Swiper>
        </div>

    </div>
  );
}
