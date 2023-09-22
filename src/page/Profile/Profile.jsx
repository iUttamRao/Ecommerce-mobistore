import { useDispatch, useSelector } from 'react-redux';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import { ORDERS } from '../../router/keys';
import { useState } from 'react';
import { renameName } from '../../redux/reducer/ecomReducer';
import { Navbar } from '../../component';

const Profile = () => {
  const {user} = useSelector(state=>state.ecom)
  const [isEnable,setIsEnable] = useState(true);
  const [name,setName] = useState(user.name);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleOrder = () =>{
    navigate(ORDERS);
  }
  const handleEdit =(param=false)=>{
    setIsEnable(param)
  }
  const handleSave =() =>{
    dispatch(renameName(name))
    handleEdit(true)
  }
  return (
    <>
    <Navbar />
    <div className='profile'>
      <h2>User Profile</h2>
      <div className='user-data'>
         {/* <p><span>Name :</span>{user.name}</p> */}
         <p><span>Name :</span><input type="text" placeholder={name} disabled ={isEnable} onChange={(e)=>setName(e.target.value)}/></p>
         {isEnable ? (<button onClick={()=>handleEdit()}>Edit Name</button>) :(<button onClick={()=>handleSave()}>Save</button>)}
         <p><span>Email :</span>{user.email}</p>
         <p><span>Mobile :</span>{user.mobile}</p>
         <p><span>Address :</span>{user.address}</p>
      </div>
      <button onClick={handleOrder}>Order History</button>
    </div>
    </>
  );
};

export default Profile;
