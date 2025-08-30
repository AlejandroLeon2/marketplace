import data from '../../../data/libros.json';

export async function getInformation () :Promise<any[]> {

    // funcion que obtiene datos de Firebase

    const datos:any[] = data

    return datos
}