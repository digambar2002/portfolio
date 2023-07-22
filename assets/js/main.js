async function init() {
  const node = document.querySelector("#type-text")

  await sleep(1000)
  node.innerText = ""
  await node.type('')

  while (true) {
    await node.type('Programmer!')
    await sleep(2000)
    await node.delete('Programmer!')

    await node.type('Developer!')
    await sleep(2000)
    await node.delete('Developer!')

    await node.type('Student!')
    await sleep(2000)
    await node.delete('Student!')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()




$(document).ready(function () {


  setTimeout(function () {

    $("#loader").attr("hidden", true);
    $("#main").attr("hidden", false);
  }, 500);

});


function Display(id, slideNo) {

  $(".HomeBtn").removeClass("li-glow active-nav");
  $(".AboutBtn").removeClass("li-glow active-nav");
  $(".WorkBtn").removeClass("li-glow active-nav");
  $(".ContactBtn").removeClass("li-glow active-nav");
  $("." + id).addClass("li-glow active-nav");
}




/* ----------------- About Tabs ------------------ */

const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {

  if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const target = e.target.getAttribute("data-target");
    console.log(target);

    aboutSection.querySelector(".tab-content.active").classList.remove("active")
    aboutSection.querySelector(target).classList.add("active")
  }
});


