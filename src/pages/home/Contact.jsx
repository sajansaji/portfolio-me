
import '@/assets/css/contact.css'
import { Instagram, Mail, Phone, Linkedin, Facebook, Github, Twitter } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';



const Contact = () => {

   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      const payload = {
         content: '<@875589371590500425>',
         embeds: [
            {
               title: 'New Web Message',
               description: formData.get('message'),
               color: 3447003,
               fields: [
                  {
                     name: 'Email',
                     value: formData.get('email'),
                  },
                  {
                     name: 'Message',
                     value: formData.get('subject')
                  }
               ],
            },
         ],
      };

      try {
         const response = await fetch('https://discord.com/api/webhooks/1256467135572738049/lfX0bkFClfk8Ve-XSB4yX5dSgmB_DFc6zSXn9K4-gjYYTdeDjrDOmZsZWz61i5YPHPpC', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
         });

         if (!response.ok) {
            throw new Error('Failed to send message');
         }
         toast.success('Message sent successfully!');
      } catch (error) {
         toast.error('Failed to send message. Please try again later.');
      }
   };
   return (
      <div>

         <h1 className="font-name  text-center mb-5  mt-10  " id='contact' style={{ color: '#999', fontSize: 'larger', paddingTop: '60px', paddingBottom: '15px' }}>
            Contact
         </h1>
         <div className='con sm:ml-48 sm:mr-48 font-fre mt-8'>
            {/* mr-4 */}
            <div className=" z-40 flex flex-col" aria-labelledby="drawer-contact-label ">

               <form className="form " onSubmit={onSubmit}>
                  <div className="mb-6 mar mr-36 mobile-portrait:w-[280px] ">
                  
                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                     <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#474747] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@gmail.com" required />
                    
                  </div>
                  <div className="mb-6 mar mr-36 mobile-portrait:w-[280px]">
                     <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                     <input type="text" name='subject' id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#474747] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let me know.." required />
                  </div>
                  <div className="mb-6 mar mr-36 mobile-portrait:w-[280px]">
                     <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                     <textarea id="message" name='message' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#474747] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                  </div>
                  <div className='mar mb-12 mr-36 mobile-portrait:w-[280px]'>
                     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
                     <Toaster position="bottom-center" />
                  </div>
               </form>
               <aside className=' content-center  flex flex-wrap  justify-between  '>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                     <a href="mailto:sajansaji2002@gmail.com" className="hover:underline flex hover:text-white">
                        <Mail />
                        &nbsp;
                        sajansaji2002@gmail.com</a>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex  ">
                     <Phone /> &nbsp;
                     <a href="#" className="hover:underline hover:text-white">
                        +91 9207118784</a>
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-9">

                     <p>  Social Media  </p>
                     <div className='flex gap-4 pt-3  '>
                        <a href="https://www.linkedin.com/in/sajansaji" className='hover:text-blue-400'><Linkedin /></a>
                        <a href="https://www.facebook.com/iamsajansaji/" className='hover:text-blue-700'><Facebook /></a>
                        <a href="https://github.com/sajansaji" className='hover:text-white'><Github /></a>
                        <a href="https://x.com/iamsajansaji" className='hover:text-blue-600'><Twitter /></a>
                        <a href="https://www.instagram.com/iamsajansaji/" className='hover:text-pink-500'><Instagram /></a>
                     </div>
                  </span>
               </aside>

            </div>


         </div>
      </div>
   )
}

export default Contact
