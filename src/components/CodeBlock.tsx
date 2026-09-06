interface CodeBlockProps {
  code: string;
  title?: string;
  note?: string;
}

export function CodeBlock({ code, title = "Python", note }: CodeBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="rounded-xl overflow-hidden flex-1"
        style={{ background: "#080611", border: "1px solid rgba(124,58,237,0.22)" }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ background: "rgba(124,58,237,0.1)", borderBottom: "1px solid rgba(124,58,237,0.15)" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          <span className="ml-2 text-xs font-mono text-purple-400/70">{title}</span>
        </div>

        {/* Code */}
        <pre
          className="p-5 text-xs leading-6 overflow-x-auto"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#cfc8f3",
            maxHeight: 360,
          }}
        >
          <code>{code.trim()}</code>
        </pre>
      </div>

      {/* Note */}
      {note && (
        <p className="text-xs text-gray-500 italic leading-relaxed px-1">{note}</p>
      )}
    </div>
  );
}
