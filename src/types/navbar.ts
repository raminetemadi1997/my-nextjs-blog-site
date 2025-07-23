export interface INavbarProps {
    id:string,
    link:string,
    name:string,
    items?:ISubNavbarProps[]
}


interface ISubNavbarProps {
    id:string,
    link:string,
    name:string,
}