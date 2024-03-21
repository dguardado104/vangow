import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL_API

const createSession = async (data) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/login`,
      data: {
        "user": {
          "login_type": "email",
          "recipient": data.email,
          "send_notifications": true,
          "platform": "web",
          "device_id": "",
          "device_name": "",
          "autofill_hash": "",
          "expiration": 380
        }
      }
    })
    const { attributes } = response.data.data

    const session = {
      tk: attributes.token,
      exp: attributes.expires_at
    }

    switch (attributes.metadata.action) {
      case 'signup':
        localStorage.setItem('vangowSession', JSON.stringify(session))
        break
      case 'login':
        localStorage.setItem('vangowSession', JSON.stringify(session))
        break
    }

    return session.tk
  } catch (error) {
    console.error(error)
    throw error
  }
}

const verifyOpt = async (data) => {

  try {

    const session = JSON.parse(localStorage.getItem('vangowSession'))

    const response = await axios({
      method: 'post',
      url: `${baseUrl}/login/verify`,
      data: {
        "otp": {
          "code": data,
          "token": session.tk
        }
      }
    })

    const { attributes } = response.data.data

    localStorage.setItem('vangowSession', JSON.stringify(attributes))

    return true

  } catch (error) {
    console.error(error)
    throw error
  }

}

const destroySession = async () => {

  try {

    const session = JSON.parse(localStorage.getItem('vangowSession'))

    const response = await axios({
      method: 'post',
      url: `${baseUrl}/login/logout`,
      headers: {
        Authorization: `Bearer ${session.jwt}`
      }
    })

    console.log(response);
    localStorage.removeItem('vangowSession')

    return true

  } catch (error) {
    console.error(error)
    throw error
  }

}

const resendOtp = async () => {

  const session = JSON.parse(localStorage.getItem('vangowSession'))

  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/login/resend`,
      data: {
        "otp": {
          "token": session.tk
        }
      }
    })

    const { attributes } = response.data.data

    localStorage.setItem('vangowSession', JSON.stringify(attributes))

    return true

  } catch (error) {
    console.error(error)
    throw error
  }
}

export default { createSession, verifyOpt, resendOtp, destroySession }