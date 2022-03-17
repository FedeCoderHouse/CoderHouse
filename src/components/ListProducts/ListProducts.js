import Card from '../Card/Card';

const ListProducts = () => {

    return(
        <div className="container-cards">
            <Card title='Remera' talle='XL' precio={200}/>
            <Card title='Pantalón' talle='L' precio={500}/>
            <Card title='Camisa' talle='XL' precio={400}/>
        </div>
    )
}
export default ListProducts;