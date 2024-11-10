import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div className="body">
      <div className="edu">Education & Experience</div>
      <div className="container">
        <main className="row">
          {/* Education section */}
          <section className="col">
            <header className="title">
              <h1>Education</h1>
            </header>
            <div className="contents">
              <div className="box">
                <h4>2014 AD</h4>
                <h3>Secondary School</h3>
                <p>I had completed my 10th From JSEB School. I scored 1st Division in my 10th Board Exam.</p>

              </div>

              <div className="box">
                <h4>2015 - 2017 AD</h4>
                <h3> Higher Secondary Degree</h3>
                <p>I had completed my 12th From COBASS College. I scored 2st Division in my 12th board Exam.</p>

              </div>

              <div className="box">
                <h4>2019 - 2022 AD</h4>
                <h3>Bachelor's Degree</h3>
                <p>I had completed my Bachelor's Degree From OPJS University. I scored 1st Division in my Bachelor's.</p>

              </div>

            </div>

          </section>

          {/*Experience Section */}


          <section className="col">
            <header className="title">
              <h1>Experience</h1>
            </header>
            <div className="contents">
              <div className="box">
                <h4>2020 - 2022 AD</h4>
                <h3>FrontEnd Developer</h3>
                <p>I have 2 years of Experience in developing a Dynamic Website in ReactJs</p>

              </div>

              <div className="box">
                <h4>2022 - 2023 AD</h4>
                <h3>SEO</h3>
                <p>I have been working as a SEO Analyst and have a Experience of more then 1 and half years. </p>

              </div>

              <div className="box">
                <h4>2022 - 2023 AD</h4>
                <h3>Social Media Manager</h3>
                <p>I have been working as a Social Media Manager and have a Experience of more then 1 and half years.</p>

              </div>

            </div>

          </section>

        </main>
      </div>
    </div>
  )
}

export default Education
