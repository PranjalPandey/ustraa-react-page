import React, {Component} from 'react';
import Products from './components/products';
import Category from './components/category';
import PrimarySearchAppBar from './components/toolbar'
    class App extends Component {
      state = {
        products: [],
        categories: []
      }
      componentDidMount() {
        fetch('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data.product_list.products, categories: data.category_list})
        })
        .catch(console.log)
      }
      render () {
        return (
          <div>
            <PrimarySearchAppBar />
          <h2><center>Our Products</center></h2>
          <center><Category categories={this.state.categories}/></center>
          <Products products={this.state.products} />
          </div>
        );
      }
    }

    export default App;