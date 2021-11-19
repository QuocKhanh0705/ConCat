
const clearForm = () => {
    document.getElementById("textContent").value = '';
}

const clearImg = () => {
    document.getElementById("imageContent").value = '';
}

const concatvalue = () => {
    const form1 =  document.getElementById("textContent").value;
    const form2 =   document.getElementById("imageContent").value;
    const form3 = form1.concat(form2);
    document.getElementById("resultContent").value = form3;
    e.preventDefault();
}
