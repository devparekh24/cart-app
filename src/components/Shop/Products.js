import ProductItem from './ProductItem';
import classes from './Products.module.css';
import data from '../../data.json'
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          data.map(item => (
            < ProductItem
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
