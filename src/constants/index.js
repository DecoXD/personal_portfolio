import { home,overview,about,contact,easy,itermediate, advanced, epic } from "../assets/icons";
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

export const projects = [
  {
    name:'Anker Near',
    href:'https://decoxd.github.io/ankernear/',
    img:anker,
    dificulty:'advanced',
    icon:advanced,
    tags:["Javascript",'ReactJs','Firebase','SwiperJS']

  },
  {
    name:'Nike website',
    href:'https://nike-front.vercel.app/',
    img:nike,
    dificulty:'itermediate',
    icon:itermediate,
    tags:["Javascript",'ReactJs','Tailwind',"Shadcn","Zod", ]
  }
] 