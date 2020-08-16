import Highlight, { defaultProps } from "prism-react-renderer";
import synthwave84 from "prism-react-renderer/themes/synthwave84";
import nightOwl from "prism-react-renderer/themes/nightOwl";

export function Code({ children, className }) {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={synthwave84}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
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
