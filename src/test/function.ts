export function timesTwo(a: number) {
    return a * 2
}

/*type itemsType = [
    {
        id: string,
        name: string,
        price: number
    }
]*/

export function order(items:any) {
    const total = items.reduce((price:number, item:any) => price + item.price,0);
    return{
        orderItems: items,
        total
    }
}