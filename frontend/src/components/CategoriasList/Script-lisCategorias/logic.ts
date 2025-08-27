
export function checkData (array:any[]):string[]{
    console.log(array);
    
    let lists:string[] = array.map((obj) => `${obj.categoria}`);
    
    return lists;
}