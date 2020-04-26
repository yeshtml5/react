/**
 * @tutorial https://webrtc.github.io/samples/ , https://github.com/webrtc/samples/tree/gh-pages/src/content
 */
import React, {useEffect} from 'react'
//webRTC
import adapter from 'webrtc-adapter'

const WebRTC = () => {
  //---------------------------------------
  //browserDetails
  console.log(adapter.browserDetails)
  const constraints = (window.constraints = {audio: true, video: true})
  async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      console.log(stream)
      handleSuccess(stream)
      e.target.disabled = true
    } catch (e) {
      handleError(e)
    }
  }
  function errorMsg(msg, error) {
    console.log(msg)
    console.log(error)
    return
    const errorElement = document.querySelector('#errorMsg')
    errorElement.innerHTML += `<p>${msg}</p>`
    if (typeof error !== 'undefined') {
      console.error(error)
    }
  }
  function handleSuccess(stream) {
    const video = document.querySelector('video')
    const videoTracks = stream.getVideoTracks()
    console.log('Got stream with constraints:', constraints)
    console.log(`Using video device: ${videoTracks[0].label}`)
    window.stream = stream // make variable available to browser console
    video.srcObject = stream
  }

  function handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      const v = constraints.video
      errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`)
    } else if (error.name === 'PermissionDeniedError') {
      errorMsg('Permissions have not been granted to use your camera and ' + 'microphone, you need to allow the page access to your devices in ' + 'order for the demo to work.')
    }
    errorMsg(`getUserMedia error: ${error.name}`, error)
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <React.Fragment>
      <h1>{adapter.browserDetails.browser}</h1>
      <video id="gum-local" autoPlay playsInline></video>
      <div>
        <button
          onClick={() => {
            alert('1')
          }}>
          Open camera
        </button>
      </div>
    </React.Fragment>
  )
}
export default WebRTC
