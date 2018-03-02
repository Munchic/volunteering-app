import colors from '../../../parameters/colors/colors'

export default styles = {
  eventCard: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '100%',
    height: 256,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eventImage: {
    width: '90%',
    height: '80%',
    top: 0,
    borderRadius: 8,
    marginBottom: 8,
  },

  floatingInfo1: {
    position: 'absolute',
    zIndex: 2,
    top: 8,
    left: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  
  floatingInfo2: {
    position: 'absolute',
    zIndex: 2,
    top: 8,
    right: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  floatingInfo3: {
    position: 'absolute',
    zIndex: 2,
    bottom: 64,
    left: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  text: {
    title: {
      fontWeight: 'bold',
      fontSize: 16
    },

    description: {
      color: 'gray'
    },
  },

  status: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: 'rgb(100, 100, 100)'
  }
}
