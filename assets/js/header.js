window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
  
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "shadow-md", "text-black");
      header.classList.remove("bg-transparent", "text-white");
    } else {
      header.classList.remove("bg-white", "shadow-md", "text-black");
      header.classList.add("bg-transparent", "text-white");
    }
  });
  
  