    import "./index1.css"
    function Index1() {
        return (
            <>
                <div className="index1">
                    <section className="sec1">
                        <img src="./images/270c1bd3e43386f0facd3f13d3ca8d3c9061b54a.jpg" alt="" class="sec1img"></img>
                    </section>
                    <section className="sec2">
                        <div className="sec2container">
                            <h2>Надійна школа, що <br />працює за будь-яких умов</h2>

                            <div className="sec2cards">
                                <div className="sec2card">
                                    <div className="sec2cardtext">
                                        <h4 className="sec2cardtexth4">1-4 клас</h4>
                                        <h3 className="sec2cardtexth2">Початкова школа</h3>
                                    </div>
                                    <img src="./images/image(3).png" alt="" class="sec2cardimg1"></img>

                                </div>
                                <div className="sec2card">
                                    <div className="sec2cardtext">
                                        <h4 className="sec2cardtexth4">5-11 клас</h4>
                                        <h3 className="sec2cardtexth2">Загальноосвітня школа</h3>
                                    </div>
                                    <img src="./images/image(3).png" alt="" class="sec2cardimg2"></img>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sec3">
                        <div className="sec3container">


                            <h2 className="sec3title">
                                Чому батьки обирають IT STEP SCHOOL
                            </h2>

                            <div className="sec3cards">
                                <div className="sec3card">
                                    <h6>Сучасні та комфортні умови для навчання</h6>
                                    <p>Класи віртуальної реальності, хімічні та фізичні лабораторії, фото- та відеостудії, сучасні класи та спортивні зали.</p>
                                </div>
                                <div className="sec3card">
                                    <h6>Поглиблене вивчення ІТ-предметів в рамках навчальної програми</h6>
                                    <p>Програмування, дизайн, мережі, створення ігор, сайтів, розробка мобільних додатків</p>
                                </div>
                                <div className="sec3card">
                                    <h6>Поглиблене вивчення іноземних мов</h6>
                                    <p>Діти вивчають мову в групах відповідно до їхнього рівня знання, а з 5 класу друга іноземна мова на вибір.</p>
                                </div>
                                <div className="sec3card">
                                    <h6>Розвиток soft skill та індивідуальних здібностей дитини</h6>
                                    <p>Ораторські навички, впевненість, емоційний інтелект, критичне мислення.</p>
                                </div>
                                <div className="sec3card">
                                    <h6>Індивідуальний підхід до кожного учня</h6>
                                    <p>Ми розуміємо, наскільки важлива якісна комунікація з кожним учнем, щоб досягти наших цілей, тому формуємо невеликі класи.</p>
                                </div>
                                <div className="sec3card">
                                    <h6>Підтримка і супровід дитини куратором</h6>
                                    <p>Ми створили атмосферу, яка надихає вчитися. Наші  куратори люблять дітей та готові підтримувати їхні ідеї та розвиток.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sec4">
                        <div className="sec4container">
                            <h1 className="sec4title">Планшет замість підручника <br />Освітня платформа "MyStat"</h1>
                            <div className="sec4main">

                                <div className="sec4texts">
                                    <div className="sec4text">

                                        <p className="sec4cardtext">Усі необхідні підручники та програмне забезпечення для ефективного та цікавого навчання.</p>
                                    </div>
                                    <div className="sec4text">
                                        <p className="sec4cardtext">Платформа для розвитку і комунікації з адміністрацією школи.</p>
                                    </div>
                                    <div className="sec4text">

                                        <p className="sec4cardtext">Усі розклади проставлені заздалегідь програмою. Замість заповнення щоденника — дитина зможе зробити щось корисніше.</p>
                                    </div>
                                    <div className="sec4text">

                                        <p className="sec4cardtext">Доступ батьків для перегляду успішності результатів у навчані.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sec5">
                        <div className="sec5container">

                            <div className="sec5text">
                                <h2 className="sec5texttitle">Хочете навчатися в IT STEP SCHOOL?</h2>
                                <p className="sec5textsub">Запишіться на індивідуальну консультацію, де ми зможемо відповісти на ваші <br /> запитання та перейти до наступних кроків</p>
                            </div>
                            <div className="sec5btns">
                                <div className="sec5inputpib">
                                    <label htmlFor="name">ПІБ </label>

                                </div>
                                <div className="sec5inputphone">
                                    <label htmlFor="country">+380991166155 </label>
                                    <select name="country" id="country"></select>
                                </div>
                                <button className="sec5btn">Зареєструватись</button>
                            </div>
                        </div>
                    </section>
                </div>

            </>
        )
    }

    export default Index1