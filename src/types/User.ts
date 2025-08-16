import { IPictureProps } from "./picture";

export interface IUserProps {
    id:number,
    slug:string,
    fullName:string,
    image:IPictureProps,
    className:string,
}