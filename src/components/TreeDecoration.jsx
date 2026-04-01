import React from 'react';

export default function TreeDecoration() {
  return (
    <div className="tree-forest">
      {/* Multiple trees with different sizes and sway speeds */}
      <svg className="tree tree-1" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tree-content">
          {/* Trunk */}
          <rect x="45" y="140" width="10" height="60" fill="#1a1a1a" />
          
          {/* Tree layers - triangular pine shape */}
          <polygon points="50,20 20,70 80,70" fill="#0d0d0d" />
          <polygon points="50,50 15,100 85,100" fill="#0d0d0d" />
          <polygon points="50,80 10,140 90,140" fill="#0d0d0d" />
        </g>
      </svg>

      <svg className="tree tree-2" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tree-content">
          <rect x="45" y="130" width="10" height="70" fill="#1a1a1a" />
          <polygon points="50,15 25,60 75,60" fill="#0d0d0d" />
          <polygon points="50,45 20,90 80,90" fill="#0d0d0d" />
          <polygon points="50,75 15,130 85,130" fill="#0d0d0d" />
        </g>
      </svg>

      <svg className="tree tree-3" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tree-content">
          <rect x="45" y="145" width="10" height="55" fill="#1a1a1a" />
          <polygon points="50,30 28,80 72,80" fill="#0d0d0d" />
          <polygon points="50,65 22,115 78,115" fill="#0d0d0d" />
          <polygon points="50,100 18,145 82,145" fill="#0d0d0d" />
        </g>
      </svg>

      <svg className="tree tree-4" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tree-content">
          <rect x="45" y="135" width="10" height="65" fill="#1a1a1a" />
          <polygon points="50,25 23,70 77,70" fill="#0d0d0d" />
          <polygon points="50,55 18,100 82,100" fill="#0d0d0d" />
          <polygon points="50,85 12,135 88,135" fill="#0d0d0d" />
        </g>
      </svg>

      <svg className="tree tree-5" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tree-content">
          <rect x="45" y="140" width="10" height="60" fill="#1a1a1a" />
          <polygon points="50,35 26,75 74,75" fill="#0d0d0d" />
          <polygon points="50,60 20,105 80,105" fill="#0d0d0d" />
          <polygon points="50,90 15,140 85,140" fill="#0d0d0d" />
        </g>
      </svg>

      <svg className="tree tree-6" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tree-content">
          <rect x="45" y="138" width="10" height="62" fill="#1a1a1a" />
          <polygon points="50,28 24,72 76,72" fill="#0d0d0d" />
          <polygon points="50,58 19,103 81,103" fill="#0d0d0d" />
          <polygon points="50,88 14,138 86,138" fill="#0d0d0d" />
        </g>
      </svg>
    </div>
  );
}
