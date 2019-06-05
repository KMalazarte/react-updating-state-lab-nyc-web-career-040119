import React from 'react'

class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrate = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution {this.state.settings.resolution}</button>
      </div>
    )
  }

}

export default YouTubeDebugger
