import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import './UserMenu.scss'
import food from './images/momos.png'
import rupee from './images/rupees.png'
import dropDown from './images/icons8-chevron-24.png'
import searchicon from './images/icons8-search-30.png'
const UserMenu = () => {
  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='base1'>
      <div className='UserMenu1'>
        <div className='Title1'>FOODZVILLA</div>
        <nav className='Navbar1'>
          <div className='sort1'>
            <div className='SortBy1'>Sort By</div>
          </div>
          {/* <div className='SearchSection'>
            <img className='searchIcon' src={searchicon} alt='' />
          </div> */}
          <input
            type='text'
            placeholder='Search..'
            className='searchText1'
            id=''
          />
        </nav>
        <div className='offer1'>
          <div className='nameAndStars1'>
            <div className='shopName1'>Momo's Corner</div>
            <div className='Stars1'>
              &#9733; &#9733; &#9733; &#9733; &#9734;{' '}
            </div>
          </div>

          <div className='contactAndBtn1'>
            <div className='Contact1'>
              +919876543210
              <br />
              xyz@gmail.com
            </div>
            <button className='todaysSpecial1'>Today's Special</button>
          </div>
        </div>
        <hr />
        <div className='itemsInMenu1'>
          <div className='vegNonVeg1'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
              alt=''
            />
          </div>

          <div className='items1'>
            <div className='imgAndName1'>
              <img src={food} alt='Mountain' className='images1'></img>
              <div className='itemDetails1'>
                <div className='itemName1'>Corn & Cheese Pan Tossed Momo</div>
                <div className='descriptionPrice1'>
                  <div className='description1'>
                    Delightful parcels of happiness packet
                    <a className='readmore1' href='#'>
                      ..read more
                    </a>
                  </div>
                  <div className='price1'>
                    <img src={rupee} alt='' /> 199
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='vegNonVeg1'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
              alt=''
            />
          </div>

          <div className='items1'>
            <div className='imgAndName1'>
              <img src={food} alt='Mountain' className='images1'></img>
              <div className='itemDetails1'>
                <div className='itemName1'>Corn & Cheese Pan Tossed Momo</div>
                <div className='descriptionPrice1'>
                  <div className='description1'>
                    Delightful parcels of happiness packed{' '}
                    <a className='readmore1' href='#'>
                      ..read more
                    </a>
                  </div>
                  <div className='price1'>
                    {' '}
                    <img src={rupee} alt='' />
                    199
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className='vegNonVeg1'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/180px-Non_veg_symbol.svg.png'
              alt=''
            />
          </div>

          <div className='items1'>
            <div className='imgAndName1'>
              <img src={food} alt='Mountain' className='images1'></img>
              <div className='itemDetails1'>
                <div className='itemName1'>
                  Chicken Peri Peri Pan Tossed Momo
                </div>
                <div className='descriptionPrice1'>
                  <div className='description1'>
                    Delightful parcels of happiness packed{' '}
                    <a className='readmore1' href='#'>
                      ..read more
                    </a>
                  </div>
                  <div className='price1'>
                    {' '}
                    <img src={rupee} alt='' />
                    199
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='vegNonVeg1'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
              alt=''
            />
          </div>

          <div className='items1'>
            <div className='imgAndName1'>
              <img src={food} alt='Mountain' className='images1'></img>
              <div className='itemDetails1'>
                <div className='itemName1'>Corn & Cheese Pan Tossed Momo</div>
                <div className='descriptionPrice1'>
                  <div className='description1'>
                    Delightful parcels of happiness packed
                    <a className='readmore1' href='#'>
                      ..read more
                    </a>
                  </div>
                  <div className='price1'>
                    {' '}
                    <img src={rupee} alt='' />
                    199
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='vegNonVeg1'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
              alt=''
            />
          </div>

          <div className='items1'>
            <div className='imgAndName1'>
              <img src={food} alt='Mountain' className='images1'></img>
              <div className='itemDetails1'>
                <div className='itemName1'>Corn & Cheese Pan Tossed Momo</div>
                <div className='descriptionPrice1'>
                  <div className='description1'>
                    Delightful parcels of happiness packed{' '}
                    <a className='readmore1' href='#'>
                      ..read more
                    </a>
                  </div>
                  <div className='price1'>
                    {' '}
                    <img src={rupee} alt='' />
                    199
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='Footer1'>
            <div id='Progress_Status1'>
              <div id='myprogressBar1'></div>
            </div>
            <footer>
              <div className='text1'>
                Your Menu is Here, Choose Your Food Which Suits Your Mood !
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserMenu
