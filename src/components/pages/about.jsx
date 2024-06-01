import React from 'react'
import Header from '../Landingpage/header'
import Foot from '../Landingpage/footer'

function About() {
  return (
    <div>
        <Header />
        <section className='flex justify-center flex-col items-center sm:h-[56vh] text-center p-[2em]'>
            <div className='w-[90%] sm:w-[80%] flex flex-col gap-[2em]'>
                <h1 className='font-[poppins] text-4xl font-bold text-[#c04269]'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos nihil itaque error cupiditate recusandae eos placeat? Nulla blanditiis dolorum animi quam explicabo, repudiandae maiores consequuntur! Perferendis dignissimos nihil quod illo aspernatur repellendus voluptatum, nesciunt labore ut obcaecati ab hic, quo architecto impedit placeat, cumque facilis temporibus officia odio vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis dolorem labore veniam quae repellendus aspernatur libero eligendi, iure deleniti nobis nihil excepturi repellat fugit voluptatibus dignissimos qui sit. Quos velit aut id, sed ab quo voluptates qui mollitia in ipsam corrupti quis distinctio, iure quas, esse sit sint quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem, temporibus eligendi, quos magni repudiandae ea repellendus, perspiciatis incidunt iure voluptate mollitia minus obcaecati enim dolore fugit. Iste consequatur labore laboriosam adipisci beatae perferendis corporis sequi aperiam, sapiente ab, dignissimos maxime pariatur sit? Magni molestias, ut fuga doloribus earum cum?</p>
            </div>
        </section>
        <Foot />
    </div>
  )
}

export default About