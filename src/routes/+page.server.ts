
export async function load({}) {
    
    const products  = await fetch('https://fakestoreapi.com/products').then(res => res.json());

    return {
        products
    }
}