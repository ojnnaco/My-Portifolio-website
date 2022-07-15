import './ProductList.css';
import Product from '../Product/Product'

function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-text">
        <h1 className='pl-title'>Create and Inspire.</h1>
        <p className='pl-desc'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid ea. Inventore reiciendis doloremque corrupti eum aliquam dolorum vel quibusdam praesentium animi pariatur. Atque repudiandae voluptatum explicabo amet illum rerum tempore reprehenderit molestias suscipit hic, ab, architecto earum nam. Vitae? </p>
      </div>
      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default ProductList