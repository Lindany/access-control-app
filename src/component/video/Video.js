import ReactPlayer from 'react-player';
import React, { Component } from 'react'
import './Video.css';
import pretoriaTvbanner from '../../images/banner2.jpg';
import { Player } from 'video-react';

export default class Video extends Component {
    render () {
        return (
            <Player
              playsInline
              poster={pretoriaTvbanner}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          );
      }
}
