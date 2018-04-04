import { EventEmitter } from 'fbemitter'

// mr Emitter is your friendly next door emitter
const cartEmitter = new EventEmitter()

export default cartEmitter



/*

componentWillMount() {
    Subscription = cartEmitter.addListener('addProduct', (data) => {
      var arrayvar = this.state.products.slice()
      arrayvar.push(data)
      this.setState({ products: arrayvar })
    });
  }

   componentWillUnmount() {
    Subscription.remove()
  }


const {data} = this.state.products;
   const nameList = data.map((item)=>
        <div key={item.id}>
          <a> 
            Name:{item.name}
          </a>
        </div>
        );


*/