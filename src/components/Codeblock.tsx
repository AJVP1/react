interface CodeblockProps {
  code: string;
  title?: string;
}

export default function Codeblock({ code, title }: CodeblockProps) {
  return (
    <div className="code-box my-8 -mx-6">
      {title && <div className="code-header">{title}</div>}
      <pre dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
}
