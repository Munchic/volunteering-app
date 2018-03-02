import colors from '../../parameters/colors/colors'

export default styles = {
  loginForm: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    backgroundColor: 'white',
    padding: 8,
    height: 32,
    width: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5722',
    marginBottom: 8
  },

  loginButton: {
    backgroundColor: colors.hsvMain,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 240,
    borderRadius: 8,
    marginTop: 8,
  },

  loginText: {
    color: 'white',
  }
}