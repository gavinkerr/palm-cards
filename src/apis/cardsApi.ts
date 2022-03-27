import { Set } from '../domain/domain';

function getAllIds(): string[] {
    return JSON.parse(localStorage.getItem('set-all')||'[]') as string[];
}

export function getSets(): Promise<Set[]>{
    const allIds =  getAllIds();
    const allSets = allIds.map(id => localStorage.getItem('set-item-' + id))
    .filter(str => !!str)
    .map(str =>JSON.parse(str as string) as Set);

    return Promise.resolve(allSets);
}

export function getSet(id: string): Promise<Set|null>{
    const set =  localStorage.getItem('set-item-' + id);
    return Promise.resolve(!!set?JSON.parse(set) as Set:null);
}


export function addSet(set: Set): Promise<Set>{
    if(set.id){
        throw new Error("set is arleady added");
    }
    const rand = Math.random().toString(16).substring(2, 8);
    set = {...set, id: rand}
    localStorage.setItem('set-item-' + set.id, JSON.stringify(set))
    localStorage.setItem('set-all',JSON.stringify( [...getAllIds(), set.id]));

    return Promise.resolve(set);
}

export function updateSet(set: Set): Promise<void> {
    if(!set.id){
        throw new Error("set is not added");
    }
    if(!getAllIds().includes(set.id)){
        throw new Error("set is not indexed");
    }
    localStorage.setItem('set-all',JSON.stringify( [...getAllIds(), set.id]));

    return Promise.resolve();
}


export function deleteSet(id: string): Promise<void>{
    localStorage.removeItem('set-item-' + id);
    let allIds =  getAllIds();
    allIds = allIds.filter(x => x !== id);
    localStorage.setItem('set-all',JSON.stringify(allIds));
    return Promise.resolve();
}