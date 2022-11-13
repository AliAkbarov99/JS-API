const tBodyElement = document.querySelector("tbody");
// fetch("https://northwind.vercel.app/api/customers/")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     
//     for (let i = 0; i < data.length; i++) {
//       const trElement = document.createElement("tr");
//       const tdIdElement = document.createElement("td");
//       const tdCompanyNameElement = document.createElement("td");
//       const tdContactNameElement = document.createElement("td");
//       const tdContactTitleElement = document.createElement("td");
//       const tdAddressElement = document.createElement("td");
//       tdIdElement.textContent = data[i].id;
//       tdCompanyNameElement.textContent = data[i].companyName;
//       tdContactNameElement.textContent = data[i].contactName;
//       tdContactTitleElement.textContent = data[i].contactTitle;
//       tdAddressElement.textContent = (`${data[i].address.country} , ${ data[i].address.street}`);
//       trElement.append(tdIdElement, tdCompanyNameElement, tdContactNameElement ,tdContactTitleElement,tdAddressElement);
//       tBodyElement.appendChild(trElement);
//     }
//   });

axios("https://northwind.vercel.app/api/customers/").then(function (response) {
    

    for (let i = 0; i < response.data.length; i++) {
        const trElement = document.createElement("tr");
        const tdIdElement = document.createElement("td");
        const tdCompanyNameElement = document.createElement("td");
        const tdContactNameElement = document.createElement("td");
        const tdContactTitleElement = document.createElement("td");
        const tdAddressElement = document.createElement("td");
        tdIdElement.textContent = response.data[i].id;
        tdCompanyNameElement.textContent = response.data[i].companyName;
        tdContactNameElement.textContent = response.data[i].contactName;
        tdContactTitleElement.textContent = response.data[i].contactTitle;
        tdAddressElement.textContent = (`${response.data[i].address.country} , ${response.data[i].address.street}`);
        trElement.append(tdIdElement, tdCompanyNameElement, tdContactNameElement, tdContactTitleElement, tdAddressElement);
        tBodyElement.appendChild(trElement);
    }
});