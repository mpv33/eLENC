import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="containers">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our team</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">our partner</a></li>
                            </ul>
                        </div>
                      
                        <div className="footer-col">
                            <h4>Our Products</h4>
                            <ul>
                                <li><a href="/sde-kit">SDE Kit</a></li>
                                <li><a href="/fun-academy">fun Academy</a></li>
                                <li><a href="/shopping">MyShop</a></li>
                                <li><a href="/entertainment">Entertainment</a></li>
                                <li><a href="/mbook">MBook</a></li>
                                <li><a href="/games">Games</a></li>
                            </ul>
                        </div>


                        <div className="footer-col">
                            <h4>Contact us</h4>
                            <ul>   
                                <li><a >mateshwari33@gmail.com</a></li>
                                <li><a >8853952715</a></li>
                                <li><a >Lucknow </a></li>
                        
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
