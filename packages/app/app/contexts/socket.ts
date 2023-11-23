import { createContext } from "react";
import { Socket } from "socket.io-client";


export type ISocketContext = {
    socket: Socket | null
};

export const SocketContext = createContext<ISocketContext>({
    socket: null
});
