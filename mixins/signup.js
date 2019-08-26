export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  methods: {
    validateEmail(e) {
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (!e.target.value.match(mailformat)) {
        this.message = 'invalid Email address*'
      } else {
        this.message = ''
      }
    },
    async register() {
      if (!this.message && this.email) {
        const messageRef = this.$fireStore.collection('beta-users')
        try {
          await messageRef.add({
            email: this.email
          })
        } catch (e) {
          return
        }
        await this.$swal.fire({
          title: 'We have recieved your request!',
          text: 'Thank you for your patience',
          type: 'success',
          backdrop: `
           rgba(0,0,123,0.4)
           url('https://sweetalert2.github.io/images/nyan-cat.gif')
           center left
           no-repeat
         `
        })
        this.email = ''
      }
    }
  }
}
