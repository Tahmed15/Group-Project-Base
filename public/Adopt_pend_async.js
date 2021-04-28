/* eslint-disable no-console */
async function populatePend() {
  console.log('data request');

  const pendRequest = await fetch('/api/Pending');
  const pendData = await pendRequest.json();
  const pendTable = document.querySelector('.pendingtable');
  console.table(pendData);

  pendData.forEach((pend) => {
    const appendPend = document.createElement('tr');
    appendPend.innerHTML = `
          <td>${pend.adopt_id}</td>
          <td>${pend.applicant_id}</td>
          <td>${pend.animal_id}</td>
          <td>${pend.start_date}</td>
          <td>${pend.end_hold_date}</td>
          <td>${pend.shelter_id}</td>

          `;
    pendTable.append(appendPend);
  });
}

async function windowActions() {
  await populatePend();
}

window.onload = windowActions;
