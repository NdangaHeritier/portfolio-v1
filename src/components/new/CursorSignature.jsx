export function CursorSignature({ cursor }) {
  return (
    <div
      className="cursor-signature"
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      aria-hidden="true"
    >
      <span>craftsmanship</span>
    </div>
  )
}
