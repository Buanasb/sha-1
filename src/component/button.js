import React from 'react';
import '../component/jquery/active-btn';
import '../component/jquery/hide-show-nav';

export const ButtonCard = () => {
  return (
    <div>
      <section className='container-fluid p-0 button-card'>
        <div className='row m-0'>
          <div className='col-12 d-flex justify-content-center btn-card'>
            <div>
              <button className='lunch act'>Lunch</button>
              <button className='dinner'>Dinner</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
