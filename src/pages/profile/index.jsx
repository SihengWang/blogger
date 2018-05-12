import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import {siteMetadata} from '../../../gatsby-config'

class Profile extends React.Component {
  render() {
    const pathPrefix = process.env.NODE_ENV === 'development'
      ? ''
      : __PATH_PREFIX__
    const title = 'Profile'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
          {
            name: 'twitter:card',
            content: 'summary'
          }, {
            name: 'twitter:site',
            content: `@${get(siteMetadata, 'twitter')}`
          }, {
            property: 'og:title',
            content: title
          }, {
            property: 'og:type',
            content: 'website'
          }, {
            property: 'og:description',
            content: get(siteMetadata, 'description')
          }, {
            property: 'og:url',
            content: `${get(siteMetadata, 'siteUrl')}/profile`
          }, {
            property: 'og:image',
            content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpg`
          }
        ]}/>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              alt="siheng"
              className="rounded-circle mx-auto d-block"
              width="120px"/>
            <h1>Siheng Wang</h1>
            <p className="lead text-muted">谱写程序的伪极客</p>
            {/* <div>
              <a
                ref="twButton"
                href="https://twitter.com/jaxx2104"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @jaxx2104
              </a>
            </div> */}
          </div>
        </section>
        {/* html, css, js, java, ts, android, vue, react, docker,  */}
        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKIL</h2>
                <hr className="border-white"/>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML">
                  <i className="devicon-html5-plain " data-emergence="hidden"/>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript">
                  <i className="devicon-javascript-plain" data-emergence="hidden"/>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js">
                  <i className="devicon-react-original" data-emergence="hidden"/>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Vue.js">
                  <i className="devicon-vuejs-plain" data-emergence="hidden"/>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Java">
                  <i className="devicon-java-plain" data-emergence="hidden"/>
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Docker">
                  <i className="devicon-docker-plain" data-emergence="hidden"/>
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Android">
                  <i className="devicon-android-plain" data-emergence="hidden"/>
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="MySQL">
                  <i
                    className="devicon-mysql-plain"
                    data-emergence="hidden"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Features</h2>
                <hr className="border-primary"/>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p>
                  建设中
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary text-white text-center color-inverse"
          id="concept">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">WORKS</h2>
                <hr className="border-white"/>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <p>建设中</p>
              {/* <div className="col-md-6 slide-left" data-emergence="hidden">
                <img
                  src={pathPrefix + '/img/work1.png'}
                  alt="work1"
                  className="rounded-circle mx-auto"/>
                <p>Yomu</p>
              </div>
              <div className="col-md-6 slide-right" data-emergence="hidden">
                <img
                  src={pathPrefix + '/img/work2.png'}
                  alt="work2"
                  className="rounded-circle mx-auto"/>
                <p>Detector</p>
              </div> */}
            </div>
          </div>
        </section>

        <section id="repos">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <h2 className="section-heading">Repositories</h2>
              </div>
              <div className="col-md-6 text-left">
                <li>
                  建设中
                </li>
                {/* <li>
                  <a href="https://github.com/jaxx2104/gulp-sample">
                    gulp-sample
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/irm">irm</a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/mt-dataapi-php">
                    mt-dataapi-php
                  </a>
                </li> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
