import React from 'react'
import Button from '../components/button'
import Navbar from '../components/nav-bar'
import Footer from '../components/footer'

export default function () {
    return (
        <main>

            <section>
                <Navbar />
            </section>


            <div className='p-4'>
                <h2>Get in touch with Bisco Football Club</h2>
                <p>We'd love to hear from you. Whether it's feedback, partnership or general inquires.</p>
            </div>

            <div>

                <div>
                    {/* use image of  */}
                    <img src="" alt="" srcset="" />
                </div>

                <div>
                    <input type="text" name="your name" placeholder='Full Name' />
                    <input type="email" name="email" id="" placeholder='Email Address' />
                    <input type="text" name="your message" id="" placeholder='Your message' />
                    <Button>Submit</Button>
                </div>

                <div>
                    {/* put icons of phone, location, and email before each text. */}

                    <span>
                        <p>Telephone Number</p>
                        <p>0244444486</p>
                    </span>

                    <span>
                        <p>Location</p>
                        <p>Kasoa America Town</p>
                        {/* use google map too for location when the user clicks */}
                    </span>

                    <span>
                        <p>Email</p>
                        biscofootballclub@gmail.com
                    </span>

                </div>

                <div>
                    <p>Connect with us</p>
                    {/* put icons of facebook, tiktok, instagram and whtsapp here */}
                </div>

            </div>

            <section>
                <Footer />
            </section>

        </main>

    )
}