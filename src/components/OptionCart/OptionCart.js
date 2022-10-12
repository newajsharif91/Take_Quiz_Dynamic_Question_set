import React from "react";
import './OptionCart.css';
import Swal from 'sweetalert2'

const OptionCart = ({ opti, correctAnswer }) => {

const handelForCorrect = () =>{
  if(opti === correctAnswer){
    Swal.fire(
      'Good job!',
      'Right Answer!',
      'success'
    )
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Wrong Answer',
      text: 'You Miss The Biriany!',
      footer: '<a href="">Keep Learning..</a>'
    })
  }
}


  return (
    <div className="p-4">
      <button onClick={handelForCorrect} className="active">
        <div className="flex items-center rounded-lg  border-2 lg:w-[400px] lg:h-20 md:w-100 md:h-20 p-3 w-55 h-50 border-indigo-600">
          {opti}
        </div>
      </button>
    </div>
  );
};

export default OptionCart;
