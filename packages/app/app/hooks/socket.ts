import { useContext } from "react";
import { SocketContext } from "../contexts/socket";


export default function useSocket() {
    const { socket } = useContext(SocketContext);

    return socket;
}
