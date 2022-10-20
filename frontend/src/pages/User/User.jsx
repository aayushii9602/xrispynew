import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import './User.scss'
import backImg from '../../assets/images/backBtn.png'
import dropDown from '../../assets/images/dropDown.png'
import shopImg from '../../assets/images/momos.png'
import redirectIcon from '../../assets/images/redirectIcon.png'
import { useState } from 'react'

function User() {
  const [dropdownState, setDropdownState] = useState(false)
  const [dropdownValue, setDropdownValue] = useState('')

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState)
  }
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value)
    setDropdownState(!dropdownState)
  }

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

  const options = ['Veg', 'Non-Veg', 'Cafe', 'Snack']
  return (
    <div className='userContainer'>
      <div className='min-h-screen items-center mainScreen'>
        <div className='backBtn'>
          <img className='ml-auto' src={backImg} alt='' />
        </div>
        <div className='shopTitle items-center'>
          <p>Foodzvilla</p>
        </div>
        <div className='filterSection flex'>
          {/* <div className='sortDropDown rounded-xl'>
                        <p>Sort</p>
                        <img className='dropDownIcon ml-auto' src={dropDown} alt="" />
                    </div> */}
          <button onClick={handleDropdownClick} className='dropdown-btn'>
            {dropdownValue === '' ? 'Dropdown' : dropdownValue}
          </button>

          {/* Dropdown section  */}

          {/* <div
                        className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"
                            }`}
                    >
                        <div className="dropdown-item">
                            <div
                                className="dropdown__link"
                                onClick={() => handleSetDropdownValue("value 01")}
                            >
                                Item 01
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <div
                                className="dropdown__link"
                                onClick={() => handleSetDropdownValue("value 02")}
                            >
                                Item 02
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <div
                                className="dropdown__link"
                                onClick={() => handleSetDropdownValue("value 03")}
                            >
                                Item 03
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <div
                                className="dropdown__link"
                                onClick={() => handleSetDropdownValue("value 04")}
                            >
                                Item 04
                            </div>
                        </div>
                    </div> */}
          <div className='search-bar'>
            <div className='input-wrap'>
              <i className='fas fa-search'></i>
              <input
                onChange={handleInput}
                value={searchVal}
                type='text'
                name='product-search'
                id='product-search'
                placeholder='Search Products'
              />
            </div>
          </div>
        </div>
        <div className='userBody'>
          <div>
            <div className='shopContainer flex'>
              <div className='shopImage'>
                <img src={shopImg} alt='' />
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Momo's Corner</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, et!
                  </p>
                </div>
                <div className='shopRating'>Rating</div>
              </div>
              <div className='redirectingIcon'>
                <img src={redirectIcon} alt='' />
              </div>
            </div>
            <hr className='horLine' />
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='shopImage'>
                <img src={shopImg} alt='' />
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Momo's Corner</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, et!
                  </p>
                </div>
                <div className='shopRating'>Rating</div>
              </div>
              <div className='redirectingIcon'>
                <img src={redirectIcon} alt='' />
              </div>
            </div>
            <hr className='horLine' />
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='shopImage'>
                <img src={shopImg} alt='' />
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Momo's Corner</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, et!
                  </p>
                </div>
                <div className='shopRating'>Rating</div>
              </div>
              <div className='redirectingIcon'>
                <img src={redirectIcon} alt='' />
              </div>
            </div>
            <hr className='horLine' />
          </div>
          <div>
            <div className='shopContainer flex'>
              <div className='shopImage'>
                <img src={shopImg} alt='' />
              </div>
              <div className='shopDetail'>
                <div className='Title'>
                  <p>Momo's Corner</p>
                </div>
                <div className='shopContact'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, et!
                  </p>
                </div>
                <div className='shopRating'>Rating</div>
              </div>
              <div className='redirectingIcon'>
                <img src={redirectIcon} alt='' />
              </div>
            </div>
            <hr className='horLine' />
          </div>
        </div>
        <div className='progressBar'>
          <div className='container'>
            <progress
              id='progress-status'
              className='w-[90%] px-5 mt-1'
              max='100'
              value='70'
            >
              {' '}
              70%{' '}
            </progress>
            <p>Hello I am a qwertyuiop</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
