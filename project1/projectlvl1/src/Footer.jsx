import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer className='bg-blue-500 text-white py-2'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 w-11/12'>
                <div className='flex items-center'>
                    <h2 className='text-2xl font-bold'>Powered by Redis</h2>
                </div>

                <div>
                    <h2 className='text-xl font-bold text-gray-50 hover:text-yellow-100'>Contacts</h2>
                    <p>Email : abc@gmail.com</p>
                    <p>Ph : +91-23910 39201</p>
                    <p>Address : St.Louis street</p>
                </div>

                <div>
                    <h3 className='text-xl font-bold text-gray-50 md:mx-4'>Social Media</h3>
                    
                    <div className='flex space-x-4 mt-6'>
                        <a>
                            <FaFacebook className='text-white text-2xl 
                            hover:text-gray-300'/>
                        </a>

                        <a>
                            <FaTwitter className='text-white text-2xl 
                            hover:text-gray-300'/>
                        </a>

                        <a>
                            <FaInstagram className='text-white text-2xl 
                            hover:text-gray-300'/>
                        </a>

                        <a>
                            <FaLinkedin className='text-white text-2xl 
                            hover:text-gray-300'/>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold mb-4'>Services</h3>
                    <ul>
                        <li>
                            <a className='hover:underline'>Web Development</a>
                        </li>
                        <li>
                            <a className='hover:underline'>App Development</a>
                        </li>
                        <li>
                            <a className='hover:underline'>Game Development</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer