import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modelOpen, closeModel } = value;
          const { img, title, price } = value.modelProduct;

          if (!modelOpen) {
            return null;
          } else {
            return (
              <ModelContainer>
                <div className="container">
                    <div className="row">
                        <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                            <h5>Item added to the Cart</h5>
                        </div>
                    </div>
                </div>
              </ModelContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModelContainer = styled.div`
`;