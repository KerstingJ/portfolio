import { Highlight, defaultProps, themes } from "prism-react-renderer";

themes.synthwave84.styles.push({
  types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
  style: {
    color: "#a5b0f0", //"#8e9ced",
    fontStyle: "italic",
  },
});

export function Code({ children }) {
  if (!children) return;
  const language = children.props.className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
      theme={themes.synthwave84}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            background: "rgb(27 15 46)",
            overflow: "scroll",
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
