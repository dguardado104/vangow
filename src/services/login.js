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
    console.error('Error al crear sesión:', error)
    throw error
  }
}


export default { createSession }