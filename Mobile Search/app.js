var mobiles = {
    SelectBrand:{

    },
    huawei:{
        huaweinova9:{
            name: "Huawei Nova 9",
            imgSrc: "./images/huaweinova9.jpg",
            price: "PKR 16K",
            ram: "2GB",
            screen: "5 Inches",
            color: ["black","white"],
        },
        huaweinovay70:{
            name: "Huawei Nova Y70",
            imgSrc: "./images/huaweinovay70.jpg",
            price: "PKR 20K",
            ram: "3GB",
            screen: "5 Inches",
            color: ["black","white"],
        },
        huaweip40:{
            name: "Huawei P-40",
            imgSrc: "./images/huaweip40.jpg",
            price: "PKR 16K",
            ram: "2GB",
            screen: "5 Inches",
            color: ["black","white"],
        },
        huaweipsmart:{
            name: "Huawei P-smart",
            imgSrc: "./images/huaweipsmart.jpg",
            price: "PKR 15K",
            ram: "2GB",
            screen: "5 Inches",
            color: ["black","white"],
        },
        huaweiy6:{
            name: "Huawei Y6",
            imgSrc: "./images/huaweiY6.jpg",
            price: "PKR 25K",
            ram: "2GB",
            screen: "5 Inches",
            color: ["black","white"],
        },
        huaweiy9:{
            name: "Huawei Y9",
            imgSrc: "./images/huaweiy9.jpg",
            price: "PKR 16K",
            ram: "2GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
    },
    Infinix:{
        infinixhot12:{
            name: "Infinix Hot 12",
            imgSrc: "./images/infinixhot12.jpg",
            price: "PKR 22K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        infinixhot8:{
            name: "Infinix Hot 8",
            imgSrc: "./images/infinixhot8.jpg",
            price: "PKR 17K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        infinixhot9:{
            name: "Infinix Hot 9",
            imgSrc: "./images/infinixhot9.jpg",
            price: "PKR 20K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        infinixhot12:{
            name: "Infinix Hot 12",
            imgSrc: "./images/infinixhot12.jpg",
            price: "PKR 22K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        infinixnote7:{
            name: "Infinix Note 7",
            imgSrc: "./images/infinixnote7.jpg",
            price: "PKR 25K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        infinixnote11:{
            name: "Infinix Note 11",
            imgSrc: "./images/infinixnote11.jpg",
            price: "PKR 22K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        infinixnote12:{
            name: "Infinix Note 12",
            imgSrc: "./images/infinixnote12.jpg",
            price: "PKR 22K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
       
    },
    Apple:{
        iphone11:{
            name: "Iphone 11",
            imgSrc: "./images/iphone11.jpg",
            price: "PKR 300K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        iphone12:{
            name: "Iphone 12",
            imgSrc: "./images/iphone12.jpg",
            price: "PKR 400K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        iphone13:{
            name: "Iphone 13",
            imgSrc: "./images/iphone13.jpg",
            price: "PKR 500K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        iphone7:{
            name: "Iphone 7",
            imgSrc: "./images/iphone7.jpg",
            price: "PKR 35K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        iphone8:{
            name: "Iphone 8",
            imgSrc: "./images/iphone8.jpg",
            price: "PKR 50K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        iphonex:{
            name: "Iphone X",
            imgSrc: "./images/iphoneX.jpg",
            price: "PKR 80K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
    },
    Samsung:{
        samsungfold:{
            name: "Samsung Z-fold",
            imgSrc: "./images/samsungfold.webp",
            price: "PKR 200K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        samsungs8:{
            name: "Samsung S8",
            imgSrc: "./images/samsungs8.jpg",
            price: "PKR 60K",
            ram: "4GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        samsungnote21:{
            name: "Samsung Note 21",
            imgSrc: "./images/samsungnote21.jpg",
            price: "PKR 180K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        samsungnote8:{
            name: "Samsung Note 8",
            imgSrc: "./images/samsungnote8.jpg",
            price: "PKR 120K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        samsungs10:{
            name: "Samsung S10",
            imgSrc: "./images/samsungs10.jpg",
            price: "PKR 80K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
        samsungs21:{
            name: "Samsung S21",
            imgSrc: "./images/samsungs21.jpg",
            price: "PKR 250K",
            ram: "6GB",
            screen: "5 Inches",
            color: ["black","white"],
        },  
    },
}

var select=document.getElementById("selection");
for (key in mobiles){
var options=document.createElement("option");
options.innerHTML=key;
select.appendChild(options);
}
function searched(){
    var text= document.getElementById("input").value; 
    var result = select.options[select.selectedIndex].value;
          if(result=="SelectBrand"){
              swal("Please Select Brand");
          }
          else if (text in mobiles[result]) {
             document.getElementById("main").innerHTML = `
             <div class="card st">
          <div class="js-mobile">
          <img src="${mobiles[result][text].imgSrc}" id="img" alt="">
          <p class="js-name"> name: ${mobiles[result][text].name}
          <p class="js-price"> price: ${mobiles[result][text].price}</p>
          <p class="js-ram"> RAM: ${mobiles[result][text].ram}</p>
          <p class="js-screen" > Screen: ${mobiles[result][text].screen}</p>
          <p class="js-colors">Colors : ${mobiles[result][text].color}</p>
         
          </div>
          </div>
          `
          }
          else if (text == " ") {
              swal("Please enter the model you want to search");
          }
          
          else{
              swal("Not Available");
          }
          
  
  
   }