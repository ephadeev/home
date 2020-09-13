'use strict';

const headingContainers = document.getElementsByClassName('heading-container');

const headingContainerPosition0 = headingContainers[0].offsetTop;
const headingContainerPosition1 = headingContainers[1].offsetTop;

window.addEventListener('scroll', () => {
    if (Math.floor(pageYOffset) + headingContainerPosition0 <= 460) {
        headingContainers[0].style.top = `${Math.floor(pageYOffset) + headingContainerPosition0}px`;
        headingContainers[1].style.top = `${Math.floor(pageYOffset) + headingContainerPosition1}px`;
    }
});