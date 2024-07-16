"use strict";

var BTN_ACTIVE_CLASS = "btn-active";
var GLOW_LEFT_OFFSET = 19.75;
var html;
var start;
var switcher;
var switcherRoot;
var switcherBtns;
var mainSections;
var tops;
var resizeTimeout;

var calcSwitcher = (activeBtn, targetBtn) => {
    const glow = document.querySelector(".switcher-glow");
    const curr = document.querySelector(".switcher-curr");
    const currLeft = targetBtn.offsetLeft;
    const width = targetBtn.offsetWidth;
    const middle = Math.round(width / 2);
    curr.setAttribute("style", `width: ${width}px; left: ${currLeft}px`);
    glow.style.left = `${currLeft + middle - GLOW_LEFT_OFFSET}px`;
    const switcherOffsetWidth = switcher.offsetWidth;
    const sumOffsetX = Math.round(currLeft + middle + 4);
    const multOffsetX = Math.round(sumOffsetX / switcherOffsetWidth * 100);
    switcher.style.setProperty("--x", `${100 - multOffsetX}%`);
    targetBtn.classList.add(BTN_ACTIVE_CLASS);
    if (activeBtn) activeBtn.classList.remove(BTN_ACTIVE_CLASS);
};

var handleSwitcher = (e) => {
    const target = e.target.closest(".switcher-btn");
    if (!target || target.classList.contains(BTN_ACTIVE_CLASS)) return;
    const activeBtn = switcherRoot.querySelector(`.${BTN_ACTIVE_CLASS}`);
    calcSwitcher(activeBtn, target);
    const targetSection = document.querySelector(`#${target.dataset.scrollTo}`);
    window.scrollTo({
        top: targetSection.id === "home" ? 0 : targetSection.offsetTop,
        behavior: "smooth"
    });
};

var generateTops = () => {
    return [start.offsetTop, ...Array.from(mainSections).map(section => section.offsetTop + start.offsetTop)];
};

var switcherScroll = () => {
    const windowScrollY = window.scrollY;
    if (windowScrollY >= start.offsetTop - 15) {
        switcher.classList.add("switcher-fixed");
    } else {
        switcher.classList.remove("switcher-fixed");
    }
    const activeBtn = document.querySelector(`.${BTN_ACTIVE_CLASS}`);
    let currSection = tops.findIndex(top => top > windowScrollY - start.offsetTop - switcher.offsetHeight);
    if (currSection === -1) currSection = tops.length - 1;
    const targetBtn = switcherBtns[currSection];
    if (activeBtn !== targetBtn) calcSwitcher(activeBtn, targetBtn);
};

var handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        html.style.scrollBehavior = "auto";
        tops = generateTops();
        html.style.scrollBehavior = "smooth";
    }, 20);
};

var initElements = () => {
    html = document.documentElement;
    start = document.querySelector(".start");
    switcher = document.querySelector(".switcher");
    switcherRoot = document.querySelector(".switcher-root");
    switcherBtns = document.querySelectorAll(".switcher-btn");
    mainSections = document.querySelectorAll("section");
    tops = generateTops();
};

var setUpLoad = () => {
    calcSwitcher(null, switcherBtns[0]);
    if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
    }
};

var initListeners = () => {
    html.style.scrollBehavior = "smooth";
    start.style.height = `${switcher.offsetHeight}px`;
    switcherRoot.addEventListener("click", handleSwitcher);
    window.addEventListener("scroll", switcherScroll, true);
    window.addEventListener("resize", handleResize);
};

var initApp = () => {
    initElements();
    setUpLoad();
    initListeners();
};

window.addEventListener("load", initApp, { once: true });
