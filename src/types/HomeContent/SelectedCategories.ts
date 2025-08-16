
// selectedCategories = SC

import { IRPItemData } from "./RecentlyPosts";

export interface ISCData {
    status : boolean,
    message : string,
    data:ISCItems[],
}


export interface ISCItems {
    status : boolean,
    message : string,
    data :ISCItem,
}


interface ISCItem {
    id: number,
    name:string,
    slug:string,
    extra : ISCExtra
}


interface ISCExtra {
    posts: ISCPosts[];
}

interface ISCPosts {
    status:boolean,
    message : string,
    data:IRPItemData,
}