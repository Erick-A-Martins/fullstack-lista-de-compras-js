const item = document.getElementById("item");
const form = document.querySelector("form");
const containerFieldset = document.getElementById("container");


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
    itemName.textContent = item.value;

    const itemTrashIcon = document.createElement("img");
    itemTrashIcon.src = "assets/trash-icon.svg";

    newItem.append(itemInnerWrapper, itemTrashIcon);
    itemInnerWrapper.append(itemCheckboxImg, itemInput, itemName);

    if(containerFieldset) {
        containerFieldset.appendChild(newItem);
        item.value = "";
    } else {
        alert("Ocorreu um erro, tente novamente!");
    }
}
