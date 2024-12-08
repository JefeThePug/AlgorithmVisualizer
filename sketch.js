let bg;

function setup() {
    createCanvas(1200, 600); // inside <main>
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
}

function draw() {
    bg = document.documentElement.getAttribute('data-theme') === 'dark' ? '#0B192C' : '#AF8F6F';
    background(bg);
}
