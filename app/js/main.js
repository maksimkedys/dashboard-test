const customersData = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    active: false
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    active: false
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    active: true
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    active: true
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    active: true
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    active: true
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    active: false
  }
];

const state = {
  customersMarkup: ''
}

// BURGER MENU, CLOSE ON ESC, OVERLAY NOSCROLLING 
const burger = document.querySelector('.burger');
const aside = document.querySelector('.aside');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');

function toggleMenu() {
  burger.classList.toggle('burger--active');
  aside.classList.toggle('aside--active');
  overlay.classList.toggle('hidden');
  body.classList.toggle('lock')
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    toggleMenu();
  }
});

// LOADING AND RENDERING CUSTOMERS DATA
function loadCustomers() {
  let html = '';
  state.isLoading = true;
  customersData.map(customer => {
    html += `
    <li class="table__row">
      <p class="table__item">${customer.name}</p>
      <p class="table__item">${customer.company}</p>
      <p class="table__item">${customer.phone}</p>
      <p class="table__item">${customer.email}</p>
      <p class="table__item">${customer.country}</p>
      <p class="table__item ${customer.active ? 'active' : 'inactive'}">
        ${customer.active ? 'Active' : 'Inactive'}
      </p>
    </li >
    `
  })
  state.isLoading = false;
  return state.customersMarkup = html;
}
const tableBody = document.querySelector('.table__body');
function init() {
  loadCustomers();
  tableBody.insertAdjacentHTML('beforeend', state.customersMarkup);
}

init();