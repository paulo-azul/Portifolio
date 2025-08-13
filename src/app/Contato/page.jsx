"use client";
import Link from "next/link";
import './Page.css';
import img_git from '../img/github.png';
import img_insta from '../img/instagram.png';
import img_linkedin from '../img/linkedin.png';
import Image from "next/image";
import imgEU2 from '../img/imgEU2.jpg';
import whatsapp from '../img/whatsapp.png';
import emailIcon from '../img/email.png';
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const formaTel = (value) =>{
  value = value.replace(/\D/g,'');
  if(value.length > 11) value = value.slice(0, 11);
  value = value.replace(/(\d{0})(\d)/, '$1 ($2');
  value = value.replace(/(\d{2})(\d)/, '$1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  return value;
}

const formaNome = (value) =>{
  value = value.replace(/\d/g,'');
  value = value.toLowerCase();
  value = value.replace(/\b\w/g, (char) => char.toUpperCase());
  return value;
}

const formaMensg = (value) =>{
    value = value.replace(/\b\w/, (char) => char.toUpperCase())
    return value;
}

export default function Contato() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");
  const [formvalido, setFormvalido] = useState(false);
  const [enviando, setEnviando] = useState(false);
 
  useEffect(() => { emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID); }, []);

  useEffect(() => {
  const validaForm = () => {
    const NomeValido = nome !== "";
    const TelefoneValido = telefone.replace(/\D/g, '').match(/^\d{10,11}$/);
    const EmailValido = email !== "" && email.includes("@") && email.includes(".");
    const MensagemValido = mensagem !== "";
  
    setFormvalido(NomeValido && TelefoneValido && EmailValido && MensagemValido);
  };

  validaForm(); 

  }, [nome, telefone, email, mensagem]); 
  
  const envio_dados = (e) => {

    e.preventDefault()

    if(nome == ""){
      setError("Preencha seu nome")
      return;
    }if(telefone==""){
      setError("Preencha seu telefone")
      return;
    }
    const sem_forma_tel = telefone.replace(/\D/g, ''); 
    if (!sem_forma_tel.match(/^\d{10,11}$/)) {
      setError("Telefone inválido");
      return;
    }if(email==""){
      setError("Preencha seu e-mail")
      return;
    }if(!email.includes("@")){
      setError("E-mail inválido");
      return;
    }if (!email.includes(".")){
      setError("E-mail inválido")
      return;
    }if(mensagem == ""){
      setError("Mande uma mensagem!")
      return;
    }
    setError("");

    if (enviando) {
        return;
    }

    setEnviando(true);

    const templateParams = {
        nome: nome,
        email: email,
        telefone: telefone,
        msg: mensagem,
    };
    
        toast.promise(
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            ),
            {
                loading: 'Enviando sua mensagem...',
                success: 'Mensagem enviada com sucesso!',
                error: 'Ocorreu um erro, tente novamente mais tarde.'
            }
        ).then(() => {
            setNome("");
            setTelefone("");
            setEmail("");
            setMensagem("");
            setFormvalido(false);
        }).finally(() => {
            setEnviando(false);
        });
    }


  return (
    <div>
      <header className="header_sobre">

        <div className="boi">
          <div className="div_inheader">
            <h1>Paulo Teles</h1>
            <h1>|</h1>
          </div>

          <Link  href={"./"}>Sobre</Link>
          <Link  href={"./Projetos"}>Projetos</Link>
          <h1 className="pagina_atual">Contato</h1>
          
          
        </div>

        <div className="div_social">
          <a href="https://github.com/paulo-azul" target="_blank"><Image src={img_git} alt="Imagem redireciona github" title="Meu Github" className="icone_social"/></a>
          <a href="https://www.instagram.com/paulotelesserra/" target="_blank"><Image src={img_insta} alt="Imagem rediciona instagram" title="Meu Instagram" className="icone_social"/></a>
          <a href="https://www.linkedin.com/in/paulo-teles-serra-azul-1265b3351/" target="_blank"> <Image src={img_linkedin} alt="Imagem redireciona linkedin" title="Meu linkedin" className="icone_social"/></a>
        </div>
      </header>

      <div className="div_principal_ctt">
        <div className="div_contato1">
          <div>
            <Image src={imgEU2} alt="imagem Paulo Teles 2"className="imgEu2" />
          </div>
          <div className="div_contato_txt">
            <h1 className="contato_title">Entre em contato!</h1>
            <div className="contato_dados">
              <h2 className="digito">Paulo Teles Serra Azul - Eng. da computação</h2>
              <div className="cria">
                <Image src={whatsapp} className="icone_social" alt="Icone whatsapp" title="Meu número do WhatsApp"/>
                <p className="digito">71 996650390 </p>
              </div><div className="cria">
                <Image src={emailIcon} className="icone_social" alt="Icone E-mail" title="Meu E-mail"/>
                <p className="digito"> Paulotelesserraazul@gmail.com </p>
              </div> <div className="div_social2">
                <a href="https://github.com/paulo-azul" target="_blank"><Image src={img_git} alt="Imagem redireciona github" title="Meu Github" className="icone_social"/></a>
                <a href="https://www.instagram.com/paulotelesserra/" target="_blank"><Image src={img_insta} alt="Imagem rediciona instagram" title="Meu Instagram" className="icone_social"/></a>
                <a href="https://www.linkedin.com/in/paulo-teles-serra-azul-1265b3351/" target="_blank"> <Image src={img_linkedin} alt="Imagem redireciona linkedin" title="Meu linkedin" className="icone_social"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="div_form_ctt">
          <form onSubmit={envio_dados}>
          <div className="data__ctt">
            <div className="div_nomectt">
              <label>Nome Completo</label>
              <input type="text" name="nome" id="nome" className="input1" placeholder="Insira seu nome aqui" value={nome} onChange={(e) => setNome(formaNome(e.target.value))} required/>
            </div>
            <div className="form_pt2">
              <div className="div_formDa">
                <label>Email</label>
                <input type="email" className="input2" id="email" name="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div><div className="div_formDa">
                <label>Telefone</label>
                <input type="tel" className="input2" placeholder="ex: (71) 99999-9999" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(formaTel(e.target.value))} required/>
              </div>
            </div><div className="msg_ctt">
              <label>Mensagem</label>
              <textarea className="msg" placeholder="Escreva sua mensagem aqui..." name="msg" id="msg" value={mensagem} onChange={(e) => setMensagem(formaMensg(e.target.value))} required/>
            </div>
          </div>
          <div className="div_submit">
            {error && <p style={{color:'red'}} className="erro_css">{error}</p>}
            <input type="submit"  value={enviando ? "Enviando..." : "Enviar"} 
            className={` botão_submit ${formvalido ? 'botao_submit_valido' : ''} ${enviando ? 'cursor_loading' : ''}`}/>
          </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" containerStyle={{ top: 80, left: 20, bottom: 20, right: 20,}}/> 
    </div>
  );
}
