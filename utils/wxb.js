import wxb from 'wx-bridge'
import helpers from 'jt-helpers'

wxb.showToast = helpers.intercept(wxb.showToast, {
  req (options) {
    return !options.icon
      ? { ...options, icon: 'none' }
      : options
  }
})

export default wxb