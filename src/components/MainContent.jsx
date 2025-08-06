import "../styles/MainContent.css";
import ReactMarkdown from "react-markdown";

const fontSizeOverrides = {
  default: {
    h1: "2rem",
    h2: "1.5rem",
    h3: "1.25rem",
    p: "1rem",
    li: "1rem",
  },
  "'Pinyon Script', cursive": {
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    p: "1.5rem",
    li: "1.2rem",
  },
  "'Dancing Script', cursive": {
    h1: "2.25rem",
    h2: "1.75rem",
    h3: "1.5rem",
    p: "1.1rem",
    li: "1.2rem",
  },
  "'Cedarville Cursive', cursive": {
    h1: "2.25rem",
    h2: "1.75rem",
    h3: "1.5rem",
    p: "1.05rem",
    li: "1.2rem",
  },
  "'Great Vibes', cursive": {
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    p: "1.15rem",
    li: "1.2rem",
  },
};

const backgroundPositionOverrides = [
  "left top",
  "left center",
  "left bottom",
  "center top",
  "center center",
  "center bottom",
  "right top",
  "right center",
  "right bottom",
];

const backgroundSizeOverrides = ["cover", "auto 100%", "100% 100%"];

function MainContent({ fileContent, bgId, fontStyle, fontColor }) {
  const fontSizes = {
    ...fontSizeOverrides.default,
    ...(fontSizeOverrides[fontStyle] || {}),
  };

  const backgroundPosition =
    backgroundPositionOverrides[
      Math.floor(Math.random() * backgroundPositionOverrides.length)
    ];

  const backgroundSize =
    backgroundSizeOverrides[
      Math.floor(Math.random() * backgroundSizeOverrides.length)
    ];

  return (
    <main
      className="main-content"
      style={{
        backgroundImage: `url('/parchment-bg${bgId}.jpg')`,
        backgroundPosition,
        backgroundSize,
      }}
    >
      <div
        className="content-wrapper"
        style={{
          fontFamily: fontStyle,
          color: fontColor,
        }}
      >
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 {...props} style={{ fontSize: fontSizes.h1 }}>
                {props.children}
              </h1>
            ),
            h2: ({ node, ...props }) => (
              <h2 {...props} style={{ fontSize: fontSizes.h2 }}>
                {props.children}
              </h2>
            ),
            h3: ({ node, ...props }) => (
              <h3 {...props} style={{ fontSize: fontSizes.h3 }}>
                {props.children}
              </h3>
            ),
            p: ({ node, ...props }) => (
              <p {...props} style={{ fontSize: fontSizes.p }}>
                {props.children}
              </p>
            ),
            li: ({ node, ...props }) => (
              <li {...props} style={{ fontSize: fontSizes.li }}>
                {props.children}
              </li>
            ),
          }}
        >
          {fileContent}
        </ReactMarkdown>
      </div>
    </main>
  );
}

export default MainContent;
