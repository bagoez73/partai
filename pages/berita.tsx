import Layout from '../components/layout';

interface Post {
  id: number;
  nama: string;
  deskripsi: string;
}

interface BeritaProps {
  dataBerita: Post[]
}

function berita(props: BeritaProps) {
  const {dataBerita} = props;
    return (
      <Layout>
 <>
  <div className="mobilaapp main-grid-border">
    <div className="container">
      <div className="app">
        <div className="col-md-5 app-left mpl">
        {dataBerita.map((berita) => {
        return (
          <div key={berita.id}>
            <h2>{berita.nama}</h2>
            <p>{berita.deskripsi}</p>
          </div>
        )
      })}
          {/* <h2>Resale mobile app on your smartphone!</h2>
          <p>
            Buy and Sell your Second-hand items quickly and easily straight from
            your phone.
          </p> */}
          <div className="app-devices">
            <h5>Gets the app from</h5>
            <a href="#">
              <img src="images/1.png" alt="" />
            </a>
            <a href="#">
              <img src="images/2.png" alt="" />
            </a>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="col-md-7 app-image">
          <img src="images/mob2.png" alt="" />
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="app-bottom-grids text-center">
      {/* <div className="container">
        <div className="col-md-3 app-bottom-grid">
          <i className="fa fa-search" />
          <h3>Search</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard industry.
          </p>
        </div>
        <div className="col-md-3 app-bottom-grid">
          <i className="fa fa-bell-o" />
          <h3>Notifications</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <div className="col-md-3 app-bottom-grid">
          <i className="fa fa-plus" />
          <h3>Add ads</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>
        </div>
        <div className="col-md-3 app-bottom-grid">
          <i className="fa fa-reply-all" />
          <h3>Get reply</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece.
          </p>
        </div>
        <div className="clearfix"> </div>
      </div> */}
    </div>
  </div>
</>

      </Layout>
    );
}

export default berita;

export async function getServerSideProps() {
  const res = await fetch('https://setdprd.serangkota.go.id/next/backend/api/berita');
  const dataBerita = await res.json();
  return {
    props: {
      dataBerita,
    },
  };
}