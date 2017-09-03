import React from 'react';
import { Product } from './Product';
import { data } from '../mockData';

export class ProductList extends React.Component {

  getInitialState() {
      return {
        product: []
      }
  }

  componentDidMount() {
    const products = data.sort((a, b) => {
      return b.votes - a.votes;
    });
    this.setState({ products });
  }

  handleProductUpVote(productId) {
    console.log(productId + " was upvoted.");
  }

  render () {
    return(
      <div  className='ui items'>
        <h1
          style={{
            textAlign: 'center',
          }}
          >Product List</h1>
        <hr/>
        {data.map(product =>
        <Product
          key={'product_' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
          onVote={this.handleProductUpVote}
          />
          )
          }
      </div>
    );
  }
};
