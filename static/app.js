myForm.addEventListener("submit", e =>{
  e.preventDefault();
  const endpoint = "/upload";
  formData = new FormData();
  formData.append('user-img', inpImg.files[0]);

  fetch(endpoint, {
    method: "post",
    body: formData
  }).then(
    response => response.json()
  ).then(
      (data) => {
          document.getElementById("result").innerHTML = data["result"]
      }
  );
 
});