// var http = require('http')

// var server = http.createServer(function(req, res){
//   res.end('ff\n')
// })

// server.listen(3000, function () { 
//   console.log('The Server is listening on port 3000 now')
//  })
function clearField(){
  document.getElementById('fn').value=""
  document.getElementById('em').value=""
}

const app = new Vue({
  el: '#event',
  data() {
    return {
      fullname: '',
      email: '',
      users: [],
      emails: [],
      btn: false,
      toggle: false,
      buttonValue: 'Hide List',
    }
  },
  methods: {
    addName(event){
      this.fullname = event.target.value
      
    },
    addEmail(event){
      this.email = event.target.value
      
    },
    addUser(){
      this.btn = true
      this.users.push(this.fullname)
      this.fullname = ''
      this.email = ''
    },
    toggleBtn(){
      this.toggle = !this.toggle

      if(this.toggle === true){
        this.buttonValue = 'Show List'
      }else{
        this.buttonValue = 'Hide List'
      }
    },
    removeBtn(idx){
      this.users.splice(idx, 1)
    }
  }
})