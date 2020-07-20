import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
  <div className="site wrap">
    {/*Begin Navbar*/}
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info">
        <a className="navbar-brand text-dark" href="#"><strong>Shop Animal</strong></a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#aboutUs">About Us</a>
                <a className="dropdown-item" href="#pricingTable">Bảng Giá</a>
                <a className="dropdown-item" href="#comment">Đánh Giá</a>
                <a className="dropdown-item" href="#image">Hình Ảnh</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ourStaff">Our Staff</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactUs">Contact Us</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="button">
              Search
            </button>
          </form>
          <div style={{marginLeft: '10px'}}><a name id className="btn btn-warning" href="/ShopAnimal.github.io/login.html" role="button">Login</a><div>
            </div>
          </div></div></nav>
    </div>
    {/*End Navbar*/}
    {/*Begin Header*/}
    <div className="container" id="home">
      <div className="row">
        <div className="col-7 mt-5 text-center">
          <div>
            <h1>WE CARE FOR YOUR DOG</h1>
          </div>
          <p className="mb-4">
            We always try to provide your dog the best services.
          </p>
        </div>
        <div className="col-5">
          <img src="./image/dogger_img_1.png" className="img-fluid float-right" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*End Header*/}
  {/*Begin CardInfo*/}
  <section className="site-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-6 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-2">Welcome to Dogger Pet Care</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="row mb-5 mb-lg-0">
        <div className="col-12">
          <div className="row">
            <div className="mb-4 col-lg-6 mb-lg-0" data-aos="fade-right" data-aos-delay={ 50 } data-aos-duration={1500}>
              <img src="./image/dogger_img_sm_3.jpg" className="img-fluid" alt="acb" />
            </div>
            <div className="col-lg-6 text-lg-right mb-lg-0" data-aos="fade-left" data-aos-delay={ 50 } data-aos-duration={1500}>
              <h2>Love &amp; Care</h2>
              <p className="mb-4">
                Far far away, behind the word mountains, Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
              <a href="#" className="btn btn-info">See More</a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-lg-6 text-lg-right mb-lg-0" data-aos="fade-left" data-aos-delay={ 50 } data-aos-duration={1500}>
              <h2>Love &amp; Care</h2>
              <p className="mb-4">
                Far far away, behind the word mountains, Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
              <a href="#" className="btn btn-info">See More</a>
            </div>
            <div className="mb-4 col-lg-6 mb-lg-0" data-aos="fade-right" data-aos-delay={ 50 } data-aos-duration={1500}>
              <img src="./image/dogger_img_sm_2.jpg" className="img-fluid" alt="acb" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="mb-4 col-lg-6 mb-lg-0" data-aos="fade-right" data-aos-delay={ 50 } data-aos-duration={1500}>
              <img src="./image/dogger_img_sm_1.jpg" className="img-fluid" alt="acb" />
            </div>
            <div className="col-lg-6 text-lg-right mb-lg-0" data-aos="fade-left" data-aos-delay={ 50 } data-aos-duration={1500}>
              <h2>Love &amp; Care</h2>
              <p className="mb-4">
                Far far away, behind the word mountains, Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
              <a href="#" className="btn btn-info">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End CardInfo*/}
  {/*Begin AboutUs*/}
  <section className="site-section" id="aboutUs">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-left heading-section mb-5" data-aos="fade-left" data-aos-delay={ 50 } data-aos-duration={1500}>
          <h2 className="text-black mb-3">About Us</h2>
          <p className="mb-3">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p className="muted mb-3">
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
          </p>
          <ul className="list-unstyled">
            <li>A small river named Duden flows</li>
            <li>It is a paradisematic country</li>
            <li>Roasted parts of sentences fly</li>
          </ul>
        </div>
        <div className="col-lg-6 mb-5" data-aos="fade-right" data-aos-delay={ 50 } data-aos-duration={1500}>
          <img src="./image/dogger_img_big_1.jpg" className="img-fluid" alt="acb" />
        </div>
      </div>
    </div>
  </section>
  {/*End AboutUs*/}
  {/*begin OUR TRAINERS*/}
  <section id="ourStaff" className="site-section bg-info">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-7 text-center heading-section mb-5">
          <h2 className="mb-2 heading">
            OUR TRAINERS
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={ 1000 } data-aos-duration={1500}>
          <div className="mb-4">
            <img src="./image/dogger_trainer_1.jpg" className="img-fluid" alt="acb" />
          </div>
          <div className="px-md-3">
            <h3>Jessica White</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="mb-4">
            <img src="./image/dogger_trainer_2.jpg" className="img-fluid" alt="acb" />
          </div>
          <div className="px-md-3">
            <h3>Jessica White</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="mb-4">
            <img src="./image/dogger_trainer_3.jpg" className="img-fluid" alt="acb" />
          </div>
          <div className="px-md-3">
            <h3>Jessica White</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end OUR TRAINERS*/}
  {/*begin Product*/}
  <section id="product" className="site-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-5 text-center heading-section mb-4">
          <h2 className="mb-2 heading">
            PRODUCTS
          </h2>
          <p>mô tả vài dòng về sản phẩm</p>
        </div>
      </div>
      <div className="row max-width-img">
        <div className="col-lg-4" data-aos="fade-left" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="text-center">
            <h4 className="mb-2">Chuồng Pet</h4>
            <div className="mb-3"><img src="./image/product/chuong.jpg" className="img-fluid" alt="image here" /></div>
            <button type="button" className="btn btn-primary">See More</button>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="text-center">
            <h4 className="mb-2">Thức Ăn Pet</h4>
            <div className="mb-3"><img src="./image/product/thuc-an-cho-cho-poodle-moshm.jpg" className="img-fluid" alt="image here" /></div>
            <button type="button" className="btn btn-primary">See More</button>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-right" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="text-center">
            <h4 className="mb-2">Phụ Kiện Pet</h4>
            <div className="mb-3"><img src="./image/product/phukien.jpg" className="img-fluid" alt="image here" /></div>
            <button type="button" className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end Product*/}
  {/*begin PRICING TABLE*/}
  <section id="pricingTable" className="site-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-6 text-center heading mb-3">
          <h2 className="text-black">PRICING TABLE</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12 bg-info p-md-5" data-aos="zoom-in-up" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="height-table-body">
            <h3 className="text-center">Basic</h3>
            <div className="text-center mb-3">
              <span>47$</span><span>/month</span>
            </div>
            <ul className="list">
              <li>Officia quaerat eaque neque</li>
              <li>Possimus aut consequuntur incidunt</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipisicing elit</li>
              <li>Dolorum esse odio quas architecto sint</li>
            </ul>
          </div>
          <div className="height-table-footer">
            <button type="button" className="btn btn-primary justify-content-center">
              Buy It
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-12 bg-dark p-md-5 text-white" data-aos="zoom-in-up" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="height-table-body">
            <h3 className="text-center">Basic</h3>
            <div className="text-center mb-3">
              <span>47$</span><span>/month</span>
            </div>
            <ul className="list">
              <li>Officia quaerat eaque neque</li>
              <li>Possimus aut consequuntur incidunt</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipisicing elit</li>
              <li>Dolorum esse odio quas architecto sint</li>
            </ul>
          </div>
          <div className="height-table-footer">
            <button type="button" className="btn btn-primary justify-content-center">
              Buy It
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-12 bg-info p-md-5" data-aos="zoom-in-up" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="height-table-body">
            <h3 className="text-center">Basic</h3>
            <div className="text-center mb-3">
              <span>47$</span><span>/month</span>
            </div>
            <ul className="list">
              <li>Officia quaerat eaque neque</li>
              <li>Possimus aut consequuntur incidunt</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipisicing elit</li>
              <li>Dolorum esse odio quas architecto sint</li>
            </ul>
          </div>
          <div className="height-table-footer">
            <button type="button" className="btn btn-primary justify-content-center">
              Buy It
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end PRICING TABLE*/}
  {/*begin HAPPY CUSTOMERS*/}
  <section id="comment" className="site-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-7 text-center mb-5 heading-section">
          <h2>HAPPY CUSTOMERS</h2>
        </div>
      </div>
      <div className="row justify-content-center" data-aos="zoom-out-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-4 mb-3">
          <div className="card" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
            <img className="card-img-top" src="./image/avatar/person_1.webp" alt="" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="card" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
            <img className="card-img-top" src="./image/avatar/person_2.webp" alt="" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="card" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
            <img className="card-img-top" src="./image/avatar/person_4.webp" alt="" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end HAPPY CUSTOMERS*/}
  {/*begin PHOTO GALLERY*/}
  <section id="image" className="site-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-6 mb-4 text-center heading-section">
          <h2>PHOTO GALLERY</h2>
        </div>
      </div>
      <div className="row mb-3" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500} data-cues="slideInLeft" data-group="images">
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_2.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_4.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_6.jpg" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mb-3" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_2.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_4.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-3">
          <img src="./image/ListImageAnimal/dogger_img_sm_6.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/*end PHOTO GALLERY*/}
  {/*begin OUR SERVICES*/}
  <section id="services" className="site-section">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={ 50 } data-aos-duration={1500}>
        <div className="col-lg-7 mb-5 text-center heading-section">
          <h2>OUR SERVICES</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="row mb-4 max-width-img" data-aos="zoom-out-down" data-aos-delay={ 50 } data-aos-duration={1000}>
        <div className="col-lg-4 mb-3">
          <img src="./image/service/dogger_checkup.svg" className="img-fluid mb-2" alt="" />
          <h4 className="mb-2">
            Dog Checkup
          </h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="col-lg-4 mb-3">
          <img src="./image/service/dogger_dermatology.svg" className="img-fluid mb-2" alt="" />
          <h4 className="mb-2">
            Dog Dermatology
          </h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="col-lg-4 mb-3">
          <img src="./image/service/dogger_bones.svg" className="img-fluid mb-2" alt="" />
          <h4 className="mb-2">
            For Strong Teeth
          </h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="row mb-4 max-width-img" data-aos="zoom-out-down" data-aos-delay={ 50 } data-aos-duration={1000}>
        <div className="col-lg-4 mb-3">
          <img src="./image/service/dogger_veterinarian.svg" className="img-fluid mb-2" alt="" />
          <h4 className="mb-2">
            Dog First Aid
          </h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="col-lg-4 mb-3">
          <img src="./image/service/dogger_dryer.svg" className="img-fluid mb-2" alt="" />
          <h4 className="mb-2">
            Dog Dryer
          </h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="col-lg-4 mb-3">
          <img src="./image/service/dogger_veterinary.svg" className="img-fluid mb-2" alt="" />
          <h4 className="mb-2">
            Expert Veterinarian
          </h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/*end OUR SERVICES*/}
  {/*begin Contact us*/}
  <section className="site-section" id="contactUs">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 bg-secondary" data-aos="fade-left" data-aos-delay={ 50 } data-aos-duration={1500}>
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 text-center heading-section mb-5 align-self-center">
              <h2 className="text-white mb-5">Contact Us</h2>
              <ul className="list-unstyled text-left address">
                <li>
                  <span className="d-block">Address:</span>
                  <p>Melbourne St,South Birbane 4101 Austraila</p>
                </li>
                <li>
                  <span className="d-block">Phone:</span>
                  <p>+(000) 123 4567 89</p>
                </li>
                <li>
                  <span className="d-block">Email:</span>
                  <p>
                    email here
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg-info" data-aos="fade-right" data-aos-delay={ 50 } data-aos-duration={1500}>
          <form action="#" className="p-5 contact-form">
            <h2 className="h4 mb-5 heading">Contact Form</h2>
            <div className="row form-group">
              <div className="col-md-6 mb-3 mb-md-0">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label htmlFor="subject">Subject</label>
                <input type="subject" id="subject" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols={30} rows={7} className="form-control" placeholder="Write your notes or questions here..." defaultValue={""} />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <input type="submit" defaultValue="Send Message" className="btn btn-dark btn-md text-white" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="site-section bg-dark">
    <div className="container">
      <div className="row text-white">
        <div className="col-lg-5">
          Built by:
          <h6>Trần Tú Hảo</h6>
          <h6>Hồ Phước Thường</h6>
          <h6>Nguyễn Thành Trưởng</h6>
          <h6>Huỳnh Lê Trọng Nhân</h6>
          <h6 style={{marginBottom: '2rem'}}>Nguyễn Nhựt Tân</h6>
          Contact:
          <h6>Call: 0373988618 - 0903256022 (hotline)</h6>
          <h6>Email: nguyentan15102000@gmail.com</h6>
          <h6>address: 189 Kinh Dương Vương, Phường 12, Quận 6, TP. Hồ Chí Minh</h6>
        </div>
        <div className="col-lg-4">
          Sponsored by: 
          <h6>AOS animation</h6>
          <h6>Firebase google</h6>
          <h6>Colorlib</h6>
          <h6>Github</h6>
          <h6>Boostrap 4</h6>
        </div>
        <div className="col-lg-3">
          Moderator: 
          <h6>Nguyễn Nhựt Tân</h6>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  );
}

export default App;
