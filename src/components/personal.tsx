import {ProfileContext} from '../context/profile-Context'
import {useContext} from 'react'
import {useDropzone} from 'react-dropzone'

export function Personal() {

    const onDrop = (files: File[])=>{
        console.log(files[0]?.name)
    }

    const {setprofileDetails, profileDetails} = useContext(ProfileContext)
    const {getInputProps, getRootProps, isDragActive} = useDropzone({onDrop})



  return (
    <div className="flex flex-col gap-5 p-10 border rounded-md" >
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Profile Details</h2>
        <p className="text-xs font-medium">Add your details to create a personal touch to your profile</p>
      </div>
      <div className='flex items-center justify-center w-[100%] h-[200px] bg-gray-300 rounded-lg' {...getRootProps()}>
        <input {...getInputProps()} className="w-[100px] h-[200px] rounded-md bg-gray-200"/>
        {
            isDragActive?
            <p className='text-xs'>Drag your image here</p>:
            <p className='text-xs'>Drag your image here or click to select</p>
        }
      </div>

      <div>
        <form className="flex flex-col gap-3" action="">
            <div className="flex items-center justify-between">
                <label className="text-sm" htmlFor="fname">First Name</label>
                <input name='firstName' onChange={(e)=>setprofileDetails(e)} className="px-2 py-3 w-[70%] text-xs border-2 rounded-lg outline-none" value={profileDetails.firstName} type="text" id="fname" placeholder="Write your first name"/>
            </div>
            <div className="flex items-center justify-between">
                <label className="text-sm" htmlFor="lname">Last Name</label>
                <input name='lastName' onChange={(e)=>setprofileDetails(e)} className="px-2 py-3 w-[70%] text-xs border-2 rounded-lg outline-none" type="text" value={profileDetails.lastName} id="lname" placeholder="Write your last name"/>
            </div>
            <div className="flex items-center justify-between">
                <label className="text-sm" htmlFor="email">Email</label>
                <input name='email' onChange={(e)=>setprofileDetails(e)} className="px-2 py-3 w-[70%] text-xs border-2 rounded-md outline-none" value={profileDetails.email} type="text" id="email" placeholder="Write your Email"/>
            </div>
        </form>
      </div>
    </div>
  );
}
