import { EducationSchool, ExperienceCompany, LanguageItem, Languages, Project, SocialImage } from "../../types";


import inflight from "../../assets/experience/inflightit.png"
import avidsoft from "../../assets/experience/avidsoft.jpeg"
import vimaponto from "../../assets/experience/vimaponto.jpeg"
import scion from "../../assets/experience/scion.jpeg"

import email from "../../assets/welcome/social/email.png";
import twitter from "../../assets/welcome/social/twitter.png";
import github from "../../assets/welcome/social/github.png";
import linkedin from "../../assets/welcome/social/linkedin.png";

import AboutMe from "../../components/home/about-me";
import Projects from "../../components/home/projects";
import Education from "../../components/home/education";
import Experience from "../../components/home/experience";

export const allProjects: Project[] = [{
    img: "https://ishoppingstar.com/wp-content/uploads/2022/03/60c27838dcd6e.jpg",
    title: "Spotify",
    description: "PROJECTS.DESCRIPTION.SPOTIFY",
    src: "spotify",
}, {
    img: "https://arena.rtp.pt/wp-content/uploads/2021/05/netflix.png",
    title: "Netflix",
    description: "PROJECTS.DESCRIPTION.NETFLIX",
    src: "netflix",

}, {
    img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/05/amazon.jpg",
    title: "Amazon",
    description: "PROJECTS.DESCRIPTION.AMAZON",
    src: "amazon",
}, {
    img: "https://wallpaper.dog/large/977108.jpg",
    title: "Youtube",
    description: "PROJECTS.DESCRIPTION.YOUTUBE",
    src: "youtube",
}, {
    img: "https://images.hdqwalls.com/wallpapers/reddit-cartoon-4k-io.jpg",
    title: "Reddit",
    description: "PROJECTS.DESCRIPTION.REDDIT",
    src: "reddit",
}, {
    img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/07/meta-earnings-call-62e272d7056db-sej.png",
    title: "Facebook",
    description: "PROJECTS.DESCRIPTION.FACEBOOK",
    src: "facebook",
}, {
    img: "https://kinsta.com/pt/wp-content/uploads/sites/3/2020/01/estatisticas-linkedin.png",
    title: "Linkedin",
    description: "PROJECTS.DESCRIPTION.LINKEDIN",
    src: "linkedin",
}]

export const experienceCompanys: ExperienceCompany[] = [{
    logo: avidsoft,
    title: "Avidsoft",
    description: "GENERAL.LOREM_CARD",
    src: "https://avidsoft.net/",
    location: "Vila Nova de Famalicão",
    period: "Jun 2018 - Jul 2018"
}, {
    logo: vimaponto,
    title: "Vimaponto",
    description: "GENERAL.LOREM_CARD",
    src: "https://vimaponto.com/",
    location: "Guimarães",
    period: "May 2019 - Jul 2019"
}, {
    logo: scion,
    title: "Scion Labs",
    description: "GENERAL.LOREM_CARD",
    src: "https://www.google.com/search?q=scion+labs&oq=scion+labs&aqs=chrome.0.69i59l2j0i10i22i30j0i22i30j69i65j69i60.2927j1j4&sourceid=chrome&ie=UTF-8",
    location: "Guimarães",
    period: "Feb 2021 - Jul 2021"
}, {
    logo: inflight,
    title: "InflightIT",
    description: "GENERAL.LOREM_CARD",
    src: "https://www.inflightit.com/",
    location: "Guimarães",
    period: "Dec 2021 - current"
}]

export const educationSchools: EducationSchool[] = [{
    school: "HOME.EDUCATION.SCHOOL_BERNARDINO_MACHADO",
    location: "Vila Nova de Famalicão",
    period: "Sept 2012 - Jul 2015",
    text: "GENERAL.LOREM_CARD"
}, {
    school: "HOME.EDUCATION.SCHOOL_PADRE_BENJAMIM_SALGADO",
    location: "Vila Nova de Famalicão",
    period: "Sept 2015 - Jul 2019",
    text: "GENERAL.LOREM_CARD"
}, {
    school: "HOME.EDUCATION.POLYTECHNIC_INSTITUE_OF_CAVADO_AND_AVE",
    location: "Guimarães",
    period: "Sept 2019 - Jul 2021",
    text: "GENERAL.LOREM_CARD"
}]

export const socialImages: SocialImage[] = [
    { image: email, link: "https://www.hotmail.com/" },
    { image: twitter, link: "https://www.twitter.com/" },
    { image: github, link: "https://www.github.com/" },
    { image: linkedin, link: "https://www.linkedin.com/" },
];

export const componentsWithMargins = [AboutMe, Education, Experience, Projects]

export const availableLanguages: LanguageItem[] = [{
    image: 'https://flagcdn.com/w20/us.png',
    imageSet: 'https://flagcdn.com/w40/us.png 2x',
    text: Languages.EN
}, {
    image: 'https://flagcdn.com/w20/pt.png',
    imageSet: 'https://flagcdn.com/w40/pt.png 2x',
    text: Languages.PT
}, {
    image: 'https://flagcdn.com/w20/es.png',
    imageSet: 'https://flagcdn.com/w40/es.png 2x',
    text: Languages.ES
}, {
    image: 'https://flagcdn.com/w20/fr.png',
    imageSet: 'https://flagcdn.com/w40/fr.png 2x',
    text: Languages.FR
}, {
    image: 'https://flagcdn.com/w20/de.png',
    imageSet: 'https://flagcdn.com/w40/de.png 2x',
    text: Languages.DE
}]