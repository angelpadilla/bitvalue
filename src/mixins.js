const mixins = {
  methods: {
    get_date(val) {
      let ddate = new Date(val)

      return `${ddate.getHours()}:${ddate.getMinutes()}:${ddate.getSeconds()}`
    }
  }
}

export default mixins
