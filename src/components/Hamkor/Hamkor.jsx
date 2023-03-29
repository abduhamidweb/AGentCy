import React from 'react';
import "./Hamkor.scss";
import ham1 from "../../assets/images/ham1.png"
import ham2 from "../../assets/images/ham2.png"
import ham3 from "../../assets/images/ham3.png"
import ham4 from "../../assets/images/ham4.png";
import Button from '../Button/Button';
const Hamkor = () => {
    return (
      <div className="container">
        <div className="row hamkor">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="hamkorTitle">
              Sizni bir finjon qahva ustida loyihangizni batafsil muhokama
              qilishga mamnuniyat ila taklif qilamiz.
            </h2>

            <form action="" className="formHamkor">
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="Telefon raqamingiz" />
              <input
                type="text"
                placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"
              />
            </form>
            <h2 className="titleHamkor">
              Qanday xizmatlardan foydalanishni xoxlaysiz?
            </h2>
            <div className="check d-flex">
              <div className="check-1">
                <span className="d-flex gap-3">
                  <input type="checkbox" id="beck" />
                  <label htmlFor="beck">Backend</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="crm" />
                  <label htmlFor="crm">CRM ishlab chiqish</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="int" />
                  <label htmlFor="int">Internet magazin ishlab chiqish</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="logo" />
                  <label htmlFor="logo">Logotip va Brandbook</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="port" />
                  <label htmlFor="port">Portal ishlab chiqish</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="veb" />
                  <label htmlFor="veb">Veb dizayn</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="mob" />
                  <label htmlFor="mob">Mobilograf</label>
                </span>
              </div>
              <div className="check-2">
                <span className="d-flex gap-3">
                  <input type="checkbox" id="fron" />
                  <label htmlFor="fron">Frontend</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="grap" />
                  <label htmlFor="grap">Grafik dizayn</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="mot" />
                  <label htmlFor="mot">Motion dizayn</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="mob" />
                  <label htmlFor="mob">Mobil ilova ishlab chiqish</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="sayt" />
                  <label htmlFor="sayt">Veb sayt ishlab chiqish</label>
                </span>
                <span className="d-flex gap-3">
                  <input type="checkbox" id="smm" />
                  <label htmlFor="smm">SMM dizayn</label>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 minibox">
            <div className="HamkorBox1 ">
              <h2 className="box1-title">NIMANI MA'QUL KO'RASIZ?</h2>
              <div className="cofes d-flex flex-wrap">
                <div className="cofe-card">
                  <img src={ham1} alt="img" />
                  <h2>Achchiq kofe</h2>
                </div>
                <div className="cofe-card">
                  <img src={ham2} alt="img" />
                  <h2>Sutli kofe</h2>
                </div>
                <div className="cofe-card">
                  <img src={ham3} alt="img" />
                  <h2>Suv</h2>
                </div>
                <div className="cofe-card">
                  <img src={ham4} alt="img" />
                  <h2>Choy</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hamkor;