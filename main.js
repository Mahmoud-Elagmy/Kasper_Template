function menu() {
    const togg = document.getElementById("toggle-menu");
    togg.addEventListener("click", () => {
        togg.classList.toggle("active");
    })
}
menu();

function search() {
    const icon = document.getElementById("search");
    const input = document.getElementById("search-input");
    icon.addEventListener("click", () => {
        icon.classList.toggle("active");
        input.focus();
    })
}
search();

function search_input() {
    const input = document.getElementById("search-input");
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const query = input.value;
            if (query) {
                window.find(query, true);
            }
            else {
                window.alert("Please enter a search query.");
            }
        }
    })
}

search_input();

function bg() {
    const icon = document.querySelectorAll(".bullet");
    const bg = document.getElementById("land");
    let idx = 0;
    let timer;

    function update(idx) {
        document.querySelector(".bullet.active")?.classList.remove("active");
        icon[idx].classList.add("active");
        bg.style.backgroundImage = icon[idx].getAttribute("data-bg");
    }

    function slider() {
        timer = setInterval(() => {
            idx = (idx + 1) % icon.length;
            update(idx);
        }, 5000);
    }

    icon.forEach((icon, indx) => {
        icon.addEventListener("click", () => {
            idx = indx;
            update(idx);
            clearInterval(timer);
            slider();
        })
    })

    slider();
}
bg();


function shuffle() {
    const btn = document.querySelectorAll(".shuffle li");
    const card = document.querySelectorAll(".portfolio .imgs .box");

    btn.forEach((bt) => {
        bt.addEventListener("click", () => {
            btn.forEach((bt) => {
                bt.classList.remove("active");
            })
            bt.classList.add("active");
            const target = bt.id;
            card.forEach((c) => {
                const cardTarget = c.getAttribute("data-category");
                setTimeout(() => {
                    if (target === cardTarget || target === "all") {
                        c.style.display = "flex";
                    } else {
                        c.style.display = "none";
                    }
                }, 200);
            });
        });
    });
}
shuffle();

