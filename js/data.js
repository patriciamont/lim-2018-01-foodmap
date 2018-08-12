window.searchRestaurants=(listRestaurant,search)=>{
    console.log(listRestaurant);
   
    if(search!==''){
        console.log(listRestaurant);
        const restaurants=listRestaurant.filter(objRestaurant=>{
            return objRestaurant.district.toUpperCase().indexOf(search.toUpperCase()) !== -1;
            console.log(search);
        })
        return restaurants;
       
    }else{
        return listRestaurant;
    }

}

/* et rest=listRestaurant.forEach(element => {
    let districts=element.district;
}); */