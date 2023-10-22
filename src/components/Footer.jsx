import React, { Component } from 'react'
import '../MyCss/MyCustomStylesheet.css'
import avatarImg from '../avatars.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as fa from '@fortawesome/free-solid-svg-icons'
// import * as fab from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
  render() {
    return (
      <footer className='w-100 tealBG text-light '>
        <div className="container py-4">
          <div className="row py-5">
            <div className="col-md-4 text-center">
              <h2>React Team members</h2>
              <table className='myTable'>
                <tr>
                  <td>Noureldin Ahmed</td>
                  <td>Passant</td>
                </tr>
                <tr>
                  <td>Fatima</td>
                  <td>Mohamed hamdy</td>
                </tr>
                <tr>
                  <td>Mohammed ramadan</td>
                  <td>Ahmed Bayoumy</td>
                </tr>
              </table>
            </div>
            <div className="col-md-4 text-center">
              <h2 >AI team members</h2>
              <p>Samy ahmed</p>
              <p>Noureldin ahmed (tiny help)</p>
            </div>
            <div className="col-md-4 text-center">
              <h2>SUPER VISION</h2>
              <p>DR. Marwa Enany</p>
            </div>
          </div>
        </div>
        <div className="DarktealBG text-center py-3">
          Copyright © Team 2023
        </div>

      </footer>
    )
  }
}
