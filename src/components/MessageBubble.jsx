export function MessageBubble({ role, content }) {
  const base = "p-3 rounded-xl max-w-xl whitespace-pre-wrap";
  const styles =
    role === "user"
      ? "bg-blue-500 text-white ml-auto"
      : "bg-white text-gray-900";

  return <div className={`${base} ${styles}`}>{content}</div>;
}
