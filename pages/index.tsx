import Link from 'next/link';
import Layout from '../components/layout';

function home() {
    return (
      <Layout>
        <>
  <div className="content">
    <div className="categories">
      <div className="container">
        <div className="col-md-2 focus-grid">
          <Link href="/visi">
          <a>
            <div className="focus-border">
              <div className="focus-layout">
                <div className="focus-image">
                  <i className="fa fa-mobile" />
                </div>
                <h4 className="clrchg">Visi</h4>
              </div>
            </div>
          </a>
          </Link>
        </div>
        <div className="col-md-2 focus-grid">
          <Link href="/">
          <a>
            <div className="focus-border">
              <div className="focus-layout">
                <div className="focus-image">
                  <i className="fa fa-laptop" />
                </div>
                <h4 className="clrchg"> Misi</h4>
              </div>
            </div>
          </a>
          </Link>
        </div>
        <div className="col-md-2 focus-grid">
          <Link href="/berita">
          <a>
            <div className="focus-border">
              <div className="focus-layout">
                <div className="focus-image">
                  <i className="fa fa-car" />
                </div>
                <h4 className="clrchg">Berita</h4>
              </div>
            </div>
          </a>
          </Link>
        </div>
        <div className="col-md-2 focus-grid">
          <Link href="/">
          <a>
            <div className="focus-border">
              <div className="focus-layout">
                <div className="focus-image">
                  <i className="fa fa-motorcycle" />
                </div>
                <h4 className="clrchg">Profile</h4>
              </div>
            </div>
          </a>
          </Link>
        </div>
        <div className="col-md-2 focus-grid">
          <Link href="/">
          <a>
            <div className="focus-border">
              <div className="focus-layout">
                <div className="focus-image">
                  <i className="fa fa-at" />
                </div>
                <h4 className="clrchg">Struktur</h4>
              </div>
            </div>
          </a>
          </Link>
        </div>
        <div className="col-md-2 focus-grid">
          <Link href="/">
          <a>
            <div className="focus-border">
              <div className="focus-layout">
                <div className="focus-image">
                  <i className="fa fa-shield" />
                </div>
                <h4 className="clrchg">Pengurus</h4>
              </div>
            </div>
          </a>
          </Link>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="trending-ads">
      <div className="container">
        {/* slider */}
        <div className="trend-ads">
          <h2>Berita Terbaru</h2>
          <ul id="flexiselDemo3">
            <li>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p1.jpg" />
                  <span className="price">$ 450</span>
                </a>
                <div className="ad-info">
                  <h5>There are many variations of passages</h5>
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p2.jpg" />
                  <span className="price">$ 399</span>
                </a>
                <div className="ad-info">
                  <h5>Lorem Ipsum is simply dummy</h5>
                  <span>3 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p3.jpg" />
                  <span className="price">$ 199</span>
                </a>
                <div className="ad-info">
                  <h5>It is a long established fact that a reader</h5>
                  <span>8 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p4.jpg" />
                  <span className="price">$ 159</span>
                </a>
                <div className="ad-info">
                  <h5>passage of Lorem Ipsum you need to be</h5>
                  <span>19 hour ago</span>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p5.jpg" />
                  <span className="price">$ 1599</span>
                </a>
                <div className="ad-info">
                  <h5>There are many variations of passages</h5>
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p6.jpg" />
                  <span className="price">$ 1099</span>
                </a>
                <div className="ad-info">
                  <h5>passage of Lorem Ipsum you need to be</h5>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p7.jpg" />
                  <span className="price">$ 109</span>
                </a>
                <div className="ad-info">
                  <h5>It is a long established fact that a reader</h5>
                  <span>9 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p8.jpg" />
                  <span className="price">$ 189</span>
                </a>
                <div className="ad-info">
                  <h5>Lorem Ipsum is simply dummy</h5>
                  <span>3 hour ago</span>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p9.jpg" />
                  <span className="price">$ 2599</span>
                </a>
                <div className="ad-info">
                  <h5>Lorem Ipsum is simply dummy</h5>
                  <span>3 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p10.jpg" />
                  <span className="price">$ 3999</span>
                </a>
                <div className="ad-info">
                  <h5>It is a long established fact that a reader</h5>
                  <span>9 hour ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p11.jpg" />
                  <span className="price">$ 2699</span>
                </a>
                <div className="ad-info">
                  <h5>passage of Lorem Ipsum you need to be</h5>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="col-md-3 biseller-column">
                <a href="single.html">
                  <img src="images/p12.jpg" />
                  <span className="price">$ 899</span>
                </a>
                <div className="ad-info">
                  <h5>There are many variations of passages</h5>
                  <span>1 hour ago</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* //slider */}
    </div>
    <div className="mobile-app">
      <div className="container">
        <div className="col-md-5 app-left">
          <a href="mobileapp.html">
            <img src="images/app.png" />
          </a>
        </div>
        <div className="col-md-7 app-right">
          <h3>
            Resale App is the <span>Easiest</span> way for Selling and buying
            second-hand goods
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            auctor Sed bibendum varius euismod. Integer eget turpis sit amet
            lorem rutrum ullamcorper sed sed dui. vestibulum odio at elementum.
            Suspendisse et condimentum nibh.
          </p>
          <div className="app-buttons">
            <div className="app-button">
              <a href="#">
                <img src="images/1.png" />
              </a>
            </div>
            <div className="app-button">
              <a href="#">
                <img src="images/2.png" />
              </a>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
</>

      </Layout>
    );
}

export default home;