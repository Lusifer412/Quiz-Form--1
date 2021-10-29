class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number 
   this.input2 = createInput("Enter Correct Option No...")
   


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.questions = createElement("h3")
    this.options1 = createElement("h4")
    this.options2 = createElement("h5")
    this.options3 = createElement("h6")
    this.options4 = createElement("h7")
    this.message = createElement("h2")

    
  }
  

  

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
  this.questions.html('Questions:- What starts and ends with the letter E but has only one letter?');
  this.options1.html('1: Everyone', '2: Envelope')
  this.options2.html('2: Envelope');
  this.options3.html('3: Estimate');
  this.options4.html('4: Example ')


    this.input1.position(150, 230);
    this.input2.position(550, 230);
    this.button.position(290, 300);
    this.questions.position(70, 70);
    this.options1.position(80, 100);
    this.options2.position(80, 120);
    this.options3.position(80, 140);
    this.options4.position(80, 180);
    this.message.position( 350, 350)
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html('Thank You , Your Answer Has Been Submitted....')       
    })


  }
}
