import React from "react";

const ChatResponse = ({ response }) => {
    // console.log(response?.candidates?.[0]?.content?.parts?.[0]?.text,"ddddd")
  if (!response) {
    return null;
  }
  const { candidates, usageMetadata } = response;
  console.log(candidates)
//   console.log(candidates?.[0]?.content?.parts?.[0]?.text,"cccc")
  return (
    <div className="container my-4">
      <h3>Response</h3>
      {candidates.map((candidate, index) => (
        <div className="card"  key={index}>
          <h5 className="card-title">Candidate {index + 1}</h5>
          <div className="card-body">
            {/* <p class="card-text">{candidates?.[0]?.content?.parts?.[0]?.text}</p> */}
            <p className="card-text">{candidate.content.parts[0].text}</p>
            {/* <p className="card-text">{candidates?.[0]?.content?.parts?.[0]?.text} Hello</p> */}
            <h6>Citations:</h6>
            <ul>
              {candidates?.citationMeatadata?.citationSources.map(
                (source, idx) => (
                  <li key={idx}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferal"
                    ></a>{" "}
                    (Indexes: {source.startIndex}-{source.endIndex})
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
      <h4>Usage Metadata</h4>
      <p>Prompt Tokens: {usageMetadata.promptTokenCount}</p>
      <p>Response Tokens: {usageMetadata.candidatesTokenCount}</p>
      <p>Total Tokens: {usageMetadata.totalTokenCount}</p>
    </div>
  );
};

export default ChatResponse;
