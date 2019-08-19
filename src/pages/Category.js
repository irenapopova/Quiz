import React, { Component } from "react";
import CategoryCard from "../components/CategoryCards";
import Navbar2 from "../components/globalComponents/Navbar2";
import Footer from "../components/globalComponents/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [17, 27, 22, 23, 20, 25, 12, 18, 28, 19, 15, 24,],
      categoryName: ["Science & Nature", "Animals", "Geography", "History", "Mythology", "Art", "Music", "Computer Science", "Vehicles", "Mathematics" , "Video Games"],
      
      
      categoryPhoto: [
        "https://images.unsplash.com/photo-1516572882656-dc5249697fc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1358&q=80",

        "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",

        "https://images.unsplash.com/photo-1519354754184-e1d9c46182c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

        "https://images.unsplash.com/photo-1458040937381-49c067dfd49a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1524373050940-8f19e9b858a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1511424443513-a00662140eeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1555618254-84e2cf498b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        
      ]
    };
  }


  render() {
    const rows =[];
    for (let row = 0; row < 4; row++ ){
rows.push( <section className="flexCards">
       <CategoryCard
         category={this.state.categoryList[row*3]}
         name={this.state.categoryName[row*3]}
         photo={this.state.categoryPhoto[row*3]}
       />
       <CategoryCard
         category={this.state.categoryList[row*3+1]}
         name={this.state.categoryName[row*3+1]}
         photo={this.state.categoryPhoto[row*3+1]}
       />
       <CategoryCard
         category={this.state.categoryList[row*3+2]}
         name={this.state.categoryName[row*3+2]}
         photo={this.state.categoryPhoto[row*3+2]}
       />

        </section>)

     //  for (let column =0, column <3, column++)
     } 
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>Eager to play Quiz?</h1>
          <h3>Choose a category and a level of difficulty to start!</h3>


          {rows}
{/*
          <section className="flexCards">
            <CategoryCard
              category={this.state.categoryList[0]}
              name={this.state.categoryName[0]}
              photo={this.state.categoryPhoto[0]}
            />
            <CategoryCard
              category={this.state.categoryList[1]}
              name={this.state.categoryName[1]}
              photo={this.state.categoryPhoto[1]}
            />
            <CategoryCard
              category={this.state.categoryList[2]}
              name={this.state.categoryName[2]}
              photo={this.state.categoryPhoto[2]}
            />

             </section>

             <section className="flexCards">
             <CategoryCard
               category={this.state.categoryList[3]}
               name={this.state.categoryName[3]}
               photo={this.state.categoryPhoto[3]}
             />
             <CategoryCard
               category={this.state.categoryList[4]}
               name={this.state.categoryName[4]}
               photo={this.state.categoryPhoto[4]}
             />
             <CategoryCard
               category={this.state.categoryList[5]}
               name={this.state.categoryName[5]}
               photo={this.state.categoryPhoto[5]}
             />
 
              </section>
 

              <section className="flexCards">
              <CategoryCard
                category={this.state.categoryList[6]}
                name={this.state.categoryName[6]}
                photo={this.state.categoryPhoto[6]}
              />
              <CategoryCard
                category={this.state.categoryList[7]}
                name={this.state.categoryName[7]}
                photo={this.state.categoryPhoto[7]}
              />
              <CategoryCard
                category={this.state.categoryList[8]}
                name={this.state.categoryName[8]}
                photo={this.state.categoryPhoto[8]}
              />
  
               </section>
*/}
              
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
