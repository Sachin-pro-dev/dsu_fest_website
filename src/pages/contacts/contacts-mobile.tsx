import "../../index.css";
import Logo from "../../img/ENGLISH.png";
import Bg from "./wave.svg";
function ContactsMobile() {
  return (
    <div
      className="bg-black h-[50vh] flex flex-col justify-between"
      style={{ backgroundImage: `url(${Bg})`, backgroundRepeat: "no-repeat" }}
    >
      <div>
        <h2 className="text-black text-4xl font-bold m-10 mt-3">
          CONTACT US
        </h2>

        <div className="contactDiv flex gap-7">
          <div className="contactNum ml-3 mt-6">
            <div className=" flex items-center m-1 gap-2 text-cyan-50">
              <div className="bg-cyan-50 p-2 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-black "
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <ul>
                <li className="text-sm">RD Lohith</li>
                <li className="text-base">
                  <a href="tel:+91 8861422587">+91 8861422587</a>
                </li>
              </ul>
            </div>

            <div className=" flex items-center m-1 gap-2 text-cyan-50">
              <div className="bg-cyan-50 p-2 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-black "
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <ul>
                <li className="text-sm">Maheep</li>
                <li className="text-base">
                  <a href="tel:+91 8884142903">+91 8884142903</a>
                </li>
              </ul>
            </div>

            <div className=" flex items-center m-1 gap-2 text-cyan-50">
              <div className="bg-cyan-50 p-2 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-black "
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <ul>
                <li className="text-sm">Kunal Jaiswal</li>
                <li className="text-base">
                  <a href="tel:+91 9148748266">+91 9148748266</a>
                </li>
              </ul>
            </div>

            <div className=" flex items-center m-1 gap-2 text-cyan-50">
              <div className="bg-cyan-50 p-2 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-black "
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <ul>
                <li className="text-sm">Sai Karthik</li>
                <li className="text-base">
                  <a href="tel:+91 8553912102">+91 8553912102</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contactLogo ">
            <img
              src={Logo}
              className="rounded-full h-28 w-28 translate-y-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsMobile;
