  import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
  
  
  
  
  // import React from "react";
// import Button from "./components/common/button/Button.jsx";
// import Navbar from "./components/layout/navbar/Navbar.jsx";
//  import RecipeCard from "./components/recipes/recipesCard/RecipeCard.jsx";
// function App(){
//   return(
//     <div>
//       <RecipeCard
//         recipe={{
//           image:
//             "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
//           title: "Savory Herb-Infused Chicken",
//           description: "Delicious and full of flavor...",
//           time: "40 MIN",
//           level: "EASY PREP",
//           serves: "3 SERVES",
//         }}
//       />
//     </div>
//   );
// }

// export default App;

























// <div>
    //   <Navbar />
    //   <div style={{ height: "200vh", padding: "20px" }}>
    //     <h1>Test...... Page</h1>
    //   </div>
    // </div>
    
    // <div style={{padding:"40px"}}>
    //   <h2>test Button</h2>
    //   <div style={{display :"flex" , gap:"10px"}}>
    //     <Button btnstyle="primary"> sign up now !</Button> 
    //     <br />
    //     <Button btnstyle="dark"> EXPLORE RECIPES </Button>
    //      <br />
    //     <Button btnstyle="dark">sign up</Button> 
    //      <br />
    //     <Button btnstyle="outline">  SEE MORE </Button> 
    //      <br />
    //     <Button btnstyle="pizza"> pizaa </Button> 
    //     <br />
    //     <Button btnstyle="italia"> italia </Button> 
    //     <br />
    //     <Button btnstyle="recipe"> recipe </Button> 
    //      <br />
    //     <Button btnstyle="view_recipe"> view recipe </Button> 

    //   </div>

    // </div>