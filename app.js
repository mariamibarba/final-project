// slider
const slideItems = document.querySelectorAll('.sliders-cont');
const rectangles = document.querySelectorAll('.rectangle');
const sliders = document.querySelectorAll('.about-recomendatins');
const projectsTitles = document.querySelectorAll('.project-title');
const projects = document.querySelectorAll('.image');
const pinkLine = document.querySelectorAll('.pink-line');


let myInterval=null;
let activeIndex = 0;

initSlider();
function initSlider(){
    renderSliders();
    startAutoSliding();

}

function startAutoSliding(){
    myInterval = setInterval(showNextSlide, 5000);
  }

function renderSliders() {
    slideItems.forEach((item, i) => {
      if(activeIndex === i){
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
  }

function showNextSlide() {
activeIndex = activeIndex + 1;
if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
}
renderSliders();
}


// skills_container
const skillsSection=document.getElementById('skills_container')
const progressBars=document.querySelectorAll('.progress-bar')

function showProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;

    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight /2;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});

// rectangles
rectangles.forEach((rectangle ,rectanglesindex) => {
  rectangle.addEventListener('click', () => {
      handleRecClick(rectanglesindex);
      
  });
});

function sliderButtons() {
sliders.forEach((item, i) => {
  if(activeIndex === i){
    item.classList.add('active');

  } else {
    item.classList.remove('active');
  }
})

rectangles.forEach((item, i) => {
  if(activeIndex === i){
    item.classList.add('active');

  } else {
    item.classList.remove('active');
  }
})
}

function handleRecClick(nextIndex){
activeIndex = nextIndex;
sliderButtons();

}
// latest projects
projectsTitles.forEach((project, projectsindex) => {
  project.addEventListener('click', () => {
     handleClick(projectsindex);
     latestprojects();
  });
});

function latestprojects() {
  projectsTitles.forEach((item, i) => {
  if(activeIndex === i){
    item.classList.add('active');

  } else {
    item.classList.remove('active');
  }
});

  pinkLine.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');

    } else {
      item.classList.remove('active');
    }
  });
}

function handleClick(nextIndex){
  activeIndex = nextIndex;
  latestprojects();
}


//  filter projects
for (i = 0; i < projectsTitles.length; i++) {
  projectsTitles[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    
    projects.forEach((project) => {
      if (filter == "all") {
        project.style.display = "block"

      } else {
        if (project.classList.contains(filter)) {
          project.style.display = "block"
        }else {
          project.style.display = "none"
        }
      }
    })
  })
}


