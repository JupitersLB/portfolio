import { faHtml5, faCss3, faReact, faFigma, faJsSquare, faBootstrap, faWordpress, faYarn } from '@fortawesome/free-brands-svg-icons';
import yours from '../assets/images/avatar.png';
import mediSafe from '../assets/images/medi-safe.png';
import cocktail from '../assets/images/mister-cocktail.png';
import farmMe from '../assets/images/farm-me.png';
import ltOnline from '../assets/images/LT-online.png';

const projects = [
  {
    id: 1,
    name: 'Yours',
    role: 'Full Stack Developer',
    icons: [faHtml5, faCss3, faReact, faJsSquare, faBootstrap, faYarn],
    pain: 'With kids becoming digitally native at a much younger age, learning how to navigate and interact with social media is increasingly more important. Bullying, fake news, and scams have massively negative consequences to kids who struggle with dealing with a 24/7 form of constant feedback and interaction with society.',
    solution: 'This app is a social media which will only be accessible to students of the same school. By creating a social media intranet, students will interactive with classmates and peers is a safe space, and be introduced on a much smaller scale to how social media work and the issues which are associated with it. Their blogs, comments, and profiles are only accessible to mutal friends. They also have the opportunity for direct messaging and communicating with friends privately.',
    url: 'https://journal-yours.herokuapp.com',
    description: 'An onboarding social media app educating students in schools for the 21st Century education. It allows schools and educational institutions to bring this students into an increasingly digital world.',
    imageUrl: yours,
    videoUrl: 'https://www.youtube.com/watch?v=jp-CVYGEsjg&list=RDjp-CVYGEsjg&start_radio=1&ab_channel=DisneyMusicVEVO'
  },
  {
    id: 2,
    name: 'Medi+Safe',
    role: 'Front-end Developer',
    icons: [faHtml5, faCss3, faJsSquare, faBootstrap, faFigma, faYarn],
    pain: 'As a group project, one of the teammates explained the issues that can occur by poor communication or issues in organizing tasks. Lead nurses have to spend extra time ensuring nurse work loads correspond to abiltiies while serving patients\' needs. They also need to follow up on nurses progress and help or rearrange as necessary. Member nurses spend a lot of time figuring out their schedules with patients and collating information from several different sources. At the same time, they need be aware of their own progress, communicate with other staff, and beaware of any updates.',
    solution: 'By assessing the problems that nursing staff go through, we knew that we wanted to automate patient assignment based on important criteria. After patients were assigned, we wanted to make sure that the Lead nurse could easily track their teams progress. The member nurses wanted a quick overview of their day including the number of tasks, their patients\' severity levels, and a list of their patients. They wanted extra information provided to them for each patient and a way to organize all of their tasks and optimize their schedules. By using a drag and drop system, it easily allowed customization of schedules which were persistent. A notification system allowed for updates to be received along with an assistance buton which directly communicates to their lead nurse.',
    url: 'https://www.medi-safe.me',
    description: 'An app which helps solve task management and communicaton issues within hospitals by supporting nursing staff to track their progress and stay up-to-date',
    imageUrl: mediSafe,
    videoUrl: []
  },
  {
    id: 3,
    name: 'Mister Cocktail',
    role: 'Full Stack Developer',
    icons: [faHtml5, faCss3, faJsSquare, faBootstrap],
    pain: 'Keeping track of cocktails and doses can be difficult.',
    solution: 'A cool, interactive way to record cocktails and doses and will give you suggestions of other cocktails you might like.',
    url: 'https://jupiters-balltails.herokuapp.com',
    description: 'Cocktail app primarily exploring MVC framework, built with Ruby on Rails and JavaScript packages. It explores different UI concepts.',
    imageUrl: cocktail,
    videoUrl: 'https://www.youtube.com/watch?v=KDDgoUTQ4NI&ab_channel=LiamBaker'
  },
  {
    id: 4,
    name: 'Farm-Me',
    role: 'Back-end Developer',
    icons: [faHtml5, faCss3, faJsSquare, faYarn, faBootstrap],
    pain: 'Farmers and consumers often interact with 3rd parties during production and counsumption which can raise costs and decrease profits. They also might need become dependent and susceptible to current global politics.',
    solution: 'The app allows farmers to post their products in the form of a weekly basket of produce which users can subscribe too. Both parties get to decide whether to enter into the trade or stop at any point based on distances and quality.',
    url: 'http://farm-me.herokuapp.com',
    description: 'A great marketplace for farmers to connect with, and sell, to their local communities. Those who care about sustainabilty and their local economies would love this.',
    imageUrl: farmMe,
    videoUrl: []
  },
  {
    id: 5,
    name: 'LT Online',
    role: 'Freelance Developer',
    icons: [faHtml5, faCss3, faWordpress],
    target: 'Current students and perspective parents.',
    pain: 'Duing COVID-19, schools were forced to move away from traditional models and move quickly into providing a digital means for their product. This was difficult, as schools largely rely on teaching to take place on campus with very little online interaction. As a private international school, to keep students they had to provide an online platform for content delivery.',
    solution: 'To solve the issues associated with lockdowns and social distancing, the school decided to create a website for content delivery and managing their online streaming and classes. Since then, it has morphed into a much bigger project, also being used to to attract perspective customers and organize information events and providing insights into their programme.',
    url: 'https://www.growing-trees.com/LTonline/',
    description: 'This website acts as an online content delivery service, as well as a paywall between live stream events and classes. It has allowed the school to continue functioning throught COVID-19',
    imageUrl: ltOnline,
    videoUrl: []
  }
];

export default projects;
