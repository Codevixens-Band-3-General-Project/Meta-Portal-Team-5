
let currentPage = 1;
const itemsPerPage = 4;
const totalItems = blogData.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
//or use const totalPages = Math.floor(totalItems / itemsPerPage);

const blogContainer = document.getElementById('blogContainer');
const paginationLinks = document.querySelectorAll('.pagination-link a');


  const generateBlogContent = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = blogData.slice(startIndex, endIndex);


  blogContainer.innerHTML = currentItems
    .map((data) => {
      let { id, title, img, btn, } = data ;
      
      return `
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="card mb-4 blog-item shadow-5-strong" id="blog-id-${id}" style="height: 800px; padding:20px;">
        <div class="card-body">
        <p class="circle-list">${id}</p>
        <div class="inline fs-4 ">
        <ul class="breadcrumb justify-content-start">
          <li>August 09, 2022 </li>
          <li>MetaVerse</li>
          <li> 4 Comments</li>
        </ul>
      </div>
      <h4 class="card-title">${title}</h4>
  </div>
  <img src=${img} class="card-img-top" 
  style="height: 80%; object-fit: cover;" style="padding:20px; border-radius:20px;" alt="blog-image">
  <div class="blog-btn inline"><a href="#" >${btn}</a></div>
  </div>
  </div>
   `;
    })
    .join("");
};


// Function to update the active state of pagination links
const updatePagination = () => {
  paginationLinks.forEach((link) => {
    link.classList.remove('active');
  });
  paginationLinks[currentPage].classList.add('active');
};



// Event listeners for previous and next buttons
document.querySelector('.prev').addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage > 0) {
    currentPage--;
    generateBlogContent();
    updatePagination();
  }
});


document.querySelector('.next').addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage < totalPages - 1) {
    currentPage++;
    generateBlogContent();
    updatePagination();
  }
});

// Event listeners for pagination links
paginationLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = index;
    generateBlogContent();
    updatePagination();
  });
});

// Initial generation of blog content and pagination
generateBlogContent();
updatePagination();