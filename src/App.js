import './App.css';
import Card from './Card.js';



function App() {
  let CardInfo=[
    {
      plan : "BASIC",
      members :" For Team of 3-5 Members",
      price : 19 ,
      saves : " $20 ",
      features : [
        {content : "Perfect of Small Team",
          enable : true },
        {content : "Unlimited Invoices",
        enable : true },
        {content : "Project Management",
        enable : true },
        {content : "Team Management",
        enable : false },
        {content : "Time Tracking",
        enable : false }
      ]

    },
    { 
      popular : true ,
      plan : "INTERMEDIATE",
    members :" For Team of 5-10 Members",
    price : 29 ,
    saves : " $30 ",
    features : [
      {content : "Perfect of Small Team",
        enable : true },
      {content : "Unlimited Invoices",
      enable : true },
      {content : "Project Management",
      enable : true },
      {content : "Team Management",
      enable : true },
      {content : "Time Tracking",
      enable : false }
    ]
    },
    {
       plan : "HIGH CLASS",
    members :" For Team of 10-25 Members",
    price : 49 ,
    saves : "$50",
    features : [
      {content : "Perfect of Small Team",
        enable : true },
      {content : "Unlimited Invoices",
      enable : true },
      {content : "Project Management",
      enable : true },
      {content : "Team Management",
      enable : true },
      {content : "Time Tracking",
      enable : true }
    ]
    },
    { 
      plan : "SUPREME",
    members :" For Team of 25-100 Members",
    price : 99 ,
    saves : " $80 ",
    features : [
      {content : "Perfect of Small Team",
        enable : true },
      {content : "Unlimited Invoices",
      enable : true },
      {content : "Project Management",
      enable : true },
      {content : "Team Management",
      enable : true },
      {content : "Time Tracking",
      enable : true }
    ]
    }
  ]
  return (      
  <div class="pricing1 py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
        <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
        <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
          <span class="font-14 font-weight-medium">MONTHLY</span>
          <div class="onoffswitch position-relative mx-2">
            <input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox d-none" id="myonoffswitch1"/>
            <label class="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
                            <span class="onoffswitch-inner d-block"></span>
                            <span class="onoffswitch-switch d-block bg-white position-absolute"></span>
                        </label>
          </div>
          <span class="font-14 font-weight-medium">YEARLY</span>
        </div>
      </div>
    </div>
    <div class="row mt-5">
  
  
   
   
    {
  CardInfo.map((obj)=>{
  return <Card Data={obj}></Card>})
}
  
  
    
       
     
    </div>
    </div>
    </div>
  
    
  );
}

export default App;
