import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import './UserMenu.scss'
import backImg from '../../assets/images/backBtn.png'
import dropDown from '../../assets/images/dropDown.png'
import shopImg from '../../assets/images/momos.png'
import redirectIcon from '../../assets/images/redirectIcon.png'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterImg from './images/filter.png'
import type from './images/search.png'
import toggleBtn from './images/toggle.png'

function User() {
  const [dropdownState, setDropdownState] = useState(false)

  const [searchVal, setSearchVal] = React.useState('')

  const handleInput = (e) => {
    setSearchVal(e.target.value)
  }

  const handleClearBtn = () => {
    setSearchVal('')
  }

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='userContainer'>
      <div className='min-h-screen items-center mainScreen'>
        <div className='backBtn'>
          <img className='ml-auto' src={backImg} alt='' />
        </div>
        <div className='shopTitle items-center'>
          <p>Foodzvilla</p>
        </div>
        <div className='topPart'>

        <div className='headerPart flex items-center '>
          <div className='searchBar'>
             <input type="text" placeholder='search'/>
          </div>
          <div className='filter'>
            <img className='filterImg' src={filterImg} alt=""/>
          </div>
        </div>

        <div className='categoryPart flex'>
            <div className='categoryContainer'>
              <div className='categoryImg'>
                <img src={shopImg} alt="" />
              </div>
              <div className='categoryName'>
                abc
              </div>
            </div>
            <div className='categoryContainer'>
              <div className='categoryImg'>
                <img src={shopImg} alt="" />
              </div>
              <div className='categoryName'>
                xyz
              </div>
            </div>
            <div className='categoryContainer'>
              <div className='categoryImg'>
                <img src={shopImg} alt="" />
              </div>
              <div className='categoryName'>
                mno
              </div>
            </div>
            <div className='categoryContainer'>
              <div className='categoryImg'>
                <img src={shopImg} alt="" />
              </div>
              <div className='categoryName'>
                pqr
              </div>
            </div>
            <div className='categoryContainer'>
              <div className='categoryImg'>
                <img src={shopImg} alt="" />
              </div>
              <div className='categoryName'>
                pqr
              </div>
            </div>
            <div className='categoryContainer'>
              <div className='categoryImg'>
                <img src={shopImg} alt="" />
              </div>
              <div className='categoryName'>
                pqr
              </div>
            </div>
        </div>

        <div className='toggle'>
          <img className='toggleBtn' src={toggleBtn} alt=""/>
        </div>

        </div>

        <div className='userBody'>
          <div>
            <div className='shopContainer flex'>
              <div className='typeImg'>
                <img src={type} alt=""/>
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Title</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className='price'>
                <div className='priceVal'>
                  Rs.100
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='typeImg'>
                <img src={type} alt=""/>
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Title</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className='price'>
                <div className='priceVal'>
                  Rs.100
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='typeImg'>
                <img src={type} alt=""/>
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Title</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className='price'>
                <div className='priceVal'>
                  Rs.100
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='typeImg'>
                <img src={type} alt=""/>
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Title</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className='price'>
                <div className='priceVal'>
                  Rs.100
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='typeImg'>
                <img src={type} alt=""/>
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Title</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className='price'>
                <div className='priceVal'>
                  Rs.100
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='progressBar'>
          <div className='container'>
            <p>Footer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
