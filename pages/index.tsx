import { NextPage } from 'next';
import Image from 'next/image';

import Bgtop from "@/public/bg-top.png"

const Home: NextPage = () => {
  return (
    <div className='h-screen relative'>
      <Image alt='' src={Bgtop} className="absolute inset-0 w-full h-full object-cover opacity-25"/>
      <div className='w-full p-12 flex flex-col gap-6'>
        <h1 className='text-3xl font-medium pb-8'>Seja Bem-vindo ao meu Portfólio</h1>
        <h2 className='font-medium text-2xl'>O que você encontrará nesse site?</h2>
        <ul className='text-lg flex flex-col gap-4 list-disc ml-8'>
          <li>Informações sobre mim</li>
          <li>Conhecerá alguns dos meus projetos de estudo</li>
          <li>Quais tecnologias e áreas de conhecimento</li>
          <li>O contato para orçamento de projetos ou contratação</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
