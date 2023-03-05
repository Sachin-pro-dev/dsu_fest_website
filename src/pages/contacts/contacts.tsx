import Footer from '../../components/footer'
import '../../index.css'
import logo from "../../img/dsu_logo.png";

function Contacts() {
    return (
        <div className="">
            <div className="flex justify-center items-center">
                <img src={logo} className="w-[500px]" alt="logo" />
            </div>
            <Footer />
        </div>
    )
}

export default Contacts