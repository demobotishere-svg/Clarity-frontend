"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GridBackground() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    // Avoid generating heavy SVG animations on mobile devices to prevent lag
    if (window.innerWidth < 768) return;

    // Generate floating nodes on mount
    const newNodes = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 4 + 2, // 2px to 6px
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 6, // 6s to 12s
      color: Math.random() > 0.4 ? "rgba(230, 57, 70, 0.35)" : "rgba(42, 157, 143, 0.35)" // Red or Teal nodes
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern with slow breathing animation */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(220, 220, 207, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(220, 220, 207, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)"
        }}
        animate={{ opacity: [0.5, 0.95, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute rounded-full animate-float-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            backgroundColor: node.color,
            '--duration': `${node.duration}s`,
            '--delay': `${node.delay}s`
          }}
        />
      ))}
    </div>
  );
}
