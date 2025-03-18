
  
  for (let i = 0; i < 5; i++) {
    let beam = document.createElement("div");
    beam.classList.add("light-beam");
    beam.style.left = `${Math.random() * 100}%`;
    beam.style.animationDuration = `${4 + Math.random() * 3}s`;
    document.body.appendChild(beam);
  }

  // Generate floating particles (stars)
  for (let i = 0; i < 50; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${3 + Math.random() * 3}s`;
    document.body.appendChild(star);
  }
