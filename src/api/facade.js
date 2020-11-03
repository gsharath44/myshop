export const getData = async () => {
    const res = await fetch('http://localhost:3012/summary');
    return res.json();
}
export const getDetails = async (orderId) => {
    const res = await fetch(`http://localhost:3012/details/${orderId}`);
    return res.json();
}