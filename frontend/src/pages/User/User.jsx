import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import './User.scss'
import backImg from '../../assets/images/backBtn.png'
import dropDown from '../../assets/images/dropDown.png'
import shopImg from '../../assets/images/momos.png'
import redirectIcon from '../../assets/images/redirectIcon.png'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div className='shopRating'>Contact No.</div>
              </div>
            </div>
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
            </div>
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
            </div>
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
