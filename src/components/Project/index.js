import React, {useState} from 'react';

function Project() {
    const [portfolioItems] = useState([
        {
          img: 'read',
          alt: 'ReadMeGen',
          github: 'https://github.com/AKim47/READMeGen',
          live: 'https://watch.screencastify.com/v/tU5CkH2xamwytsdJmkTK'
        },
        {
          img: 'DND',
          alt: 'Drinks N Dice',
          github: 'https://github.com/pardue95/the-8-team-project',
          live: 'https://pardue95.github.io/the-8-team-project/'
        },
        {
          img: 'budget',
          alt: 'PWABudgetTracker',
          github: 'https://github.com/AKim47/PWABudgetTracker',
          live: 'https://agile-river-30422.herokuapp.com/'
        }
      ]);


    return (
        <div className="flex-row space-between">
            {portfolioItems.map((item) => (
                <div className="card">
                <img
                    src={require(`../../assets/${item.img}.png`)}
                    alt={item.alt}
                    className="img-thumbnail mx-1"
                    key={item.alt}></img>

                <a href={item.github}>{item.alt} Github link</a><br></br>
                <a href={item.live}>{item.alt} Example link</a><br></br>
                </div>

            ))}
        </div>
    )

}
export default Project;

// import React, {useState} from 'react';
// import Project from '../Project';
// import Read from '../../assets/read.png';
// import Dnd from '../../assets/DND.png';
// import budget from '../../assets/budget.png';

// function Portfolio() {


//   return (
//     <div>
//       <ul className="flex-row px-1">
//           {portfolioItems.map((items) => (
//               <Project item={items}></Project>
//           ))}
          
//       </ul>
//     </div>
//   );
// };

// export default Portfolio;