import React from 'react'
import '@/assets/css/contact.css'
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div>

      <h1 className="font-name mb-5 mt-16" id='contact' style={{ paddingLeft: '100px', color: '#eaeaea', fontSize: 'larger', paddingTop: '60px', paddingBottom: '15px' }}>
        Contact
    </h1>
    <div className='con '>
<div  className="  z-40 flex " tabindex="-1" aria-labelledby="drawer-contact-label ">

   <form className="mb-6 w-72">
      <div className="mb-6 ">
         <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
         <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#474747] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@gmail.com" required />
      </div>
      <div className="mb-6">
         <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
         <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#474747] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let me know about you" required />
      </div>
      <div className="mb-6">
         <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#474747] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
   </form>
   <div className=' items-center content-center  flex  '>
   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <a href="mailto:sajansaji2002@gmail.com" className="hover:underline">
      <Mail />
        sajansaji2002@gmail.com</a>
   </p>
   <p className="text-sm text-gray-500 dark:text-gray-400">Contact Number : 
      <a href="#" className="hover:underline"> +91 9207118784</a>
   </p>
   </div>
   
</div>


    </div>
    </div>
  )
}

export default Contact