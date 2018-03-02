import colors from '../parameters/colors/colors'

const resizeMode = 'cover'

export default styles = {
  statusBar: {
    position: 'absolute',
    width: '100%',
    height: 20,
  },

  container: {
    flex: 1,
    width: 380,
    backgroundColor: colors.hsvBackground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  logo: {
    fontSize: 64,
    marginBottom: 32,
    color: 'white'
  },

  background: {
    position: 'absolute',
    height: '100%'
  }
}