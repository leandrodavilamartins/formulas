const iconRef = "../public/icon.svg"

const template = `
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src=${iconRef} alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
`

const el = document.getElementById('template');
el.innerHTML = template;

