import React from 'react';

export default () => {
  return (
    <footer className="footer bg-dark">
      <div className="container pt-2">
        <div className="row">
          <div className="mb-1 mb-md-0 col-md-4">
            <h4 className="footer-header">Resources</h4>
            <ul className="list-unstyled footer-links resources">
              <li>
                <a href="/" className="link active">Posts</a>
              </li>
              <li>
                <a href="/organizations" className="link">
                  Organizations
                </a>
              </li>
              <li>
                <a href="/questions" className="link">
                  Questions
                </a>
              </li>
              <li>
                <a href="/tags" className="link">
                  Tags
                </a>
              </li>
              <li>
                <a href="/videos" className="link">
                  Videos
                </a>
              </li>
              <li>
                <a href="/authors" className="link">
                  Authors
                </a>
              </li>
              <li>
                <a href="/discussion" className="link">
                  Discussions
                </a>
              </li>
              <li>
                <a href="/explore" className="link">
                  Recommend System
                </a>
              </li>
              <li>
                <a href="/tools" target="_blank" rel="noopener" className="link">Tools</a>
              </li>
              <li>
                <a href="https://machine-learning.viblo.asia/" target="_blank" rel="noopener" className="link">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="https://status.viblo.asia" target="_blank" rel="noopener" className="link">System
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-1 mb-md-0 col-md-3 offset-xl-1">
            <h4 className="footer-header">
              Services
            </h4>
            <ul className="d-block list-unstyled footer-links service-badges">
              <li className="footer-links-external-link mb-3">
                <a href="https://code.viblo.asia" target="_blank"
                   rel="noopener" className="link">
                  <img
                    src="https://viblo.asia/images/viblo-code.svg" alt="Viblo CV" className="link-icon"/>
                  Viblo Code
                </a>
              </li>
              <li className="footer-links-external-link mb-3">
                <a href="https://cv.viblo.asia" target="_blank" rel="noopener" className="link">
                  <img src="https://viblo.asia/images/viblo-cv.svg" alt="Viblo CV" className="link-icon"/>
                  Viblo CV
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-1 mb-md-0 col-md-3 offset-md-1">
            <h4 className="footer-header">
              Mobile App
            </h4>
            <div className="d-flex mobile-app-badges mb-05">
              <div className="d-flex flex-md-column justify-content-between flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.framgia.viblo.android.prod"
                  target="_blank"
                  rel="noopener" className="d-block">
                  <img alt="Get it on Google Play"
                       src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                       className="play-store-badge"/>
                </a>
                <a
                  href="https://itunes.apple.com/us/app/viblo/id1365286437" target="_blank" rel="noopener"
                  className="d-block">
                  <img alt="Download on the App Store"
                       src="https://cdn.viblo.asia/_nuxt/img/2928664.svg"
                       className="app-store-badge"/>
                </a>
              </div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAIAAAAkfEPpAAACEklEQVR42u3aUY6DMAwFQO5/6e4JKhXF7yUL488KBZhEcm1zfUQ9LgTQoYsC+hWIb+t/faCb19x9hp9Q0g7QoUOHXkZfShRDL/wLxMp9p9a5vT506NChb0RPJ8yVNaeSc9MBOnTo0N+CvgKdKI6gQ4cOHfoMysrzJBpz0KFDh/4E9EQimmqcJYqmR3UZoUOHDn1jgjrt98d+DQAdOvTHozcjsZGJxlzk3aFDhw69jN5Mqol10odjrDiCDh069DL6yjXpYfTUvarFIHTo0KEX0KcGAlMD6MSgIz0Qv10cQYcOHXoBfaphlG5UNRPs2AGFDh069I3oTaxE46xZfI19DQAdOnTog+iJwmQlwSaKo+ahgQ4dOvTT0acKimaynTpMS4cAOnTo0AvozRdrbmT6cNz+EwEdOnToG9F3DSjSSb45DIEOHTr0NnpiEJwoRtKIiaEKdOjQoZ+Inn7QxMZMDVjGng06dOjQD0FPFDVTiTqNODU0hw4dOvRT0CMNoOKHPitF1timQocOHXoBPR1TELuG6ZGGF3To0KEXvk+fiubQ+YRCb+nfC3To0KGH0BMJMz3QmDociQIQOnTo0E9BTyfM9NAg0fBa2jzo0KFDfxj6rmsSGwkdOnTob0dPI6Ybdo8qjqBDh/4q9PRgYaqQSQ/QoUOHDv2/oqcbQFPJNp14E4cJOnTo0BvoohPQoUMXofgD+J8kMHoXlkcAAAAASUVORK5CYII="
                alt="QR code" className="qr d-none d-lg-block"/>
            </div>
            <h4 className="footer-header">
              Links
            </h4>
            <ul className="list-unstyled footer-social-links">
              <li className="footer-social-links-external-link">
                <a href="https://www.facebook.com/viblo.asia/"
                   target="_blank" rel="noopener"
                   className="link">
                  <i className="fa fa-facebook link-icon"/>
                </a>
              </li>
              <li className="footer-social-links-external-link">
                <a href="https://github.com/viblo-asia/"
                   target="_blank" rel="noopener"
                   className="link">
                  <i className="fa fa-github link-icon"/>
                </a>
              </li>
              <li className="footer-social-links-external-link">
                <a
                  href="https://chrome.google.com/webstore/detail/viblos-news-feed/mliahmjgdpkkicelofhbhgiidgljijmj"
                  target="_blank" rel="noopener" className="link"><i className="fa fa-chrome link-icon"/>
                </a>
              </li>
              <li className="footer-social-links-external-link">
                <a
                  href="https://atom.io/packages/viblo"
                  target="_blank"
                  rel="noopener"
                  className="link"
                >
                  <img
                    src="https://viblo.asia/images/atom-editor.svg" alt="Atom Icon" className="link-icon"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider"/>
        <div className="row py-3">
          <div className="col-xs-12 col-sm-6 col-lg-7 col-xl-8">
            <p className="copyright">
              © 2019
              <b>&nbsp; Viblo</b>. All rights reserved.
            </p>
          </div>
          <div className="d-md-block d-none col-xs-12 col-sm-6 col-lg-5 col-xl-4">
            <ul className="list-unstyled d-flex justify-content-between flex-wrap">
              <li className="mb-3">
                <a href="/feedback" className="link">Feedback</a>
              </li>
              <li className="mb-3">
                <a href="/helps" className="link">
                  Help
                </a>
              </li>
              <li className="mb-3">
                <a href="/faq" className="link">
                  FAQs
                </a>
              </li>
              <li className="mb-3">
                <a href="/rss" target="_blank" rel="noopener" className="link">RSS</a>
              </li>
              <li className="mb-3">
                <a href="/terms" className="link">
                  Terms
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://www.dmca.com/Protection/Status.aspx?ID=41818fcd-5a60-4504-867a-38fde606354e&refurl=https://viblo.asia/followings"
                  title="DMCA.com Protection Status"
                  target="_blank"
                  rel="noopener"
                  className="link dmca-badge"
                >
                  <img
                    src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-07.png?ID=41818fcd-5a60-4504-867a-38fde606354e"
                    alt="DMCA.com Protection Status"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
