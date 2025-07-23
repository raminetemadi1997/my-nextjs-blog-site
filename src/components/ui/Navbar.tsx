"use client"

import { INavbarProps } from "@/types/navbar";
import Link from "next/link";

const navBarData : INavbarProps[]=[
    {
        id:'1',
        link:'/',
        name:'خانه',
        
    },
    {
        id:'2',
        link:'/category',
        name:'آیفون تصویری'
    },
    {
        id:'3',
        link:'/',
        name:'اعلام حریق'
    },
    {
        id:'4',
        link:'/',
        name:'دوربین مداربسته'
    },
    {
        id:'5',
        link:'/',
        name:'راهنمای خرید'
    },
    {
        id:'6',
        link:'/',
        name:'راهنمای نصب جک پارکینگی'
    },
    {
        id:'7',
        link:'/',
        name:'درباره ما',
        items:[
            {
                id:"1",
                link:'/',
                name:'سایت'
            }
        ]
    },

]

const Navbar = ({className}: {className?:string}) => {
    return (
        <nav className={className}>
            <ul className="items-center flex gap-8">
                {
                    navBarData.map(({id , link , name , items}:INavbarProps)=>(

                        <li key={id} className="text-gray-700 hover:text-black relative group">
                            <Link href={link} title={name}>{name}</Link>
                            {
                               items && items?.length > 0 &&
                               <ul className="absolute w-3xs h-auto p-2 bg-[#d6d3d3] rounded group-hover:block hidden">
                                {items?.map(sub=>(
                                    <li key={sub.id} className="text-gray-700 hover:text-black relative">
                                         <Link href={sub.link} title={sub.name}>{sub.name}</Link>
                                    </li>
                                ))}
                               </ul>
                            }
                        </li>
                        
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;