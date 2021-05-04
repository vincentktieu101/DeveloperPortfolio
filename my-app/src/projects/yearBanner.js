import React from "react"

export default function yearBanner(year) {
  return (
    <React.Fragment>
      {year === new Date().getFullYear() ? (
        <h4 className="text-center fade-in" style={{ marginBottom: "10px" }}>
          ~ {year} ~
        </h4>
      ) : (
        <h4 className="text-center fade-in" style={{ marginBottom: "10px" }}>
          ~ Built in {year} ~
        </h4>
      )}
    </React.Fragment>
  )
}
