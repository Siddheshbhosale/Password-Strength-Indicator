import React from 'react'
import zxcvbn from 'zxcvbn'


const Passwordstrength = ({password}) => {

    const test = zxcvbn(password);
   // const num = test.score* 100/4 ;
    
    const changeColour=(temp)=>{
       if(temp<=test.score){
        switch(test.score){
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00'; 
            case 3:
                return '#9b1158';
            case 4:
                return '#00b501';
        }}
        else{
            return 'none';
        }
    }

    const changepassword = (value) =>({
        width:'24%',
        border: '0.2px solid black',
        borderRadius:'25px',
        background: changeColour(value),
        height:'10px'
    })
    
    const indicator=()=>{
        switch(test.score){
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fear';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
        }
    }
    

    return (
        <div>
            <div className="progress d-flex justify-content-between " style={{height: '10px',backgroundColor:'white'}}>
                <div className="progress-bar"  style={changepassword(1)}></div>
                <div className="progress-bar"  style={changepassword(2)}></div>
                <div className="progress-bar"  style={changepassword(3)}></div>
                <div className="progress-bar"  style={changepassword(4)}></div>
            </div>
            <p style={{textAlign:'right',fontSize:20,color:changeColour(test.score)}}>{indicator()}</p>
        </div>
    )
}

export default Passwordstrength
