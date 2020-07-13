
    var arr1 = [10];
    var ind1=0, ind2 = 1;
    var obj1 = { };
    var btnAdd = document.querySelector('.btnAdd');
    var temp;
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
            listItems.textContent = arr1[ind1];
            ind1++;
            console.log(arr1.join("\n"));

            
                //btnAddToList();
               // var br = document.createElement('br')
                var b = document.createElement('b')
                b.setAttribute('style', 'float: right; cursor:pointer; color: blue');
                b.setAttribute('class', `new-ele ${ind1-1} `);
                b.setAttribute('id', `new-ele`);
                b.setAttribute('onclick', 'DeleteItem(temp)');
                b.textContent="Delete"
               // listItems.appendChild(br);
                listItems.appendChild(b);
                
                //document.querySelector(".new-ele" + ind1-1).textContent="Delete"

                // listItems.forEach((result) => {
                //     result.addEventListener('click', DeleteItem)
                //   })
             
            
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
    
       // document.querySelector(".todo-list-items" + ind1-1).addEventListener('click', DeleteItem, 2)

        function DeleteItem(ind){

            var listItems; 
            arr1[ind] = "";
            document.querySelector('.todo-list-items' + ind).textContent = arr1[ind];
            let max = 9;
            let min = 0;
            let mid = 4;
            recursive(ind, min, mid, max);
        }
        function recursive(ind, min, mid, max){
            
            if(ind > mid && ind < max){  // ind1 = 7 but mid = 6 and max = 9
                min = mid;
                mid = (mid+max)/2;

                return recursive(ind, min, mid, max); 
            }
            else if(ind == max){
                while(ind < 9)
                {
                    arr1[ind+1] = document.querySelector(".todo-list-items" + ind+1).textContent;
                    arr1[ind] = arr1[ind+1];
                    document.querySelector(".todo-list-items" + ind).textContent = arr1[ind]
                    ind++;
                }
            }
            else if(ind == mid){
                while(ind < 9)
                {
                    arr1[ind+1] = document.querySelector(".todo-list-items" + ind+1).textContent;
                    arr1[ind] = arr1[ind+1];
                    document.querySelector(".todo-list-items" + ind).textContent = arr1[ind]
                    ind++;
                }
            }
            else if(ind == min){
                while(ind < 9)
                {
                    arr1[ind+1] = document.querySelector(".todo-list-items" + ind+1).textContent;
                    arr1[ind] = arr1[ind+1];
                    document.querySelector(".todo-list-items" + ind).textContent = arr1[ind]
                    ind++;
                }
            }
            else if(ind > min && ind < mid){        // 1 // min=0, mid=4
                max = mid;
                mid = (mid+min)/2;

                return recursive(ind, min, mid, max); 
            }
            
        }
    function mouseover0()
    {
        temp=0;
    }
    function mouseover1()
    {
        temp=1;
    }
    function mouseover2()
    {
        temp=2;
    }
    function mouseover3()
    {
        temp=3;
    }
    function mouseover4()
    {
        temp=4;
    }
    function mouseover5()
    {
        temp=5;
    }
    function mouseover6()
    {
        temp=6;
    }
    function mouseover7()
    {
        temp=7;
    }
    function mouseover8()
    {
        temp=8;
    }
    function mouseover9()
    {
        temp=9;
    }
    function mouseout()
    {
        temp=0;
    }





       

