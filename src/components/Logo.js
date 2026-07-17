export default function Logo({ className = "h-10 w-auto" }) {
  return (
    <svg viewBox="0 0 240 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background rectangle for INDIE */}
      <rect x="0" y="0" width="45" height="80" fill="#EAE9DE"/>
      
      {/* INDIE Text (rotated) */}
      <text x="22.5" y="42" fill="#2B2B2B" fontSize="26" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" letterSpacing="3" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90 22.5 42)">
        INDIE
      </text>
      
      {/* BOX Text */}
      <text x="55" y="55" fill="#EF7D33" fontSize="68" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" letterSpacing="-2">
        BOX
      </text>
      
      {/* PRODUCTIONS Text */}
      <text x="55" y="75" fill="#EAE9DE" fontSize="19" fontFamily="Arial, sans-serif" fontWeight="800" letterSpacing="1">
        PRODUCTIONS
      </text>
    </svg>
  );
}
