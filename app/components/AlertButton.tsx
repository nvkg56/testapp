// export function AlertButton({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }
"use client";

export default function AlertButton({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
