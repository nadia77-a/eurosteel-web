
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      {/* <Head>
        <title>Our Contact | My Construction Website</title>
      </Head> */}
      <Header />

      <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Contact us</span>
              <h2 className="mb-4">Message us for more details</h2>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-8">
              <div className="map">
              <div class="mapouter"><div class="gmap_canvas">
                <iframe 
                src="https://maps.google.com/maps?q=rruga%20Ismet%20Gusia%2036,%20Tirane,%20Albania&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                title = "Address"
                height="342"
                width="100%"
                ></iframe><a href="https://fnfmods.net">fnf mods</a></div></div>
              </div>

            {/* <div className="map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height="342"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=rruga%20Ismet%20Gusia%2036,%20Tirane,%20Albania&amp"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title = "Address"
                ></iframe>
                <a href="https://yt2.org/youtube-to-mp3-ALeKk00qEW0sxByTDSpzaRvl8WxdMAeMytQ1611842368056QMMlSYKLwAsWUsAfLipqwCA2ahUKEwiikKDe5L7uAhVFCuwKHUuFBoYQ8tMDegUAQCSAQCYAQCqAQdnd3Mtd2l6">map</a>
              </div>
            </div>
          </div> */}

            </div>
            <div className="col-md-4 d-flex pl-md-5">
              <div className="row">
                <div className="dbox w-100 d-flex ftco-animate fadeInUp ftco-animated">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Address:</span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex ftco-animate fadeInUp ftco-animated">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Phone:</span> <a href="tel://1234567920">+355 (0)69 60 28 431</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex ftco-animate fadeInUp ftco-animated">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Email:</span> <a href="mailto:info@eurosteel.al">info@eurosteel.al</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex ftco-animate fadeInUp ftco-animated">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Website</span> <a href="./#">eurosteel.al</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
