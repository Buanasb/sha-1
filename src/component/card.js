import React from 'react';
import '../component/jquery/cart-popup';

export const Card = () => {
  return (
    <div>
      <section className='container-fluid card-container'>
        <div className='row day pt-4 py-3'>
          <div className='col-12 d-flex justify-content-center p-0'>
            <div className='day-card'>
              <h3>Kamis. 13 Maret 2019</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-0'>
            <div className='card1'>
              <img src='images/menu_1.jpg' alt='menu1' id='menu1' />
              <div className='detail ps-3'>
                <div className='ratings d-flex justify-content-start pt-2 py-1'>
                  <div>
                    <p className='pt-1 pe-1 m-0'>4.5</p>
                  </div>
                  <div>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star_half
                    </span>
                  </div>
                </div>
                <div className='items'>
                  <h3 className='m-0'>Chicken Bolognese Penne sauteed</h3>
                  <p>by Kulina . Uptown Lunch</p>
                </div>
                <div className='prices d-flex justify-content-between'>
                  <h3 className='d-flex align-items-center'>Rp 35,000</h3>
                  <div className='pe-3'>
                    <button className='add'>ADD +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-0 mt-3 mt-md-0'>
            <div className='card1'>
              <img src='images/menu_2.jpg' alt='menu1' id='menu1' />
              <div className='detail ps-3'>
                <div className='ratings d-flex justify-content-start pt-2 py-1'>
                  <div>
                    <p className='pt-1 pe-1 m-0'>4.5</p>
                  </div>
                  <div>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star_half
                    </span>
                  </div>
                </div>
                <div className='items'>
                  <h3 className='m-0'>Gado2 Salad</h3>
                  <p>by Kulina . Uptown Lunch</p>
                </div>
                <div className='prices d-flex justify-content-between'>
                  <h3 className='d-flex align-items-center'>Rp 35,000</h3>
                  <div className='pe-3'>
                    <button className='add'>ADD +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-0 mt-3 mt-lg-0'>
            <div className='card1'>
              <img src='images/menu_3.jpg' alt='menu1' id='menu1' />
              <div className='detail ps-3'>
                <div className='ratings d-flex justify-content-start pt-2 py-1'>
                  <div>
                    <p className='pt-1 pe-1 m-0'>4.5</p>
                  </div>
                  <div>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star
                    </span>
                    <span class='material-icons pt-2' id='star'>
                      star_half
                    </span>
                  </div>
                </div>
                <div className='items'>
                  <h3 className='m-0'>Penne-Pasta Chicken Presto</h3>
                  <p>by Kulina . Uptown Lunch</p>
                </div>
                <div className='prices d-flex justify-content-between'>
                  <h3 className='d-flex align-items-center'>Rp 35,000</h3>
                  <div className='pe-3'>
                    <button className='add'>ADD +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container-fluid add-cart'>
        <div className='row'>
          <div className='col-12 p-0 d-flex justify-content-center'>
            <div className='card-cart d-flex justify-content-between'>
              <div className='ps-3 align-self-center'>
                <h3 className='m-0'>5 Items | Rp 125,000</h3>
                <p className='m-0'>Termasuk ongkos kirim</p>
              </div>
              <div className='d-flex align-items-center pe-2'>
                <span class='material-icons-outlined' id='shopping'>
                  shopping_cart
                </span>
                <span class='material-icons' id='shopping'>
                  navigate_next
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
