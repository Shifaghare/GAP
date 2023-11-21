import './Navbar.css'
import {  FaGalacticRepublic, FaPause, FaSearch, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {

    return(
        <div id='navbar-screen'>
            <div className='navbar-1'>
                <div className='nav-1-left'>
                    <img  style={{width:''}} src='data:image/png;base64,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'/>
                </div>
                <div className='nav-1-right'>
                    <div className='nav-1-right-left'>
                        <div>
                            <p style={{fontWeight:'700' , letterSpacing: '-1px'}}>OLD NAVY</p>
                            <p style={{fontFamily: "Helvetica Neue Helvetica, Arial, Roboto, sans-serif"}}>BANANA REPUBLIC</p>
                            <p><FaGalacticRepublic/><span style={{letterSpacing:'2.9px',marginLeft:'2px'}}>ATHLETA</span></p>
                            <p>babyGap</p>
                        </div>
                        <div style={{width:'380px'}}>
                            <p>Free Shipping on $50+ for Rewards Members <u>SIGN IN OR JOIN DETAILS</u></p>
                        </div>
                    </div>
                    <div className='nav-1-right-right'>
                        <div>
                            <p className='sign-in-p'>Sign In <br/><span><b>YOUR ACCOUNT</b></span></p>
                          
                        </div>
                        <button><FaShoppingBag/></button>
                    </div>
                </div>
            </div>
            <div className='navbar-2'>
                <div className='nav2-left'>
                    <img src='https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/725/assets/logo/logo_gap--dark.svg'/>
                </div>
                <div className='nav2-mid'>
                    <p>NEW</p>
                    <p>WOMEN</p>
                    <p>MEN</p>
                    <p>GIRLS</p>
                    <p>BOYS</p>
                    <p>TODDLER</p>
                    <p>BABY</p>
                    <p>MATERNITY</p>
                    <p>SALE</p>
                    <p style={{fontWeight : "700"}}>THE GIFT SHOP</p>
                </div>
                <div className='nav2-right'>
                    <input type='text' placeholder='Search: '/>
                    <div>
                    <FaPause style={{fontSize:'13px',marginRight:'5px'}}/>
                    <FaSearch style={{fontSize:'15px',marginRight:'5px',marginTop:'4px'}}/>

                    </div>
                </div>
            </div>
            <div style={{height:'200px',width:'100%'}}>
                
                <div style={{marginRight:'83%',fontSize:'20px'}}>Black Friday Sale </div>
                <span style={{marginTop:'-15px',marginRight:'20%',fontSize:'90px'}}>40% Off On Everything</span>
                <div style={{marginRight:'79%',marginTop:'10px',fontSize:'13px'}}>Because its treat <i>everyone</i> season.</div>
                <img style={{marginLeft:'80%',marginTop:'-210px',height:'190px',width:'200px'}} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPjGULxboM3FTRtZGWV7Z2jMJVc08OtaJJdQDTZYRXuq8YTEq8'/>
            </div>
            <div className='navbar-3'>
                <div className='nav3-left'>
                    <p>WOMEN</p>
                    <p>MATERNITY</p>
                    <p>MEN</p>
                    <p>GIRLS</p>
                    <p>BOYS</p>
                    <p>TODDLER GIRL</p>
                    <p>TODDLER BOY</p>
                    <p>BABY GIRL</p>
                    <p>BABY BOY</p>
                </div>
                <div className='nav3-right'>
                    <p style={{marginLeft:'130px'}}>Applied at checkout. Excludes brand collaborations. <u>DETAILS</u></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar