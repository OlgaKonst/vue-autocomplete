 clearAutocomplete() {
      this.displayDiv = {
        display: 'none'
      } 
      this.items.splice(0,this.items.length);
      console.log('this.items', this.items)
    },
    onFocus() {   
    
      this.getItems(this.inputval)
      .then(data => {this.items = [].concat(data); if(this.item) {
        this.displayDiv.display = 'block';
      }})
    }


    computed: {
    displayDiv() {
      if(this.items.length) {
         this.displayDiv.display = 'block';
         this.displayDiv.padding = '3px';
      } else {
         this.displayDiv.display = 'none';
         this.displayDiv.padding = '0px';
      }
    }
  }

 displayDiv: {
        display: 'none',
        padding: '0px'
      } 


$("#send1").keypress(function () {
    $('#answer1').val(this.value * 20);
});

$(document).ready(function(){
    
    var rezSend1=document.getElementById('send1').value;
    var rezSend1End =  rezSend1*20;
    
    $('#send1').blur(function(){
    
    document.getElementById('answer1').value = rezSend1End;
    
    });
    ------------------------
        onClick(item) {
      this.inputval = item.currency;
      this.$emit('input', this.inputval);
      this.items.splice(0,this.items.length);
      this.displayDiv.display = 'none';
      this.displayDiv.padding = '0px';
    },
    onInput(e) {     
      this.getItems(this.inputval)
      .then(data => {
         let arr = data.map((item) => this.func(item));
         this.items = [].concat(arr);
         this.displayDiv.display = 'block';
         this.displayDiv.padding = '3px';
        })
      .then(() => {this.$emit('input', this.inputval)})
      
    }


<span v-html="item.template"></span>

 return Object.assign({}, val, {template: `<b>${val.currency}</b> (баланс: ${val.balance})`}) 

  if(typeof item === 'object') {
        this.inputval = item.currency;
      } else {
        this.inputval = item;
      }    


      :func="customizeAutocomplete"