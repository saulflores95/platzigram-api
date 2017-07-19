export default {
  getImage () {
    return {
      id: 'cb0aa5ff-0da6-4335-84f8-ec24a2349a53',
      publicId: 'ywql/w2mQzWE+AAA7CSiNA',
      userId: 'Saulito',
      liked: false,
      likes: 0,
      src: 'https://s-media-cache-ak0.pinimg.com/564x/27/e0/91/27e0914112ef3d66678424e33325a0d3.jpg',
      description: '#awsome',
      tags: ['awsome'],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: 'e4b09ac3-4f01-45f7-881b-6bb3351d6b28',
      name: 'Saul Flores',
      username: 'saulpolo95',
      email: 'f@saul.test',
      password: 'pekub',
      createdAt: new Date().toString()
    }
  }
}
