import React, { Component } from 'react';
import Slider from 'react-slick';

export default class CarouselCard extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 2,
    };
    return (
      <div>
        <div className='pt-2 d-flex justify-content-center carousel'>
          <Slider {...settings} className='slider'>
            <div>
              <div className='active text-center'>
                <p className='m-0'>sen</p>
                <h4>10</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>sel</p>
                <h4>11</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>rabu</p>
                <h4>12</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>kam</p>
                <h4>13</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>jum</p>
                <h4>14</h4>
              </div>
            </div>
            <div>
              <div className='active we text-center'>
                <p className='m-0'>sab</p>
                <h4>15</h4>
              </div>
            </div>
            <div>
              <div className='active we text-center'>
                <p className='m-0'>min</p>
                <h4>16</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>sen</p>
                <h4>17</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>sel</p>
                <h4>18</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>rabu</p>
                <h4>19</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>kam</p>
                <h4>20</h4>
              </div>
            </div>
            <div>
              <div className='active text-center'>
                <p className='m-0'>jum</p>
                <h4>21</h4>
              </div>
            </div>
            <div>
              <div className='active we text-center'>
                <p className='m-0'>sab</p>
                <h4>22</h4>
              </div>
            </div>
            <div>
              <div className='active we text-center'>
                <p className='m-0'>min</p>
                <h4>23</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
