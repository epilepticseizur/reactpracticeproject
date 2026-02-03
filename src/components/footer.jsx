import "./footer.css"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
<img src="./images/лого школи 1.png" alt="" />
                </div>

                <div className="footer-section">
                    <h3>Навчання</h3>
                    <p>Загальноосвітня школа</p>
                    <p>Початкова школа</p>
                    <div className="social-icons">
                        <a href="#"><img src="./images/inst 1.png" alt="Instagram" /></a>
                        <a href="#"><img src="./images/Vector.png" alt="YouTube" /></a>
                        <a href="#"><img src="./images/Vector (1).png" alt="Twitter" /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Контакти</h3>
                    <div className="contact-block">
                        <div className="contact-block-upper">
                            <img src="./images/marketeq_maps-location.png" alt=""></img>
                            <p>Вул. Ленкавського, 176</p>
                        </div>

                        <p className="contact-details">
                            (067) 699-57-76 (050) 488-99-51 If@itstep.Org<br />
                            ПН. - ПТ 3 09.00 До 19.00 СБ. з 09.00 До 16.00
                        </p>
                    </div>
                    <div className="contact-block2">
                        <img src="./images/marketeq_maps-location.png" alt=""></img>
                        <p>Вул. Гузара, 49 (4 Поверх)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer