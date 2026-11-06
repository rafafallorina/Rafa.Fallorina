
/* THEME TOGGLE */
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
});

/* MOBILE NAVIGATION */
menuToggle?.addEventListener("click", () => {
  if (!mobileMenu) return;

  const isOpen = mobileMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});

/* SELECTED WORKS CAROUSEL */
const projectTrack = document.getElementById("projectTrack");

if (projectTrack) {
  const projects = Array.from(
    projectTrack.querySelectorAll(".project-card")
  );

  const prevButton = document.getElementById("prevProject");
  const nextButton = document.getElementById("nextProject");

  const dots = Array.from(
    document.querySelectorAll(".carousel-dot")
  );

  const thumbnails = Array.from(
    document.querySelectorAll(".carousel-thumb")
  );

  const counter = document.getElementById("carouselCount");

  let currentProject = 0;
  let scrollTimer;

  function updateCarousel() {
    if (counter) {
      counter.textContent =
        String(currentProject + 1).padStart(2, "0") +
        " / " +
        String(projects.length).padStart(2, "0");
    }

    dots.forEach((dot, index) => {
      const isActive = index === currentProject;

      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    thumbnails.forEach((thumbnail, index) => {
      const isActive = index === currentProject;

      thumbnail.classList.toggle("active", isActive);
      thumbnail.setAttribute(
        "aria-current",
        isActive ? "true" : "false"
      );
    });
  }

  function goToProject(index) {
    currentProject = Math.max(
      0,
      Math.min(index, projects.length - 1)
    );

    const targetPosition =
      projects[currentProject].offsetLeft -
      projectTrack.offsetLeft;

    projectTrack.scrollTo({
      left: targetPosition,
      behavior: "smooth"
    });

    updateCarousel();
  }

  prevButton?.addEventListener("click", () => {
    goToProject(currentProject - 1);
  });

  nextButton?.addEventListener("click", () => {
    goToProject(currentProject + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToProject(index);
    });
  });

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const index = Number(thumbnail.dataset.slide);
      goToProject(index);
    });
  });

  projectTrack.addEventListener("scroll", () => {
    window.clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout(() => {
      const trackPosition = projectTrack.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Infinity;

      projects.forEach((project, index) => {
        const distance = Math.abs(
          project.offsetLeft -
          projectTrack.offsetLeft -
          trackPosition
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentProject = closestIndex;
      updateCarousel();
    }, 80);
  });

  updateCarousel();
}

/* MORE WORK LIGHTBOX */

const workLightbox = document.getElementById("workLightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".more-work-item").forEach((item) => {
  item.addEventListener("click", () => {
    const type = item.dataset.type;
    const src = item.dataset.src;

    lightboxContent.innerHTML = "";

    if (type === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      lightboxContent.appendChild(video);
    } else {
      const image = document.createElement("img");
      image.src = src;
      image.alt = "Selected work";
      lightboxContent.appendChild(image);
    }

    workLightbox.classList.add("open");
    workLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeWorkLightbox() {
  workLightbox.classList.remove("open");
  workLightbox.setAttribute("aria-hidden", "true");
  lightboxContent.innerHTML = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeWorkLightbox);

workLightbox.addEventListener("click", (event) => {
  if (event.target === workLightbox) {
    closeWorkLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && workLightbox.classList.contains("open")) {
    closeWorkLightbox();
  }
});
