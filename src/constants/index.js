import { home,overview,about,contact,easy,itermediate, advanced, epic, instagram, linkedin, github, whatsapp } from "../assets/icons";
import { anker,nike } from "../assets/images";




export const navLinks = [
  {
    label:'Home',
    href:'#home',
    icon:home,
    
  },
  {
    label:'Overview',
    href:'#overview',
    icon:overview,
  },
  {
    label:'About',
    href:'#about',
    icon:about,
  },
  {
    label:'Contact',
    href:'#contact',
    icon:contact,
  },
]


export const contacts = [
  {
    icon:instagram,
    href:'https://www.instagram.com/deco.xd/',
    label:'instagram'
  },
  {
    icon:linkedin,
    href:'https://www.linkedin.com/in/andre-pinheiro-54a5a1237/',
    label:'linkedin'
  },
  {
    icon:github,
    href:'https://github.com/decoXD',
    label:'github'
  },
  {
    icon:whatsapp,
    href:'https://github.com/decoXD',
    label:'whatsapp'
  },
  
]


export const projects = [
  {
    name:'Anker Near',
    href:'https://decoxd.github.io/ankernear/',
    img:anker,
    dificulty:'advanced',
    icon:advanced,
    tags:["Javascript",'ReactJs','Firebase','SwiperJS','full-stack']

  },
  {
    name:'Nike website',
    href:'https://nike-front.vercel.app/',
    img:nike,
    dificulty:'itermediate',
    icon:itermediate,
    tags:["Javascript",'ReactJs','Tailwind',"Shadcn","Zod",'front-end' ]
  }
] 