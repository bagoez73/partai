import Link from 'next/link';

const Header = () => (
  <div>
    <div className="header">
  <div className="container">
    <div className="logo">
      <Link href="/">
      <a>
        <span>DPP</span>Partai Persatuan Pembangunan
      </a>
      </Link>
    </div>
    <div className="header-right">
      <Link href="https://setdprd.serangkota.go.id/next/login">
      <a className="account">
        Akun
      </a>
      </Link>
    </div>
  </div>
</div>
<div className="main-banner banner text-center">
    <div className="container">
      <h1>
        Sell or Advertise{" "}
        <span className="segment-heading"> anything online </span> with Resale
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <a href="post-ad.html">Post Free Ad</a>
    </div>
  </div>
  </div>
);

export default Header;
