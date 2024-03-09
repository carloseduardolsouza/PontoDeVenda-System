import "./BarNotification.css"
import DetalhesNotification from "../DetalhesNotification/DetalhesNotification"
import { MdKeyboardArrowRight } from "react-icons/md";

function BarNotification({functio}) {
    return ( 
        <div id="BarNotification">
            <button onClick={() => functio(false)} className="ExitNotification"><MdKeyboardArrowRight /></button>
            <div className="BarNotificationDetalhes">
                <DetalhesNotification/>
                <DetalhesNotification/>
                <DetalhesNotification/>
                <DetalhesNotification/>
                <DetalhesNotification/>
                <DetalhesNotification/>
            </div>
        </div>
     );
}

export default BarNotification;