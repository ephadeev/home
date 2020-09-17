'use strict';

const headingContainers = document.getElementsByClassName('heading-container');

const project1 = document.getElementsByClassName('works__project')[0];

const headingContainerPosition0 = headingContainers[0].offsetTop;
const headingContainerPosition1 = headingContainers[1].offsetTop;

const header = document.getElementsByClassName('animation-container')[0];
const positionOfHeaderBottom = header.offsetHeight;

const about = document.getElementsByClassName('animation-container')[4];
const positionOfAboutTop = about.offsetTop;

const works = document.getElementsByClassName('works__container')[0];
const positionOfWorks = works.offsetTop;

const worksWrapper = document.getElementsByClassName('works__wrapper')[0];

window.addEventListener('scroll', () => {
    if (pageYOffset + headingContainerPosition0 <= 460) {
        headingContainers[0].style.top = `${Math.floor(pageYOffset) + headingContainerPosition0}px`;
        headingContainers[1].style.top = `${Math.floor(pageYOffset) + headingContainerPosition1}px`;
    }

    if (pageYOffset <= positionOfHeaderBottom && worksWrapper.style.left !== '0px') {
        worksWrapper.style.left = '0px';
    }

    if (pageYOffset >= (positionOfAboutTop - positionOfHeaderBottom) && worksWrapper.style.left !== `${-1 * worksWrapper.offsetWidth / 3 * 2}px`) {
        worksWrapper.style.left = `${-1 * worksWrapper.offsetWidth / 3 * 2}px`;
    }

    if (pageYOffset >= positionOfHeaderBottom && pageYOffset <= (positionOfAboutTop - positionOfHeaderBottom)) {
        worksWrapper.style.left = `${-1 * (pageYOffset - positionOfHeaderBottom)  * 100  / (positionOfAboutTop - positionOfHeaderBottom)}%`;
        if (1.5 * (pageYOffset - positionOfHeaderBottom) <= 234) {
            project1.style.top = `${-1.5 * (pageYOffset - positionOfHeaderBottom)}px`
        } else {
            project1.style.top = '-234px'
        }
    }
});