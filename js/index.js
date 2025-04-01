const item = document.getElementById("item");
const form = document.querySelector("form");
const containerFieldset = document.getElementById("container");
const removeAlertDiv = document.getElementById("remove-alert");
const deleteIcon = document.getElementById("delete-icon");

form.onsubmit = (event) => {
    event.preventDefault();

    // Structure for new items
    const newItem = document.createElement("div");
    newItem.classList.add("input-wrapper");

    const itemInnerWrapper = document.createElement("div");
    itemInnerWrapper.classList.add("inner-wrapper");

    const itemCheckboxImg = document.createElement("div");
    itemCheckboxImg.classList.add("checkbox-img");

    const itemInput = document.createElement("input");
    itemInput.type = "checkbox";

    const itemName = document.createElement("label");
    if(item.value == "") {
        alert("O campo de nome precisa ser preenchido!");
        return;
    } else {
        itemName.textContent = item.value;
    }

    const itemTrashIcon = document.createElement("img");
    itemTrashIcon.src = "assets/trash-icon.svg";
    itemTrashIcon.classList.add("trash-icon");

    newItem.append(itemInnerWrapper, itemTrashIcon);
    itemInnerWrapper.append(itemCheckboxImg, itemInput, itemName);

    if(containerFieldset) {
        containerFieldset.appendChild(newItem);
        item.value = "";
    } else {
        alert("Ocorreu um erro, tente novamente!");
    }
}


// Remove items by click
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if(event.target.classList.contains("trash-icon")) {
            const wrapper = event.target.closest(".input-wrapper");
            if(wrapper) {
                wrapper.style.display = "none";
                removeAlertDiv.style.opacity = "1";
                
                setTimeout(function() {
                    removeAlertDiv.style.opacity = "0";
                }, 2000);

            } else {
                alert("Erro ao deletar item!");
            }
        }
    });
});

deleteIcon.onclick = function () {
    removeAlertDiv.style.opacity = "0";
};