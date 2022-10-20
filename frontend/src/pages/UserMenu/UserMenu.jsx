import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import './UserMenu.scss'
import food from './images/momos.png'
import dropDown from './images/icons8-chevron-24.png'
import searchicon from './images/icons8-search-30.png'
const UserMenu = () => {
  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='base'>
      <div className='UserMenu'>
        <div className='Title'>FOODZVILLA</div>
        <nav className='Navbar'>
          <div className='sort'>
            <div className='SortBy'>Sort By</div>
          </div>
          {/* <div className='SearchSection'>
            <img className='searchIcon' src={searchicon} alt='' />
          </div> */}
          <input
            type='text'
            placeholder='Search..'
            className='searchText'
            id=''
          />
        </nav>
        <div className='offer'>
          <div className='nameAndStars'>
            <div className='shopName'>Momo's Corner</div>
            <div className='Stars'>
              &#9733; &#9733; &#9733; &#9733; &#9734;{' '}
            </div>
          </div>

          <div className='contactAndBtn'>
            <div className='Contact'>
              +919876543210
              <br />
              xyz@gmail.com
            </div>
            <button className='todaysSpecial'>Today's Special</button>
          </div>
        </div>
        <hr />
        <div className='vegNonVeg'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
            alt=''
          />
        </div>

        <div className='items'>
          <div className='imgAndName'>
            <img src={food} alt='Mountain' className='images'></img>
            <div className='itemName'>
              Corn & Cheese Pan Tossed Momo
              <div className='descriptionPrice'>
                <div className='description'>
                  Delightful parcels of happiness packed..read more
                </div>
                <div className='price'>Rs.199</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='vegNonVeg'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
            alt=''
          />
        </div>

        <div className='items'>
          <div className='imgAndName'>
            <img src={food} alt='Mountain' className='images'></img>
            <div className='itemName'>
              Corn & Cheese Pan Tossed Momo
              <div className='descriptionPrice'>
                <div className='description'>
                  Delightful parcels of happiness packed..read more
                </div>
                <div className='price'>Rs.199</div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className='vegNonVeg'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/180px-Non_veg_symbol.svg.png'
            alt=''
          />
        </div>

        <div className='items'>
          <div className='imgAndName'>
            <img src={food} alt='Mountain' className='images'></img>
            <div className='itemName'>
              Chicken Peri Peri Pan Tossed Momo
              <div className='descriptionPrice'>
                <div className='description'>
                  Delightful parcels of happiness packed..read more
                </div>
                <div className='price'>Rs.199</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='vegNonVeg'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
            alt=''
          />
        </div>

        <div className='items'>
          <div className='imgAndName'>
            <img src={food} alt='Mountain' className='images'></img>
            <div className='itemName'>
              Corn & Cheese Pan Tossed Momo
              <div className='descriptionPrice'>
                <div className='description'>
                  Delightful parcels of happiness packed..read more
                </div>
                <div className='price'>Rs.199</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='vegNonVeg'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png'
            alt=''
          />
        </div>

        <div className='items'>
          <div className='imgAndName'>
            <img src={food} alt='Mountain' className='images'></img>
            <div className='itemName'>
              Corn & Cheese Pan Tossed Momo
              <div className='descriptionPrice'>
                <div className='description'>
                  Delightful parcels of happiness packed..read more
                </div>
                <div className='price'>Rs.199</div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className='Footer'>
          <div id='Progress_Status'>
            <div id='myprogressBar'></div>
          </div>
          <footer>
            <div className='text'>
              Your Menu is Here, Choose Your Food Which Suits Your Mood !
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
export default UserMenu
