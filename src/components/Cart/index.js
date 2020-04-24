import React, { Component } from "react";
import Title from "../Title";
import SignUp from "./SignUp";
import { ProductConsumer } from "../../context";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Sign" title="Sign In" />
                </React.Fragment>
              );
            } else {
              return <SignUp />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
export default Cart;
