
export function sum(a,b) {
    return a + b;
}

export async function getData(){
    const res = await db.collection('formulas').get();
    const docs = res.docs;
    const data = docs.map( doc => {
        return doc.data();
    })
    return data;
}