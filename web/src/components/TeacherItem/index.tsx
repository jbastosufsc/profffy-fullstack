import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars2.githubusercontent.com/u/6197055?s=460&u=a747793b41741c3077347405c65062a0c02aa41c&v=4'
          alt='Jorge Bastos'
        />
        <div>
          <strong>Jorge Bastos</strong>
          <span>Programador</span>
        </div>
      </header>
      <p>
        Olá, meu nome é Jorge. Atualmente estou vivendo em Florianópolis/SC{' '}
        <br />
        <br />
        Brasil. Sou Bacharel em Sistemas de Informação pela Universidade Federal
        de Santa Catarina. Com 5 anos de experiência, hoje trabalho como
        programador na DevPizza, desenvolvendo projetos e entregando websites,
        e-commerces e aplicativos.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
