
export function sum(a,b) {
    return a + b;
}

export async function getData(){
    const res = await db.collection('formulas').get();
    return res;
}