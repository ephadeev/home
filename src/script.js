'use strict';

const headerTitle = document.getElementsByClassName('header__title')[0];
const headerText = document.getElementsByClassName('header__text')[0];

const project1 = document.getElementsByClassName('works__project')[0];

const headerTitlePosition = headerTitle.offsetTop;
const headerTextPosition = headerText.offsetTop;

const header = document.getElementsByClassName('animation-container')[0];
const positionOfHeaderBottom = header.offsetHeight;

const about = document.getElementsByClassName('animation-container')[4];
const positionOfAboutTop = about.offsetTop;

const works = document.getElementsByClassName('works__container')[0];
const positionOfWorks = works.offsetTop;

const worksWrapper = document.getElementsByClassName('works__wrapper')[0];

window.addEventListener('scroll', () => {
    if (pageYOffset + headerTitlePosition <= 460) {
        headerTitle.style.top = `${Math.floor(pageYOffset) + headerTitlePosition}px`;
        headerText.style.top = `${Math.floor(pageYOffset) + headerTextPosition}px`;
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