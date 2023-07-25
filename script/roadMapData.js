
let roadMapData =[
  {
    id:0,
    phase:"PHASE 01",
    date:"October 09, 2022",
    title:"Mini Game Lounch For Community",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."

  },
  {
    id:1,
    phase:"PHASE 02",
    date:"October 17, 2022",
    title:"New Set #12 is Coming Up",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."

  },
  {
    id:2,
    phase:"PHASE 03",
    date:"October 28, 2022",
    title:"Metaverse 3.0 Launch",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."


  },
  {
    id:3,
    phase:"PHASE 04",
    date:"November 11, 2022",
    title:"Female Set #20 is Coming Up",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."


  },
  {
    id:4,
    phase:"PHASE 05",
    date:"November 23, 2022",
    title:"Mini Game Lounch For Community",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."


  },
  {
    id:5,
    phase:"PHASE 06",
    date:"December 02, 2022",
    title:"Mini Game Lounch For Community",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."


  },
  {
    id:6,
    phase:"PHASE 07",
    date:"November 11, 2022",
    title:"Mini Game Lounch For Community",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."

  },
  {
    id:7,
    phase:"PHASE 08",
    date:"January 28, 2023",
    title:"Mini Game Lounch For Community",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."


  },
  {
    id:8,
    phase:"PHASE 09",
    date:"February 12, 2023",
    title:"Mini Game Lounch For Community",
    desc:"Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel \
     orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a  \
     mi molestie, sit amet ornare lectus interdum."


  },
 
]


const roadMapContainer = document.getElementById('roadMapContainer');

const generateroadMapContent = () => {
  const currentItems = roadMapData.slice(0, 4);


  roadMapContainer.innerHTML = currentItems
  .map((x) => {
    let { id,  phase, date, title, desc } = x ;
    
    return `
    <div class="roadmap-card">
    <div class="roadmap-phase">
      <p>${phase}</p>
    </div>
    <div class="card-details">
      <p class="roadmap-date">${date}</p>
      <p class="roadmap-title">${title}</p>
      <p class="roadmap-text">${desc}</p>
    </div>
  </div>
 `;
  })
  .join("");
};

generateroadMapContent();

