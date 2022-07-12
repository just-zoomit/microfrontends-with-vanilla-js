import faker from 'faker';

const mount = (el) => {
    console.log("True start-up point for Application")

    let products = '';
    
    for (let i = 0; i < 5; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    // ex. 1
    // document.querySelector('#dev-products').innerHTML = products;
    
    // ex. 2
    el.innerHTML = products;
    
    // ex. 3 React
    // ReactDOM.render(<App/>,el)
    console.log(products);
    
    };
/*
            Context/Situation #1

We are running this file in developement in isloation 
We are using out local index.html file
Which DEFNITELY has an element with an id of 'dev-products'
We want to immediately render our app into that element

*/

if ( process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');



    /*
    Assuming our container doesn't have an element 
    with id '#dev-products'
    */

    if(el){
        console.log("Products: We are probably running in isolation")
     
        mount(el);
    }
}


/*   
        Context/Situation #1
We are running this file in development or production through the 
CONTAINER app
No GUARENTEE that an element with  an id of 'dev-products'
exists
WE DO NOT WANT to try to immediately render the app,
SO We RELY ON THE EXPORT IN THIS CASE

*/

export {mount};