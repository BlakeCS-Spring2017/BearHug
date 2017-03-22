import React, { Component } from 'react';
import './Lunch.css';

class Lunch extends Component {
  render() {
    return (
      <div>
        <div className="page-title">
          Lunch
        </div>
        <div className="lunch-menu">
          Swedish Meatballs <br /> Peruvian Causa <br /> Grilled Cheese with Pesto and Provolone <br /> Creamy Polenta <br /> Winter Fruit Salad with Lemon Dressing <br /> Brownie
        </div>
      </div>
    );
  }
}

export default Lunch;
