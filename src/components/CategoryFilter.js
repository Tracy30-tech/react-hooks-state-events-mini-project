import React from "react";

function CategoryFilter({categories,selectCategory}) {
   function filterSelection(e){
    const buttons =Array.from(document.querySelectorAll(".buttons"))
    buttons.forEach(button=>{
      button.classList.remove("selected");
   });
   e.target.classList.add("selected");
   const category = e.target.textContent
   selectCategory(category)
   }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index)=>{
        return <button className="buttons" onClick={filterSelection} key={index}>{category}</button>
      })
      }
    </div>
  );
}

export default CategoryFilter;