
function search(){
    //stores value of search box in uppercase
    let input=document.querySelector(".search-box").value.toUpperCase();
    //stores an array of all products in products
    const productArr=document.querySelectorAll(".product"); 
    //stors an array of all product names
    const productName=document.querySelectorAll(".product__info h2");
    //iterates thru all product names
    for(let i=0;i<productName.length;i++){
        //stores all <h2> tags of product names as it iterates through the array
        let match=productName[i];
        //This puts the text value in between the h2 tags of match into textValue
        let textValue=match.textContent||match.innerHTML;
        textValue=textValue.replace(" ","");
        input=input.replace(" ","");
        textValue=textValue.replace("-","");
        input=input.replace("-","")

        //This is to check if the uppercase letter of textValue is in any position of the input
        if(textValue.toUpperCase().indexOf(input)>-1){
            productArr[i].style.display="";
        }
        else{
             productArr[i].style.display="none";
        }
    }

}
document.addEventListener("keyup",()=>{
    search();
})