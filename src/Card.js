import './Card.css' ;

export default function Card(props){
    return (
            
              <div class="col-lg-3 col-md-6">
        <div class="card text-center card-shadow on-hover border-0 mb-4">
          <div class="card-body font-14"></div>
            <h5 class="mt-3 mb-1 font-weight-medium">{props.Data.plan}</h5>
            <h6 class="subtitle font-weight-normal">{props.Data.members}</h6>
            <div class="pricing my-3">
            {
              props.Data.features.map((obj)=>{
              if(props.Data.popular){
                return <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span>
                }
              })
              }
          
              <sup>$</sup>
              <span class="monthly display-5">{props.Data.price}</span>
          
              <span class="yearly display-5">240</span>
              <small class="monthly">/mo</small>
              <small class="yearly">/yr</small>
              <span class="d-block">Save <span class="font-weight-medium">{props.Data.saves}</span> a Year</span>
            </div>
           
             <ul class="list-inline">
             {
            props.Data.features.map((obj)=>{
              if(obj.enable){
                return  <li class="d-block py-2">{obj.content}</li>
              }
              else{
                return <li class="d-block py-2">&nbsp;</li>
              }
            })
            } 
            </ul> 
            <div class="bottom-btn">
              <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
            </div>
            </div>
        </div>
      
     
    
    )
}