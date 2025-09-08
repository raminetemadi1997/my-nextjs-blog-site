"use client"
import Link from "next/link";
import { IDataItem, IMenuData } from "./Public/Header";

const Navbar = ({data ,className}: IMenuData) => {
    
    return (
        <nav className={className}>
            <ul className="flex gap-8">
                {
                    data.map(({slug,name,id}:IDataItem)=>(

                        <li key={id} className="text-gray-700 hover:text-black relative group">
                            <Link href={`/${slug}`} title={name}>{name}</Link>
                            {/* زیر منو ها */}
                            {/* {
                               items && items?.length > 0 &&
                               <ul className="absolute w-3xs h-auto p-2 bg-[#d6d3d3] rounded group-hover:block hidden">
                                {items?.map(sub=>(
                                    <li key={sub.id} className="text-gray-700 hover:text-black relative">
                                         <Link href={sub.link} title={sub.name}>{sub.name}</Link>
                                    </li>
                                ))}
                               </ul>
                            } */}
                        </li>
                        
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;