import React from "react";
import ReactDom from "react-dom/client"; // Correct import for React 18+
import "./index.css"; // External style sheet

//pizza data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
///////////////////////////////////////////////
// rendering the root component and strict mode
function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// creaate ui
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* conditional rendering with &&  and Ternaries opt*/}
      {numPizzas > 0 ? (
        // React fragment
        <>
          <p>
            Authentic Italian cuisine. Enjoy our hand-crafted pizzas made with
            the freshest ingredients.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Our kitchen is taking a break! Please check back soon for delicious
          pizzas.
        </p>
      )}
      {/* Auto create new array contain data */}
      {/* // Manual
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        price={pizzaData[2].price}
        photoName={pizzaData[2].photoName}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        price={pizzaData[1].price}
        photoName={pizzaData[1].photoName}
      />
 */}
    </main>
  );
}

// new components are created using function
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // Conditional rendering with multiple return
  // it good return complete componet
  // if (pizzaObj.soldOut) return null;
  // props
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // logic to check if the restaurant is open or closed
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  console.log(isOpen);

  // if (hour >= openingHour && hour <= closingHour) alert("We're open!");
  // else alert("We're closed!");

  // Conditional rendering with multiple return
  // it not'good return one pice of jsx
  // if (!isOpen) return <p>CLOSED</p>;
  return (
    <footer className="footer">
      {/* conditional rendering with && Ternaries opt*/}
      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <p>
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00
        </p>
      )}
    </footer>
  );
  // return React.createElement(
  //   "footer",
  //   null,
  //   "we're currently closed, please come back later!"
  // );
}

// used more props extract componet JSX
// useding Destructuring props
function Order({ closingHour }) {
  return (
    <div className="order">
      <p>We're open until {closingHour}:00. Come visit us or order</p>
      <button className="btn">Order</button>
    </div>
  );
}
// v18+ uses createRoot for rendering
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Debugging tip:
// If you want to debug, you can add a console log
console.log("React app is running!");
// Make sure you app is running(if running but not updating),
// then stop the server and run it again (ctrl + c to stop and npm start to run again)
// open the browser console tab or code editor terminal anytime to see the logs
// if see any error and you are sure you nover fix own the copy error or serch cheat gpt/Google the very youge community is there to help you
// used eslint to check the code for errors
//
