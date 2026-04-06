let totalamt=0;
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(){
    const expenseName=document.getElementById("expenseName");
    const place=document.getElementById("place");
    const amount=document.getElementById("amount");
    const contri=document.getElementById("contribution");
    const numOfPeople=document.getElementById("numOfPeople");
    const total = document.getElementById("totalAmount");
    const expenseList = document.getElementById("expenseList");
    

    const namevalue=expenseName.value;
    const placevalue=place.value;
    const amountvalue=Number(amount.value);
    const contribution=contri.value;
    const numberofpeople=Number(numOfPeople.value);


    if(namevalue==="" || amountvalue<=0 || (contribution==="split" && numberofpeople<=0)){
         alert("Invalid Input")
         return;
    }


    if(contribution==="full")
    {
        totalamt+=amountvalue;
    }
    else
    {
        totalamt+=(amountvalue/numberofpeople);
    }

    total.textContent = `Total: Rs.${totalamt}`;


   const li = document.createElement("li");

   if(contribution === "full") {
       li.textContent = `${namevalue} | ${placevalue} | Rs.${amountvalue} | Full`;
    }
    else {
       li.textContent = `${namevalue} | ${placevalue} | Rs.${amountvalue} | Split (${numberofpeople} people → Rs.${amountvalue/numberofpeople} each)`;
    }

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    // Delete button event
    delBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // prevent triggering li click
        expenseList.removeChild(li); // remove the expense from list

        // Adjust total
        if(contribution === "full") {
            totalamt -= amountvalue;
        } else {
            totalamt -= (amountvalue / numberofpeople);
        }
        total.textContent = `Total: Rs.${totalamt}`;
    });

    li.appendChild(delBtn); // attach delete button

    expenseList.appendChild(li);

     // Clear inputs after adding
    expenseName.value = "";
    place.value = "";
    amount.value = "";
    numOfPeople.value = "";
});


// ✅ Add Enter key support
const inputs = [
    document.getElementById("expenseName"),
    document.getElementById("place"),
    document.getElementById("amount"),
    document.getElementById("numOfPeople")
];

inputs.forEach(input => {
    input.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            addBtn.click(); // trigger the calculation
        }
    });
});





