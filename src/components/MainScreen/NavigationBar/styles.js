import colors from '../../parameters/colors/colors'

export default styles = {
  navigationBar: {
    height: 42,
    width: 380,
    bottom: 0,
    backgroundColor: colors.hsvMain,
    shadowOffset: {height: -3},
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 3,

    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
  }
}