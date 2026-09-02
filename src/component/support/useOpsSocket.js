"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

/**
 * Live feed for the agent console.
 *
 * lib/notifyOps.js has always emitted `new_ticket` into the "ops" room, but no
 * client ever joined it — so a ticket raised at 11:04 was invisible until
 * somebody happened to press Refresh. This hook is the missing half.
 *
 * Auth: the handshake carries the httpOnly support cookie automatically
 * (withCredentials), so the browser never has to hold a key to listen. The
 * server verifies it before letting the socket into the room — see the
 * io.use() snippet in OPS-GUIDE.md.
 *
 * If the socket cannot connect (dev without server.js, or a proxy that blocks
 * websockets) `connected` stays false and the console falls back to polling,
 * so ops is degraded but never blind.
 */
export function useOpsSocket({ onNewTicket, onTicketUpdated, onTicketMessage } = {}) {
  const [connected, setConnected] = useState(false);
  const handlers = useRef({});
  handlers.current = { onNewTicket, onTicketUpdated, onTicketMessage };

  useEffect(() => {
    const socket = io({
      path: process.env.NEXT_PUBLIC_SOCKET_PATH || "/socket.io",
      withCredentials: true,
      transports: ["websocket", "polling"],
      reconnectionDelay: 1000,
      reconnectionDelayMax: 10000,
    });

    socket.on("connect", () => {
      setConnected(true);
      socket.emit("join_ops");
    });
    socket.on("disconnect", () => setConnected(false));
    socket.on("connect_error", () => setConnected(false));

    socket.on("new_ticket", (t) => handlers.current.onNewTicket?.(t));
    socket.on("ticket_updated", (t) => handlers.current.onTicketUpdated?.(t));
    socket.on("ticket_message", (m) => handlers.current.onTicketMessage?.(m));

    return () => socket.close();
  }, []);

  return { connected };
}

/**
 * A short two-tone chime for a new ticket. Deliberately built with WebAudio
 * rather than an mp3: no asset to ship, no autoplay policy to fight, and it is
 * silent until the agent has interacted with the page anyway.
 */
export function useNewTicketChime() {
  const ctxRef = useRef(null);

  return () => {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      ctxRef.current = ctxRef.current || new Ctx();
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      [880, 1170].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + i * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.2);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.12);
        osc.stop(ctx.currentTime + i * 0.12 + 0.22);
      });
    } catch {
      /* audio blocked — the visual badge still fires */
    }
  };
}