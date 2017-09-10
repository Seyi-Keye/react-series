import React from 'react';
import CategoryTableRow from './CategoryTableRow';import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lastCategory = null;
    const rows = [];
    this.props.products.forEach(product => {
       if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if(product.category != lastCategory) {
        rows.push(<CategoryTableRow key={product.category} category={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
  });

    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}