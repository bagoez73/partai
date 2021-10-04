import Layout from '../components/layout';

interface Post {
    id: number;
    nama: string;
    deskripsi: string;
}
  
interface VisiProps {
    dataVisi: Post[]
}

function visi(props: VisiProps) {
    const {dataVisi} = props;
      return (
        <Layout>
   <>
    <div className="single-page main-grid-border">
  <div className="container">
    <ol className="breadcrumb" style={{ marginBottom: 5 }}>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="all-classifieds.html">All Ads</a>
      </li>
      <li className="active">
        <a href="mobiles.html">Mobiles</a>
      </li>
      <li className="active">Mobile Phone</li>
    </ol>
    <div className="product-desc">
      <div className="col-md-7 product-view">
      {dataVisi.map((visi) => {
          return (
            <div key={visi.id}>
        <h2>
          {visi.nama}
        </h2>
        <p>
          {" "}
          <i className="glyphicon glyphicon-map-marker" />
          <a href="#">state</a>, <a href="#">city</a>| Added at 06:55 pm, Ad ID:
          987654321
        </p>
        <div className="flexslider">
            <img src="images/ss1.jpg" />
        </div>
        {/* FlexSlider */}
        <link
          rel="stylesheet"
          href="css/flexslider.css"
          type="text/css"
          media="screen"
        />
        {/* //FlexSlider */}
        <div className="product-details">
          {/* <h4>
            Brand : <a href="#">Company name</a>
          </h4>
          <h4>
            Views : <strong>150</strong>
          </h4>
          <p>
            <strong>Display </strong>: 1.5 inch HD LCD Touch Screen
          </p> */}
          <p>
            {visi.deskripsi}
          </p>
        </div>
        </div>
          )
        })}
      </div>
      <div className="col-md-5 product-details-grid">
        <div className="item-price">
          <div className="product-price">
            <p className="p-price">Price</p>
            <h3 className="rate">$ 259</h3>
            <div className="clearfix" />
          </div>
          <div className="condition">
            <p className="p-price">Condition</p>
            <h4>Good</h4>
            <div className="clearfix" />
          </div>
          <div className="itemtype">
            <p className="p-price">Item Type</p>
            <h4>Phones</h4>
            <div className="clearfix" />
          </div>
        </div>
        <div className="interested text-center">
          <h4>
            Interested in this Ad?<small> Contact the Seller!</small>
          </h4>
          <p>
            <i className="glyphicon glyphicon-earphone" />
            00-85-9875462655
          </p>
        </div>
        <div className="tips">
          <h4>Safety Tips for Buyers</h4>
          <ol>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
            <li>
              <a href="#">Contrary to popular belief.</a>
            </li>
          </ol>
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
  
  export default visi;
  
  export async function getServerSideProps() {
    const res = await fetch('https://setdprd.serangkota.go.id/next/backend/api/visi');
    const dataVisi = await res.json();
    return {
      props: {
        dataVisi,
      },
    };
  }
