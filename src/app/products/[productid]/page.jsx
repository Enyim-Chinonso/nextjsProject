// export default async function productDetails({
//     params,
// } : {
//     params : promise<{productId : string}>
// }); {
//     const productId = (await params).productId;
//     return <h1>Details About Product{productId}</h1>;
// }
    
export default async function ProductDetails({ params }) {
  const productId = params.productId;

  return <h1>Details About Product {productId}</h1>;
}
