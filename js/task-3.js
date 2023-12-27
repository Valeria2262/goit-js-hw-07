

    function handleInput() {
    
        const nameInput = document.querySelector("#name-input").value.trim();
      
        if (nameInput === "") {
            nameInput = "Anonymous";
        }
         document.querySelector("#name-output").textContent = nameInput;
    }

    document.querySelector("#name-input").addEventListener("input", handleInput);

