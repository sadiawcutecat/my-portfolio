// import { JotFormEmbed } from 'jotform-react';



const Contact = () => {
    const URL = "https://form.jotform.com/231834963185464"
    
    return (
        //   <div>
        //     <JotFormEmbed>
        //     formURL="https://form.jotform.com/223433783396060"
        //     </JotFormEmbed>
        //   </div>
        <div>
            <h1 className='text-4xl text-center font-bold mt-12'>Contact Me</h1>
            <hr className='mb-12 mt-6' />
            <div className='h-96 mt-12 mb-96 '>
            <iframe title="my form" className='w-full h-[728px]' src={URL}></iframe>
        </div>
        </div>
    );
};

export default Contact;