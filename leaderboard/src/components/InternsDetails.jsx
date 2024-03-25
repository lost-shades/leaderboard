import React from 'react';
import './Styles.css';

export const InternsDetails = ({ InternsData }) => {
  
  const sortedInternsData = InternsData.sort((a, b) => b.score - a.score);
  
  const topThreeInterns = sortedInternsData.slice(0, 3);
  const remainingInterns = sortedInternsData.slice(3);

  return (
    <div>
      <div className='heading'>
        <h2>Top Three Interns</h2>
      </div>
      <div className='topThreeContainer'>
        {topThreeInterns.map((intern, index) => (
          <div key={index}>
              <div>
              <img src={intern.img} alt='intern photo'/> 
              </div>
              <h3>{intern.name}</h3>
              <p>{intern.LearningTrack}</p>   
              <p>{intern.score}</p>
          </div>
        ))}
      </div>
      <div className="heading">
        <h2>All Interns</h2>
      </div>
      <div className='allInternsContainer'>
        {[...topThreeInterns, ...remainingInterns].map((intern, index) => (
          <div className='board' key={index}>
            <div>
              <img src={intern.img} alt='intern photo' />
            </div>
            <div>
              <h3>{intern.name}</h3>
            </div>
            <div>
              <p>{intern.LearningTrack}</p>
            </div>
            <div>
              <p>{intern.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternsDetails;
