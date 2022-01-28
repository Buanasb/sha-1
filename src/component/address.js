import React from 'react';
import '../component/jquery/hide-show';

export const AddressCard = () => {
  return (
    <div>
      <section className='container-fluid mt-2 head'>
        <div className='row pt-2'>
          <div className='col-12 d-flex justify-content-start p-0'>
            <a href='#'>
              <div
                className='material-icons d-flex align-items-center pe-3 ps-2'
                id='arrow-back'
              >
                arrow_back
              </div>
            </a>
            <div className='address' id='address'>
              <a href='#'>
                <p className='address-p m-0'>alamat pengantaran</p>
                <div className='d-flex'>
                  <h2>Tokopedia Tower</h2>
                  <div
                    className='material-icons d-flex align-items-start'
                    id='arrow-down'
                  >
                    keyboard_arrow_down
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='popup' id='popup'>
              <div className='material-icons d-flex pt-3 pe-3' id='icon-close'>
                close
              </div>
              <div>
                <h2 className=' pt-5 ps-3 pe-5 py-3'>
                  Cek makanan yang tersedia di lokasi kamu!
                </h2>
              </div>
              <div className='row m-0'>
                <div className='box d-flex justify-content-center'>
                  <div className='popup-search-box d-flex align-items-center'>
                    <div className='material-icons ps-2 pe-3' id='location'>
                      location_on
                    </div>
                    <p className='pt-3' data-text='Enter text here'>
                      Kul
                    </p>
                  </div>
                </div>
              </div>
              <div className='row pt-3 m-0'>
                <div className='result d-flex justify-content-center p-0'>
                  <div className='popup-search-result d-flex'>
                    <div
                      className='material-icons d-flex align-items-center ms-4 mt-4'
                      id='result-location'
                    >
                      location_on
                    </div>
                    <div className='ps-3 pt-2 brd'>
                      <h3 className='m-0 py-1'>Kulina</h3>
                      <p className='alamat'>
                        Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                      </p>
                    </div>
                  </div>
                </div>
                <div className='result d-flex justify-content-center p-0'>
                  <div className='popup-search-result d-flex'>
                    <div
                      className='material-icons d-flex align-items-center ms-4 mt-4'
                      id='result-location'
                    >
                      location_on
                    </div>
                    <div className='ps-3 pt-2 brd'>
                      <h3 className='m-0 py-1'>Kulina</h3>
                      <p className='alamat'>
                        Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                      </p>
                    </div>
                  </div>
                </div>
                <div className='result d-flex justify-content-center p-0'>
                  <div className='popup-search-result d-flex'>
                    <div
                      className='material-icons d-flex align-items-center ms-4 mt-4'
                      id='result-location'
                    >
                      location_on
                    </div>
                    <div className='ps-3 pt-2 brd'>
                      <h3 className='m-0 py-1'>Kulina</h3>
                      <p className='alamat'>
                        Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                      </p>
                    </div>
                  </div>
                </div>
                <div className='result d-flex justify-content-center p-0'>
                  <div className='popup-search-result d-flex'>
                    <div
                      className='material-icons d-flex align-items-center ms-4 mt-4'
                      id='result-location'
                    >
                      location_on
                    </div>
                    <div className='ps-3 pt-2 brd'>
                      <h3 className='m-0 py-1'>Kulina</h3>
                      <p className='alamat'>
                        Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                      </p>
                    </div>
                  </div>
                </div>
                <div className='result d-flex justify-content-center p-0'>
                  <div className='popup-search-result d-flex'>
                    <div
                      className='material-icons d-flex align-items-center ms-4 mt-4'
                      id='result-location'
                    >
                      location_on
                    </div>
                    <div className='ps-3 pt-2 brd'>
                      <h3 className='m-0 py-1'>Kulina</h3>
                      <p className='alamat'>
                        Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                      </p>
                    </div>
                  </div>
                </div>
                <div className='result d-flex justify-content-center p-0'>
                  <div className='popup-search-result d-flex'>
                    <div
                      className='material-icons d-flex align-items-center ms-4 mt-4'
                      id='result-location'
                    >
                      location_on
                    </div>
                    <div className='ps-3 pt-2 brd'>
                      <h3 className='m-0 py-1'>Kulina</h3>
                      <p className='alamat'>
                        Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
