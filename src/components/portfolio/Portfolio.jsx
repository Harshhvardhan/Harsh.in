import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/img1.jpg'
import IMG1 from '../../assets/google.png'
import IMG2 from '../../assets/fooddoor.png'
import IMG3 from '../../assets/scorecard.png'
import IMG4 from '../../assets/blog.png'
import IMG5 from '../../assets/news.png'
import IMG6 from '../../assets/todo.png'



const data =  [
  {
    id: 1,
    image: IMG1,
    title: 'Google Home Page clone, contains only frontend part and it is completely responsive.',
    github: 'https://github.com/Harshhvardhan/Google-Home-Page-Clone',
    demo: 'https://googlehomeepage.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title: 'Food Ordering Website, contains complete frontend part of a food rdering website.',
    github: 'https://github.com/Harshhvardhan/Food_ordering_website-main',
    demo: 'https://fooddoor.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title: 'Score card react app, which shows result of various matches played in badminton and it also include video analysis of all matches',
    github: 'https://github.com/Harshhvardhan/Score-Card-React-App',
    demo: 'https://scorecardreactapp.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title: 'Blog Web App, complete react based blog wep portal where user can CRUD their Blogs',
    github: 'https://github.com/Harshhvardhan/Blog-WebApp',
    demo: 'https://github.com/Harshhvardhan/Blog-WebApp'
  },
  {
    id:5,
    image:IMG5,
    title: 'Lates News Section.This section is one of the contribution in making of ample ewebsite for our college cultural fest',
    github: 'https://github.com/Harshhvardhan/sponsy-nitkkr-website',
    demo: 'https://news-section.netlify.app/'
  },
  {
    id:6,
    image:IMG6,
    title: 'To-Do-List. Complete responsive to do list web app which contains previous data in local server!',
    github: 'https://github.com/Harshhvardhan/Basic-Project--To-do-list',
    demo: 'https://to-do-list-webapp-portal.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent Works</h5>
       <h2>Portfolio</h2>

        <div className="container portfolio_container">
          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                   <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target='blank'>Github</a>
                  <a href={demo} className="btn btn-primary">Demo</a>
                </div>
             </article>
              )
            })
          }
        </div>
    </section>
  )
}

export default Portfolio