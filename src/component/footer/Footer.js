import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faWhatsapp,
    faSkype
  } from "@fortawesome/free-brands-svg-icons";
  import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
  <a href="https://twitter.com/pretoriatv?lang=en" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
 <a
  href="https://web.facebook.com/PretoriaTV"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a
  href="https://www.instagram.com/pretoria_insta/"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>

<a
  href="https://www.youtube.com/channel/UC-J0sdaVw2WLIpfZi75Ua7A"
  className="youtube social"
>
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>

<a
  href="https://www.youtube.com/channel/UC-J0sdaVw2WLIpfZi75Ua7A"
  className="linkedin social"
>
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>

<a
  href="https://www.youtube.com/channel/UC-J0sdaVw2WLIpfZi75Ua7A"
  className="whatsapp social"
>
  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
</a>

<a
  href="https://www.youtube.com/channel/UC-J0sdaVw2WLIpfZi75Ua7A"
  className="skype social"
>
  <FontAwesomeIcon icon={faSkype} size="2x" />
</a>
            </div>
        )
    }
}
