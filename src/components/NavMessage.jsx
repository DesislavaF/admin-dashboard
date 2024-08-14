import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 3 new messagess
          <a href='#'>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        <li className='message-item'>
          <a href='#'>
            <img
              src="src/images/src/images/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=''
              className='rounded-circle'
            />
            <div>
              <h4>Ivan Ivanov</h4>
              <p>This task is urgent!</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        <li className='message-item'>
          <a href='#'>
            <img
              src="src/images/src/images/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=''
              className='rounded-circle'
            />
            <div>
              <h4>Ivan Ivanov</h4>
              <p>This task is urgent!</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        <li className='message-item'>
          <a href='#'>
            <img
              src="src/images/src/images/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=''
              className='rounded-circle'
            />
            <div>
              <h4>Ivan Ivanov</h4>
              <p>This task is urgent!</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        <li className='dropdown-footer'>
          <a href='#'>Show all messages</a>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage