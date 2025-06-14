
    const table = document.getElementById("currencyTable");

    function addRow() {
      const row = document.createElement("tr");
      const currencyTd = document.createElement("td");
      const currencyInput = document.createElement("input");
      currencyInput.classList.add("currency");
      currencyInput.placeholder = "Currency Value";
      currencyInput.type = "number";
      currencyTd.appendChild(currencyInput);
      row.appendChild(currencyTd);

      const notesTd = document.createElement("td");
      const notesInput = document.createElement("input");
      notesInput.classList.add("notes");
      notesInput.placeholder = "Notes Count";
      notesInput.type = "number";
      notesTd.appendChild(notesInput);
      row.appendChild(notesTd);

      const resultElement = document.createElement("td");
      const div = document.createElement("div");
      div.classList.add("result");
      div.textContent = "Result";
      resultElement.appendChild(div);
      row.appendChild(resultElement);

      const addBtn = document.createElement("td");
      const button = document.createElement("button");
      button.classList.add("addInputs");
      button.textContent = "add";
      button.addEventListener("click", addRow);
      addBtn.appendChild(button);
      row.appendChild(addBtn);

     
      const deleteInput = document.createElement("td");
      const buttonTwo = document.createElement("button");
      buttonTwo.classList.add("deleteInput");
      buttonTwo.textContent = "delete";
      buttonTwo.addEventListener("click", deleteRow);
      deleteInput.appendChild(buttonTwo);
      row.appendChild(deleteInput);

      table.querySelector("tbody").appendChild(row);

      
      currencyInput.addEventListener("input", debouncedUpdate);
      notesInput.addEventListener("input", debouncedUpdate);
    }

    function deleteRow(event) {
      const row = event.target.closest("tr");
      row.remove();
      updateGrandTotal();
    }

    function calculateMoney(currency, notes) {
      return currency * notes;
    }

    function updateRow(row) {
      const currencyInput = row.querySelector(".currency");
      const currency = parseFloat(currencyInput.value);

      const notesInput = row.querySelector(".notes");
      let notes = parseFloat(notesInput.value);

      const resultElement = row.querySelector(".result");

       if (currencyInput.value.trim() === "") {
        
        if (notesInput.value.trim() !== "") {
            
          let notes = parseFloat(notesInput.value);
          if (Number(notes) === notes && notes % 1 !== 0) {
            
            resultElement.textContent = "Enter valid no of notes";
            resultElement.classList.add("error");
            return 0;
          }
        }
        resultElement.textContent = "Result";
        resultElement.classList.remove("error");
        return 0;
      }

      /* if (isNaN(currency)) {
        resultElement.textContent = "Enter valid currency";
        resultElement.classList.add("error");
        return 0;
      }  */
      if(Number(notes) === notes && notes % 1 !== 0){
        resultElement.textContent = "Enter valid no of notes";
        resultElement.classList.add("error");
        return 0;    
      }

      notes = isNaN(notes) ? 1 : notes;

      const result = calculateMoney(currency, notes);
      resultElement.textContent = result.toFixed(2);
      resultElement.classList.remove("error");

      return result;
    }
      

    function updateGrandTotal() {
      let total = 0;
      const currentRows = table.querySelectorAll("tr");
      currentRows.forEach((row) => {
        total += updateRow(row);
      });
      document.getElementById("grandTotal").textContent = `Grand Total: ${total.toFixed(2)}`;
    }

    function debounce(fn, delay = 1000) {
      let timerId;
      return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    const debouncedUpdate = debounce(updateGrandTotal, 300);

    
addRow();
//updateGrandTotal();





/*************updating dom based on array */
//setTimeout(getUniqueCurrencyArrayFromDOM,1000)
table.addEventListener("click", function (e) {
  if (e.target.classList.contains("addInputs")) {
    const current=getUniqueCurrencyArrayFromDOM();
    updateDOMUsingCurrencyArray(current);
  }
});

function getUniqueCurrencyArrayFromDOM(){
  const rows = table.querySelectorAll("tr");
  console.log(rows);
  const currencyArrayTwo = Array.from(rows).reduce(
    (currencyArrayOne, currentValue) => {
      const currency = parseFloat(
        currentValue.querySelector(".currency").value
      );
      const notes = parseFloat(currentValue.querySelector(".notes").value);
      currencyArrayOne.push({ currency: currency, notes: notes });
      return currencyArrayOne;
    },
    []
  );
  console.log(currencyArrayTwo);
  let current = currencyArrayTwo.reduce((acc, val) => {
    const existsAcc = acc.find((item) => item.currency === val.currency);
    if (existsAcc) {
      existsAcc.notes += val.notes;
    } else {
      acc.push({ ...val });
    }
    return acc;
  }, []);
  
  return current;
}
function updateDOMUsingCurrencyArray(currencyArray){
  table.querySelector('tbody').innerHTML=''
  currencyArray.forEach((currentValue)=>{
    const tr = document.createElement('tr');
  const tdCurrency = document.createElement('td');
  const inputCurrency = document.createElement('input');
  inputCurrency.type = 'number';
  inputCurrency.className = 'currency';
  inputCurrency.placeholder = 'Currency Value';
  inputCurrency.value = currentValue.currency;
  tdCurrency.appendChild(inputCurrency);

  const tdNotes = document.createElement('td');
  const inputNotes = document.createElement('input');
  inputNotes.type = 'number';
  inputNotes.className = 'notes';
  inputNotes.placeholder = 'Notes Count';
  inputNotes.value =currentValue.notes;
  tdNotes.appendChild(inputNotes);

  const tdResult = document.createElement('td');
  const resultDiv = document.createElement('div');
  resultDiv.className = 'result';
  resultDiv.textContent = 'Result';
  tdResult.appendChild(resultDiv);

  const tdAdd = document.createElement('td');
  const addButton = document.createElement('button');
  addButton.className = 'addInputs';
  addButton.textContent = 'add';
  addButton.addEventListener("click", addRow);
  tdAdd.appendChild(addButton);

  const tdDelete = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteInput';
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener("click", deleteRow);
  tdDelete.appendChild(deleteButton);

  tr.appendChild(tdCurrency);
  tr.appendChild(tdNotes);
  tr.appendChild(tdResult);
  tr.appendChild(tdAdd);
  tr.appendChild(tdDelete);
  table.querySelector('tbody').appendChild(tr);
  inputCurrency.addEventListener("input", debouncedUpdate);
  inputNotes.addEventListener("input", debouncedUpdate);
  })
}








/***change logic************** */
const withdrawInput = document.querySelector(".withdraw");
const changeButton = document.querySelector(".changeMoney");
changeButton.addEventListener('click',function(){
     const currentCurrencyArray=getUniqueCurrencyArrayFromDOM();
    let result = [{ total: 0, deno: [] }];

    currentCurrencyArray.forEach(function (value) {
      let curr = value.currency;
      let cou = value.notes;
      let existing = [...result];

      existing.forEach(function (entry) {
        for (let j = 1; j <= cou; j++) {
          let x = entry.total + curr * j;
          //if (!result.some((e) => e.total === x)) {
            result.push({
              total: x,
              deno: [...entry.deno, { c: curr, cou: j }],
            });
          //}
        }
      });
    });
    console.log(result);
    let change = isNaN(parseFloat(withdrawInput.value))
      ? 0
      : parseFloat(withdrawInput.value);
    const changedObj = result.find((x) => x.total === change);
    console.log("changeObj="+changedObj);
    if (!changedObj || !Array.isArray(changedObj.deno) || changedObj.deno.length === 0) {
      alert("Not available");
      return;
    }
    
      
      
        console.log("currentCurrencyArray");
        console.log(currentCurrencyArray);

        const valuesChanged = changedObj.deno.map((val) => {
          return val;
        });
        console.log("valuesChanged");
        console.log(valuesChanged);
        if (!valuesChanged.length) {
          alert("Not available");
        }
        valuesChanged.forEach((val) => {
          const tableBody = document.querySelector("#changedTableBody");

          tableBody.appendChild(changedCurrencyInDOM(val));
        });
        valuesChanged.forEach((v) => {
          const exist = currentCurrencyArray.find((i) => i.currency === v.c);
          if (exist) {
            exist.notes -= v.cou;
          }
        });
        console.log("hii" + currentCurrencyArray);
        console.log(currentCurrencyArray);
        updateDOMUsingCurrencyArray(currentCurrencyArray);
        updateGrandTotal();

      
    
    
    
    
})
 function changedCurrencyInDOM(obj){
    const tr = document.createElement("tr");
    const keys = ["c", "cou"];
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key] !== undefined ? obj[key] : "";
      tr.appendChild(td);
    });
  return tr;
}
    
 