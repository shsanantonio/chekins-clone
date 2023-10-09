export default function Destinations() {
  return (
    <section id="Destinations" className="bg-[#F8F8F8]">
      <div className="container flex flex-col pb-6   px-4 lg:w-10/12 mx-auto mt-16 space-y-12 md:space-y-0">
        <div className="flex flex-col space-y-12 ">
          <div className="text-center items-center justify-center flex flex-row  md:justify-between  md:text-left">
            <div>
              <span className="text-finalblue font-bold text-sm">
                Destinations
              </span>
              <h2 className=" text-4xl font-bold font-homepage text-center text-bluedark md:text-left">
                Book Hotels At Popular Destinations
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-4 row">
            <div className="column">
              <div className="img-hover-zoom">
                <img
                  src="/images/LasVegas.fa87d94b06054cd75387.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="LasVegas"
                />
                <div className="img-overlay">Las Vegas</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/London.f8bee7193470f77667d9.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="London"
                />
                <div className="img-overlay">London</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/Bangkok.45cbd2c6f88cb6bb2fd2.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Bangkok"
                />
                <div className="img-overlay">Bangkok</div>
              </div>
            </div>
            <div className="column">
              <div className="img-hover-zoom">
                <img
                  src="/images/LosAngeles.22a71d911bb2cabaf64f.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="LosAngeles"
                />
                <div className="img-overlay">Los Angeles</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/Maui.49bac4d40c0026505927.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Maui"
                />
                <div className="img-overlay">Maui</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/Dubai.0edcdc963f0b354b99d7.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Dubai"
                />
                <div className="img-overlay">Dubai</div>
              </div>
            </div>
            <div className="column">
              <div className="img-hover-zoom">
                <img
                  src="/images/Paris.4e62874277f55680e6bb.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Paris"
                />
                <div className="img-overlay">Paris</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/NewYork.e4a97a0f56c58d6c4f49.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="NewYork"
                />
                <div className="img-overlay">New York</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/Miami.2e405fe0c6038c124189.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Miami"
                />
                <div className="img-overlay">Miami</div>
              </div>
            </div>
            <div className="column">
              <div className="img-hover-zoom">
                <img
                  src="/images/Singapore.40f51fbbdf5eaf8f77ec.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Singapore"
                />
                <div className="img-overlay">Singapore</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/SanDiego.51573dd0e7c511d62491.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="SanDiego"
                />
                <div className="img-overlay">SanDiego</div>
              </div>
              <div className="img-hover-zoom">
                <img
                  src="/images/Sydney.ba16211fb53643fc4c88.webp"
                  width="100%"
                  className="rounded-md cursor-pointer object-cover"
                  alt="Sydney"
                />
                <div className="img-overlay">Sydney</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
