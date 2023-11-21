import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-screen'>
            <div className='footer-1'>
                <div className='footer1-body'>
                    <div className='footer1-1'>
                        <h2 className='footer-header'>SEE IT FIRST</h2>
                        <div className='footer-email'>
                            <input type='email' placeholder='Enter your email address' />
                            <button>JOIN</button>
                        </div>
                        <a><u>PRIVACY POLICY</u></a>
                    </div>
                    <div className='footer1-2'>
                        <h2 className='footer-header'>CUSTOMER SUPPORT</h2>
                        <p>Customer Service</p>
                        <p>Buy Online. Pick Up In-Store.</p>
                        <p>Store Locator</p>
                        <p>GapCash</p>
                        <p>GiftCards</p>
                    </div>
                    <div className='footer1-3'>
                        <h2 className='footer-header'>GAP GOOD REWARDS</h2>
                        <p>join Gap Good Rewards</p>
                        <p>Apply for a Credit Card</p>
                        <p>My Rewards & Benefits</p>
                        <p>Pay Credit Card Bill</p>
                        <p>Learn More</p>
                    </div>
                    <div className='footer1-4'>
                        <h2 className='footer-header'>ABOUT US</h2>
                        <p>Out Values</p>
                        <p>Sustainability</p>
                        <p style={{width:'160px'}}>Equality and Belonging</p>
                        <p>Careers</p>
                        <p>Get the App</p>
                    </div>
                </div>
            </div>
            <p className='footer-2-p'>© 2023 THE GAP, INC.|PRIVACY POLICY|
                YOUR PRIVACY CHOICES
                |YOUR CALIFORNIA PRIVACY RIGHTS|CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT | TERMS OF USE|CAREERS|SUSTAINABILITY|ABOUT GAP INC.<br/>
                </p>
                <p className='footer-2-p'>AMERICANS WITH DISABILITIES ACT|GAP INC. POLICIES</p>

            <p></p>
        </div>
    )
}

export default Footer