import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/user/userSlice';
import { AiFillGoogleCircle } from 'react-icons/ai';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleGoogleClick = async()=>{
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);

          const result = await signInWithPopup(auth, provider);
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
          });
          const data = await res.json();
          dispatch(signInSuccess(data))
          console.log(data);
          navigate('/');
        } catch (error) {
            console.log('could not login with google', error);
        }
    }

  return (
    <button
    type='button'
    onClick={handleGoogleClick}
    className='bg-red-700 text-white rounded-lg p-3 flex items-center  justify-center center uppercase hover:opacity-95'
  ><AiFillGoogleCircle className='w-6 h-6 mr-2'/>
    Continue with google
  </button>
  )
}

export default OAuth