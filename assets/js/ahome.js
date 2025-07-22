  const textElement = document.getElementById("dynamic-text");
    const textArray = ["Welcome to Ahome", "Experience the Finest Living", "Discover Your Dream Home"];
    let currentIndex = 0;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const changePoint1 = 100;
      const changePoint2 = 300;
      let newIndex;

      if (scrollY > changePoint2) {
        newIndex = 2;
      } else if (scrollY > changePoint1) {
        newIndex = 1;
      } else {
        newIndex = 0;
      }

      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        animateTextChange(textArray[newIndex]);
      }
    });

    function animateTextChange(newText) {
      textElement.classList.remove("fade-text");
      textElement.style.opacity = 0;
      textElement.style.transform = "translateY(20px)";
      setTimeout(() => {
        textElement.textContent = newText;
        textElement.style.opacity = 1;
        textElement.style.transform = "translateY(0)";
        textElement.classList.add("fade-text");
      }, 300);
    }