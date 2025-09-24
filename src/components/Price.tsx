function Price ({value}){

    const fmt = (n: number) => `$${n.toLocaleString()}`;

    return(
        <p className="price-val font-semibold mb-2">{fmt(value)}</p>
    )
}

export default Price