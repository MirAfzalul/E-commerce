import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arraivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Information about Comapny</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Conatct Information</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">logo</span>
          <span className="copyright">Copyright</span>
        </div>
        <div className="right">
          <img src="/images/payments.png" alt="" />
        </div>
      </div>

    </div>
    
  )
}

export default Footer