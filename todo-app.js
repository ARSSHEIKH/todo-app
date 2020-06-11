
    var arr1 = [10];
    var ind1=0, ind2 = 1;

    var btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', btnAddToList);

          function btnAddToList(){
              var inputTextContent = document.querySelector(".input-text").value;
              
              while(ind1<10)
              {
                  arr1[ind1] = inputTextContent;
                  console.log(arr1[ind1]);
                  break;
              }
              
              ListItems();
          }
          function ListItems(){
            
            var listItems = document.querySelector(".todo-list-items" + ind1)
            
            if(ind1 == 10){
                ind1 = 0;
                btnAddToList();
            }
            document.getElementById("checkbox-items")
            listItems.textContent = arr1[ind1]
            ind1++;
            console.log(arr1.join("\n"));


            // var get2 = document.getElementById("col")
            
            //     //btnAddToList();
            //     var br = document.createElement('br')
            //     var div = document.createElement('div')
            //     div.setAttribute('id', 'col' + ind1);
            //     get2.appendChild(br);
            //     get2.appendChild(div);

                
            



            
            // document.addEventListener('DOMContentLoaded', function() {
            //     var div = document.createElement('br');
 
              
            //     //document.body.appendChild(br);
            //   }, false);



            // for (let index = 0; index < arr1.length; index++) {
            //     listItems.textContent = arr1[index];
            //     listItems.textContent = arr1.join("\r");
            //   }
            //   listItems.forEach((listItems) => {
            //     listItems.textContent = arr1.join("\n");
            //     console.log(arr1.join("\n"));
            //   })
          }


        //   listItems.forEach((result) => {
        //     result.addEventListener('click', btnAddToList)
        //   })










       

