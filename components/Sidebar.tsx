import Image from "next/image";

import IconBtn from "./Btn";

import { Home , Cog , User , FolderKanban , Mail , Power } from 'lucide-react';
import Profile from "@/public/me.png"

export function SideBar() {
    return(
        <div className="flex flex-col justify-between gap-8 p-4 py-12 w-60 h-screen bg-white z-1 absolute">
            <div className="flex flex-col items-center gap-4">
                <a href="/" className="flex items-center justify-center hover:opacity-50">
                    <Image alt="" src={Profile} className="w-2/3"/>
                </a>
                <h1 className="font-semibold text-xl">Jonathan Fernandes</h1>
                <div className="font-semidbold text-xl flex flex-col gap-2 w-full">
                    <IconBtn href="/" text="Início" className="hover:bg-orange-500 hover:text-white " Icon={Home}/>

                    <IconBtn href="profile" text="Perfil" className="hover:bg-orange-500 hover:text-white " Icon={User}/>

                    <IconBtn href="/" text="Projetos" className="hover:bg-orange-500 hover:text-white " Icon={FolderKanban}/>

                    <IconBtn href="/" text="Tecnologias" className="hover:bg-orange-500 hover:text-white " Icon={Cog}/>

                    <IconBtn href="/" text="Contato" className="hover:bg-orange-500 hover:text-white " Icon={Mail}/>
                </div>


            </div>


            <IconBtn href="/" Icon={Power} text="Sair" className="hover:text-orange-500 font-semidbold text-lg"/>
        </div>
    )
}